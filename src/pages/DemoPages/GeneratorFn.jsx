import React, { useEffect } from 'react';

const GeneratorFn = () => {
  useEffect(() => {
    function* hh(param) {
      console.log(param)
      const res1 = yield param + 1;
      console.log(res1)
      const res2 = yield res1 + 2;
      console.log(res2)
      const res3 = yield res2 + 2;
      console.log(res3)
      const res4 = yield res3 + 2;
      console.log(res4)
      const res5 = yield res4 + 2;
      console.log(res5)
      const res6 = yield res5 + 2;
      console.log(res6)
      return res6 + 3;
    }
    const resFn = hh(1);

    new Array(7).fill('').forEach((el, idx) => {
      /**
       * 遍历调用next();
       * 第一次调用next()是为了开始执行resFn函数，如果想next()中传入参数，参数没有用。
       * 第二次调用next(参数)执行第一个yield；第一个yield的返回值为本次传入next(参数)的参数。
       * ...
       */
      
      console.log(resFn.next(idx));
    })
  }, []);
  return <div>generatorFn</div>;
};

GeneratorFn.label = '生成器generator'

export default GeneratorFn;
