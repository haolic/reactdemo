import React from 'react';
import styles from './index.less';

const Meteor = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.innerIconWrap}>
          <i className="iconfont">&#xe615;</i>
        </div>
      </div>
    </div>
  );
};

Meteor.label = '流星效果';
export default Meteor;
