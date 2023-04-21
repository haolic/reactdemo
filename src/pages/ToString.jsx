import React from 'react';
import styles from './ToString.module.less';

const ToString = () => {
  const click = () => {
    console.log(123);
  };
  return (
    <div>
      <div className={styles.content} onClick={click}  data-xxxx="xxx">
        我是div
      </div>
    </div>
  );
};

ToString.label = 'html';
export default ToString;
