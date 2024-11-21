import { motion } from 'motion/react';
import { useState } from 'react';

const Motion = () => {
  const [v, setV] = useState(0);

  const handleClick = () => {
    setV((v) => {
      return (v + 10) * 1.2;
    });
  };

  return (
    <motion.div>
      <motion.button onClick={handleClick}>点击</motion.button>
      <motion.div
        initial={{
          width: 0,
          height: 0,
          backgroundColor: 'red',
        }}
        animate={{
          width: v,
          height: v,
          backgroundColor: 'red',
        }}
        transition={{
          duration: 0.1,
          ease: 'easeInOut',
        }}
      ></motion.div>
    </motion.div>
  );
};

export default () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Motion />
  </motion.div>
);
