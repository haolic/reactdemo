import React, { useEffect, useRef } from 'react';

const SPEED = 2;

const 动画 = () => {
  const ref = useRef();
  const ref2 = useRef();
  useEffect(() => {
    const go = () => {
      const left = parseFloat(ref.current.style.left);
      ref.current.style.left = left + SPEED + 'px';
      window.requestAnimationFrame(go);
    };
    const go2 = () => {
      const left = parseFloat(ref2.current.style.left);
      ref2.current.style.left = left + SPEED + 'px';
      setTimeout(go2, (1 / 60) * 1000);
    };
    go2();
    go();
  }, []);
  return (
    <>
      <div
        ref={ref}
        style={{
          width: 100,
          height: 100,
          background: 'lightblue',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <div>ddd</div>
      </div>
      <div
        ref={ref2}
        style={{
          width: 100,
          height: 100,
          background: 'lightblue',
          position: 'absolute',
          top: 101,
          left: 0,
        }}
      >
        <div>ddd</div>
      </div>
    </>
  );
};

export default 动画;
