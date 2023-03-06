import React, { useEffect } from 'react';
import style from './index.less';

const LayoutDemo = () => {
  useEffect(() => {
    // 手写Promise。
  }, []);
  return (
    <div className={style.box}>
      <div className={style.sec}>todo 手写promise</div>
    </div>
  );
};

LayoutDemo.title = 'TestComponent';

export default LayoutDemo;
