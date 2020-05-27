import React, { useEffect, useRef } from 'react';

const SPEED = 5;

const 动画 = () => {
  const ref = useRef();
  const ref2 = useRef();
  const tid = useRef();
  useEffect(() => {
    let flag = false;
    let flag2 = false;
    const go = () => {
      if (ref.current) {
        let left = parseFloat(ref.current.style.left);
        if (left >= 500) {
          flag = true;
        }
        if (left <= 0) {
          flag = false;
        }
        if (flag) {
          left = left - SPEED;
        } else {
          left = left + SPEED;
        }
        ref.current.style.left = left + 'px';
        window.requestAnimationFrame(go);
      }
    };
    const go2 = () => {
      if (ref2.current) {
        let left = parseFloat(ref2.current.style.left);
        if (left >= 500) {
          flag2 = true;
        }
        if (left <= 0) {
          flag2 = false;
        }
        if (flag2) {
          left = left - SPEED;
        } else {
          left = left + SPEED;
        }
        ref2.current.style.left = left + 'px';
        tid.current = setTimeout(go2, (1 / 60) * 1000);
      }
    };
    go2();
    go();
    return () => {
      // 组件卸载时会执行清楚函数
      clearTimeout(tid.current);
    };
  }, []);
  return (
    <>
      <div
        ref={ref2}
        style={{
          width: 100,
          height: 100,
          background: 'lightblue',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <div>xxx</div>
      </div>
      <div
        ref={ref}
        style={{
          width: 100,
          height: 100,
          background: 'lightblue',
          position: 'absolute',
          top: 101,
          left: 0,
        }}
      >
        <div>
          request-
          <br />
          Animation-
          <br />
          Frame
        </div>
      </div>
    </>
  );
};

export default 动画;
