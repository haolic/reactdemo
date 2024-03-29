import React from 'react';
import styles from './Onepx.module.less';

const OnePx = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.normal}>1px</div>
      <div className={styles.divShadow}>box-shadow: inset 0px -1px 1px -1px #000;</div>
      <div className={styles.div}>border-bottom: 0.5px solid #000;</div>
      <div className={styles.after}>::after</div>
    </div>
  );
};

OnePx.label = '移动端1px问题'

export default OnePx;
