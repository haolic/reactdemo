import React, { useCallback, useEffect, useState, useRef } from 'react';

// 模拟接口调用方法
function getData(params?): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('返回值111');
    }, 1000);
  });
}

interface Options {
  manual?: boolean; // 是否需要手动触发
  ready?: boolean; // 是否满足调用接口的条件
  loadingDelay?: number; // loading延迟展示
  defaultParams?: any; // 默认参数
  pollingInterval?: number; // 轮询间隔
  pollingErrorRetryCount?: number; // 轮询错误尝试次数
  refreshDeps?: any[]; // 依赖项
  debounceWait?: number; // 防抖等待间隔
  throttleWait?: number; // 节流调用间隔
  /**
   * 四个生命周期
   */
  onBefore?: (params: any) => void;
  onSuccess?: (result: any, params: any) => void;
  onError?: (error: any) => void;
  onFinally?: (params: any, result: any, error: any) => void;
}

interface IRequest {
  data: any;
  error: boolean;
  loading: boolean;
  run: (params?: any) => void; // 如果设置了 options.manual = true，则 useRequest 不会默认执行，需要通过 run 来触发执行
}

export function useRequest<T>(
  service: (params?) => Promise<T>,
  options?: Options,
): IRequest {
  const {
    manual,
    loadingDelay,
    defaultParams,
    pollingInterval,
    pollingErrorRetryCount,
    refreshDeps = [],
    debounceWait,
    throttleWait,
    onBefore,
    onSuccess,
    onError,
    onFinally,
  } = options;

  const [data, setData] = useState<T>(null); // 请求成功结果
  const [error, setError] = useState<any>(null); // 请求失败结果
  const [loading, setLoading] = useState<boolean>(false); // 请求loading, 默认: flase

  const pollingErrorNumber = useRef<number>(0); // 轮询错误尝试次数，默认值：0
  const debounceWaitId = useRef<ReturnType<typeof setTimeout>>();
  const throttleWaitId = useRef<ReturnType<typeof setTimeout>>();

  const getData = useCallback(
    (params?) => {
      // serviceIns为了缓存数据
      const serviceIns: {
        result?: any;
        error?: any;
        params?: any;
      } = {};

      let tId;
      // 如果设置了loading延迟展示，则在设置时间内不展示loading，防止页面快速闪一下loading
      if (loadingDelay) {
        tId = setTimeout(() => {
          setLoading(true);
        }, loadingDelay);
      } else {
        setLoading(true);
      }
      serviceIns.params = params;

      onBefore(params);

      service(params)
        .then((res) => {
          pollingErrorNumber.current = 0;
          setData(res);
          serviceIns.result = res;
          onSuccess(res, params);
        })
        .catch((err) => {
          setError(err);
          pollingErrorNumber.current++;
          serviceIns.error = err;
          onError(err);
        })
        .finally(() => {
          if (tId) {
            clearTimeout(tId);
          }
          onFinally(serviceIns.params, serviceIns.result, serviceIns.error);

          setLoading(false);
          // 如果设置轮询则按照设置时间轮询调用
          if (pollingInterval) {
            // 如果设置轮询且设置轮询错误尝试次数，超过设置次数后不再执行轮询
            if (
              pollingErrorRetryCount &&
              pollingErrorNumber.current > pollingErrorRetryCount
            ) {
              return;
            }

            setTimeout(() => {
              getData(params);
            }, pollingInterval);
          }
        });
    },
    [service, loadingDelay],
  );

  const isReady = 'ready' in options ? options.ready : true; // 设置ready则为设置值，否则赋值为true

  useEffect(() => {
    // 非手动并且ready的情况下调用接口
    if (!manual && isReady) {
      getData(defaultParams);
    }
  }, refreshDeps);

  const run = useRef((params?) => {
    if (!isReady) {
      return;
    }
    // 防抖情况
    if (debounceWait) {
      if (debounceWaitId.current) {
        clearTimeout(debounceWaitId.current);
      }

      debounceWaitId.current = setTimeout(() => {
        getData(params);
      }, debounceWait);
    } else if (throttleWait) {
      // 节流情况
      if (throttleWaitId.current) {
        return;
      }

      throttleWaitId.current = setTimeout(() => {
        throttleWaitId.current = null;
        getData(params);
      }, throttleWait);
    } else {
      getData(params);
    }
  });

  return {
    data,
    error,
    loading,
    run: run.current,
  };
}

const UseRequest = () => {
  const { data, error, loading, run } = useRequest<string>(getData, {
    // manual: true,
    // loadingDelay: 1500,
    // defaultParams: 'defaultParams',
    // pollingInterval: 2000,
    // pollingErrorRetryCount: 3,
    // refreshDeps: [],
    // debounceWait: 300,
    // throttleWait: 4000,
    // ready: false,
    onBefore: (params) => {
      console.log(`onBefore`, params);
    },
    onSuccess: (result, params) => {
      console.log(`onSuccess`, result, params);
    },
    onError: (error) => {
      console.log('error', error);
    },
    onFinally: (params, result, error) => {
      console.log('onFinally', params, result, error);
    },
  });

  return (
    <div>
      <button onClick={() => run('手动调用入参')}>点击请求</button>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {error && <div>filed to load</div>}
          {data && <div>Username: {data}</div>}
        </div>
      )}
    </div>
  );
};

UseRequest.title = 'UseRequest';

export default UseRequest;
