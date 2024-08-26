import styles from './index.module.less';

const Meteor = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.innerIconWrap}>
          <span>流星</span>
        </div>
      </div>
    </div>
  );
};

Meteor.label = '流星效果';
export default Meteor;
