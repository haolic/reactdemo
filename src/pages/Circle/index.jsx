import React, { useState, useEffect } from 'react';
import styles from './index.module.less';

const config = {
  size: 200,
};

const Circle = () => {
  const { size } = config;
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    if (rotate < 360) {
      requestAnimationFrame(() => {
        setRotate(rotate + 5);
      });
    }
  }, [rotate]);
  return (
    <div className={styles.wrap}>
      <div
        className={styles.circleWrap}
        style={{
          height: size,
          width: size,
        }}
      >
        <div
          className={`${styles.halfWrap} ${styles.rightHalfWrap}`}
          style={{
            width: size / 2,
            height: size,
          }}
        >
          <div
            className={styles.inner}
            style={{
              transform: `rotate(${rotate > 180 ? 180 : rotate}deg)`,
            }}
          ></div>
        </div>

        <div
          className={`${styles.halfWrap} ${styles.leftHalfWrap}`}
          style={{
            width: size / 2,
            height: size,
          }}
        >
          <div
            className={styles.inner}
            style={{
              transform: `rotate(${rotate <= 180 ? 0 : rotate - 180}deg)`,
            }}
          ></div>
        </div>

        {rotate < 180 && (
          <div
            className={styles.pointRight}
            style={{
              transform: `rotate(${rotate > 180 ? 180 : rotate}deg)`,
            }}
          ></div>
        )}
        {rotate >= 180 && (
          <div
            className={styles.pointLeft}
            style={{
              transform: `rotate(${rotate <= 180 ? 0 : rotate - 180}deg)`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

Circle.label = '圆环';
export default Circle;
