import React, { useRef, useEffect } from 'react';
import _ from 'lodash';

const DebounceTest = () => {
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current = { age: 20 };
    }, 1000);
  }, []);

  const debounceFn = useRef(
    _.debounce((...params) => {
      console.log(...params, ref.current);
    }, 100),
  );

  const tid = useRef();

  useEffect(() => {
    tid.current = setInterval(() => {
      if (ref && ref.current) {
        debounceFn.current(ref.current.age);
      }
    }, 200);
    return () => {
      clearInterval(tid.current);
    };
  }, []);

  return <div>DebounceTest</div>;
};

DebounceTest.label = 'debounce执行测试';

export default DebounceTest;
