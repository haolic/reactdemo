import LayoutItem from './LayoutItem';
import styles from './index.module.less';
import { motion } from 'motion/react';
const AutoLayout = () => {
  return (
    <div className={styles.wrap}>
      {new Array(100).fill(0).map((_, index) => {
        return <LayoutItem index={index} key={index} />;
      })}
    </div>
  );
};

export default () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <AutoLayout />
  </motion.div>
);
