import LayoutItem from './LayoutItem';
import styles from './index.module.less';
const AutoLayout = () => {
  return (
    <div className={styles.wrap}>
      {new Array(100).fill(0).map((_, index) => {
        return <LayoutItem index={index} key={index} />;
      })}
    </div>
  );
};

export default AutoLayout;
