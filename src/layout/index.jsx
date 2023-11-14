import { Outlet } from 'react-router-dom';
import Aside from './Aside';
import Content from './Content';
import Header from './Header';
import styles from './index.module.less';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrap}>
        <Aside />
        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  );
};

export default Layout;
