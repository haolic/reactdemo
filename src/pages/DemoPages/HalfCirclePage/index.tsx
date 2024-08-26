import { useState } from 'react';
import HalfCircle from './HalfCircle';
import styles from './index.module.less';

// 一个虚线的上半圆，每段虚线的长度为50，间隔为5
const HalfCirclePage = () => {
  const [currentLevel, setCurrentLevel] = useState(0);

  const onClick = () => {
    let l = currentLevel + 1;
    if (l > 5) {
      l = 0;
    }
    setCurrentLevel(l);
  };
  return (
    <div className={styles.wrap}>
      <HalfCircle currentLevel={currentLevel} />
      <button onClick={onClick}>点击</button>
    </div>
  );
};

export default HalfCirclePage;
