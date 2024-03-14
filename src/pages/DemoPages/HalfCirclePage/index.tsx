import HalfCircle from './HalfCircle';
import styles from './index.module.less';

// 一个虚线的上半圆，每段虚线的长度为50，间隔为5
const HalfCirclePage = () => {
  return (
    <div className={styles.wrap}>
      <HalfCircle size={200} />
    </div>
  );
};

export default HalfCirclePage;
