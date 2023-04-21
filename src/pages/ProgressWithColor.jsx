import React, { useState } from 'react';
import styles from './ProgressWithColor.module.less';

const ProgressWithColor = () => {
  const [width, setWidth] = useState(0);

  const click = () => {
    const w = width + 5;
    if (w > 100) {
      setWidth(0);
    } else {
      setWidth(w);
    }
  };

  const progressColor = width > 6 && width <= 85 ? '#1677FF' : '#FF3B2F';

  const breakPointColor = width > 85 ? '#1677FF' : 'transparent';
  const zIndex = width > 85 ? 2 : 0;

  return (
    <div className={styles.wrap}>
      <div className={styles.progressContainer}>
        <div
          className={styles.innerLine}
          style={{
            backgroundColor: breakPointColor,
            zIndex,
          }}
        ></div>
        <div className={styles.point}></div>

        <div
          className={styles.innerLine + ' ' + styles.innerLineMiddle}
          style={{
            backgroundColor: breakPointColor,
            zIndex,
          }}
        ></div>
        <div className={styles.point}></div>

        <div
          className={styles.innerLine}
          style={{
            backgroundColor: 'transparent',
          }}
        ></div>

        <div
          className={styles.progressLine}
          style={{ width: `${width}%`, backgroundColor: progressColor }}
        >
          <div
            className={styles.progressPoint}
            style={{
              borderColor: progressColor,
            }}
          ></div>
        </div>
      </div>
      <div>
        <button onClick={click}>点击</button>
      </div>
    </div>
  );
};
ProgressWithColor.label = '分段进度条';
export default ProgressWithColor;
