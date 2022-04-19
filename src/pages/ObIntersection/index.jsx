import React from 'react';
import { useEffect } from 'react';
import styles from './index.less';

const ObIntersection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target, entry.intersectionRatio);
        });
      },
      { threshold: [0.5, 1] },
    );

    observer.observe(document.querySelector('#box1'));
    observer.observe(document.querySelector('#box2'));
  }, []);
  return (
    <div style={{ height: 5000 }}>
      <div id="box1" className={styles.box1}>
        111
      </div>
      <div id="box2" className={styles.box2}>
        222
      </div>
    </div>
  );
};

ObIntersection.label = '元素可见监听器';

export default ObIntersection;
