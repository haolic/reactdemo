import logo from '@/assets/logo.jpg';
import styles from './index.module.less';

const HomePage = () => {
  return (
    <div className={styles.wrap}>
      <img alt="logo" src={logo} />
    </div>
  );
};

export default HomePage;
