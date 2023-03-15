import React, { useCallback, useEffect, useState, useRef } from 'react';

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
  run: (params?: any) => void;
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

  const [data, setData] = useState<T>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const pollingErrorNumber = useRef<number>(0);
  const debounceWaitId = useRef<ReturnType<typeof setTimeout>>();
  const throttleWaitId = useRef<ReturnType<typeof setTimeout>>();

  const getData = useCallback(
    (params?) => {
      const serviceIns: {
        result?: any;
        error?: any;
        params?: any;
      } = {};
      let tId;
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
          if (pollingInterval) {
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
  const isReady = 'ready' in options ? options.ready : true;
  useEffect(() => {
    if (!manual && isReady) {
      getData(defaultParams);
    }
  }, refreshDeps);

  const run = useRef((params?) => {
    if (!isReady) {
      return;
    }
    if (debounceWait) {
      if (debounceWaitId.current) {
        clearTimeout(debounceWaitId.current);
      }

      debounceWaitId.current = setTimeout(() => {
        getData(params);
      }, debounceWait);
    } else if (throttleWait) {
      if (throttleWaitId.current) {
        return;
      }
      throttleWaitId.current = setTimeout(() => {
        getData(params);
        throttleWaitId.current = null;
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
    manual: true,
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
  useEffect(() => {
    // run('手动调用入参');
  }, []);

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
