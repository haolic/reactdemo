import { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import classnames from 'classnames';

const flag = 100;

const randomGen = (flag: number) => {
  return Array.from({ length: flag }, (v, k) => k + 1).sort(
    () => Math.random() - 0.5
  );
};

const Sort = () => {
  const [type, setType] = useState('冒泡');
  const wrapDom = useRef<HTMLDivElement>(null);
  const pending = useRef(false);
  const [current, setCurrent] = useState(0);
  const [currentCompare, setCurrentCompare] = useState(0);
  const [width, setWidth] = useState(0);
  // 生成一个长度为flag的数组，元素顺序随机
  const [list, setList] = useState(randomGen(flag));

  useEffect(() => {
    if (wrapDom.current) {
      setWidth(wrapDom.current.clientWidth / flag - 1);
    }
  }, []);

  const reset = () => {
    pending.current = false;
    setList(randomGen(flag));
    setCurrent(0);
    setCurrentCompare(0);
  };

  const renderList = (arr: number[]) => {
    if (pending.current) {
      setList([...arr]);
    }
  };

  // 冒泡排序
  const bubbleSort = async (arr: number[]) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        setCurrent(j);
        setCurrentCompare(j + 1);
        if (arr[j] > arr[j + 1]) {
          await new Promise((resolve, rejct) => {
            if (!pending.current) {
              rejct('');
            }

            requestAnimationFrame(() => {
              resolve('');
            });
          });
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          renderList([...arr]);
        }
      }
    }
  };

  // 选择排序
  const selectSort = async (arr: number[]) => {
    const len = arr.length;
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
      minIndex = i;
      setCurrent(i);
      for (let j = i + 1; j < len; j++) {
        setCurrentCompare(j);
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
        await new Promise((resolve, rejct) => {
          if (!pending.current) {
            rejct('');
          }

          requestAnimationFrame(() => {
            resolve('');
          });
        });
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      renderList([...arr]);
    }
  };

  // 插入排序
  const insertSort = async (arr: number[]) => {
    const len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
      setCurrent(i);
      setCurrentCompare(i - 1);
      preIndex = i - 1;
      current = arr[i];

      while (preIndex >= 0 && arr[preIndex] > current) {
        arr[preIndex + 1] = arr[preIndex];
        preIndex--;
      }
      arr[preIndex + 1] = current;
      await new Promise((resolve, rejct) => {
        if (!pending.current) {
          rejct('');
        }

        requestAnimationFrame(() => {
          resolve('');
        });
      });
      renderList([...arr]);
    }
  };

  // 快速排序
  const quickSort = async (arr: number[]) => {
    const quickSortFn = async (arr: number[]) => {
      if (arr.length <= 1) {
        return arr;
      }

      const pivotIndex = Math.floor(arr.length / 2);

      setCurrent(pivotIndex);
      const pivot = arr.splice(pivotIndex, 1)[0];
      const left = [];
      const right = [];
      for (let i = 0; i < arr.length; i++) {
        setCurrent(i);
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }

      const l = await quickSortFn(left);
      const r = await quickSortFn(right);
      const res = l.concat([pivot], r);

      return res;
    };
    const list = await quickSortFn(arr);
    setList(list);
  };

  // 堆排序
  const heapSort = async (arr: number[]) => {
    let len = arr.length;
    let temp;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      await heapify(arr, i, len);
    }
    for (let i = len - 1; i > 0; i--) {
      temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      await heapify(arr, 0, i);
    }

    async function heapify(arr: number[], x: number, len: number) {
      let l = 2 * x + 1;
      let r = 2 * x + 2;
      let largest = x;

      if (l < len && arr[l] > arr[largest]) {
        largest = l;
      }
      if (r < len && arr[r] > arr[largest]) {
        largest = r;
      }
      setCurrent(largest);
      if (largest !== x) {
        [arr[x], arr[largest]] = [arr[largest], arr[x]];
        await new Promise((resolve, rejct) => {
          if (!pending.current) {
            rejct('');
          }

          requestAnimationFrame(() => {
            resolve('');
          });
        });
        setList([...arr]);

        await heapify(arr, largest, len);
      }
    }
  };

  // 归并排序
  const mergeSort = async (arr: number[]) => {
    if (arr.length < 2) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    const res = await merge(await mergeSort(left), await mergeSort(right));
    await new Promise((resolve, rejct) => {
      if (!pending.current) {
        rejct('');
      }

      requestAnimationFrame(() => {
        resolve('');
      });
    });
    setList([...res]);
    return res;
    function merge(left: number[], right: number[]) {
      const result = [];
      let i = 0;
      let j = 0;
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }
      while (i < left.length) {
        result.push(left[i]);
        i++;
      }
      while (j < right.length) {
        result.push(right[j]);
        j++;
      }
      return result;
    }
  };

  // 希尔排序
  const shellSort = async (arr: number[]) => {
    const len = arr.length;
    let temp,
      gap = 1;
    while (gap < len / 3) {
      gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
      for (let i = gap; i < len; i++) {
        temp = arr[i];
        let j = i - gap;
        for (j; j >= 0 && arr[j] > temp; j -= gap) {
          arr[j + gap] = arr[j];
          setCurrentCompare(j);
        }
        arr[j + gap] = temp;
        setCurrent(i);
        await new Promise((resolve, rejct) => {
          if (!pending.current) {
            rejct('');
          }

          requestAnimationFrame(() => {
            resolve('');
          });
        });
        renderList([...arr]);
      }
    }
  };

  // 计数排序
  const countSort = async (arr: number[]) => {
    const len = arr.length;
    let max = arr[0];
    for (let i = 1; i < len; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    const bucket = new Array(max + 1).fill(0);
    let sortIndex = 0;
    for (let i = 0; i < len; i++) {
      if (!bucket[arr[i]]) {
        bucket[arr[i]] = 0;
      }
      bucket[arr[i]]++;
    }
    for (let j = 0; j < bucket.length; j++) {
      while (bucket[j] > 0) {
        arr[sortIndex++] = j;
        await new Promise((resolve, rejct) => {
          if (!pending.current) {
            rejct('');
          }

          requestAnimationFrame(() => {
            resolve('');
          });
        });
        bucket[j]--;
        console.log(arr);
        renderList([...arr]);
      }
    }
  };

  const start = () => {
    if (pending.current) {
      return;
    }
    pending.current = true;
    switch (type) {
      case '冒泡':
        bubbleSort(list);
        break;
      case '选择':
        selectSort(list);
        break;
      case '插入':
        insertSort(list);
        break;
      case '快排':
        quickSort(list);
        break;
      case '堆排':
        heapSort(list);
        break;
      case '归并':
        mergeSort(list);
        break;
      case '希尔':
        shellSort(list);
        break;
      case '计数':
        countSort(list);
        break;
    }
  };

  return (
    <div>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={start}>
          开始
        </button>
        <button className={styles.btn} onClick={reset}>
          重置
        </button>
        <select
          className={styles.btn}
          onChange={(e) => setType(e.target.value)}
          defaultValue={type}
        >
          <option>冒泡</option>
          <option>选择</option>
          <option>插入</option>
          <option>快排</option>
          <option>堆排</option>
          <option>归并</option>
          <option>希尔</option>
          <option>计数</option>
          <option>基数</option>
          <option>桶排</option>
        </select>
      </div>

      <div className={styles.wrap} ref={wrapDom}>
        {list.map((item, index) => {
          return (
            <div
              data-key={item}
              key={`${item}`}
              className={classnames(styles.item, {
                [styles.current]: index === current,
                [styles.currentCompare]: item === currentCompare,
              })}
              style={{
                height: `${(item / flag) * 100}%`,
                width,
                left: `${(index / flag) * 100}%`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Sort;
