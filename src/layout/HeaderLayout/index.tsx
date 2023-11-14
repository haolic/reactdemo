import { Outlet } from 'react-router-dom';
import Header from '@/layout/Header';

const HeaderLayout = () => {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default HeaderLayout;
