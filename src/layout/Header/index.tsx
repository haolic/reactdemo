import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.jpg';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={goHome}>
        <img width={40} src={logo} key="logo" alt="faruxue" />
      </div>

      <HeaderMenu />
    </div>
  );
};

export default Header;
