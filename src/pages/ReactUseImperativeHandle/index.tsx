import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

const ReactUseImperativeHandle = (props: any, ref: Ref<any>) => {
  useImperativeHandle(ref, (...params) => {
    return {
      xx: () => {
        console.log(123);
      },
    };
  });

  return (
    <div>
      <input />
      <br />
      useImperativeHandle可以定制函数式组件的ref有哪些属性。
    </div>
  );
};

const FReactUseImperativeHandle = forwardRef(ReactUseImperativeHandle);

const UseComp = () => {
  const compRef = useRef();
  return <FReactUseImperativeHandle ref={compRef} />;
};

UseComp.title = 'React18的useImperativeHandle';

export default UseComp;
