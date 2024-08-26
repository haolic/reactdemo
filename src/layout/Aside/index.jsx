import { useEffect, useState } from 'react';
import styles from './index.module.less';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import routes from '@/config/routes';
import classnames from 'classnames';

const Aside = () => {
  const [sideMenuList, setSideMenuList] = useState([]);
  const [activeItemPath, setActiveItemPath] = useState('');

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const [, firstPath, secondPath] = pathname.split('/');

    // 通过 pathname 获取侧边栏菜单
    const sideMenu =
      routes.find((el) => el.path === `/${firstPath}`)?.children || [];
    setSideMenuList(sideMenu);

    // 设置当前激活的菜单项
    setActiveItemPath(secondPath ? `/${secondPath}` : '');
    // 如果没有一级菜单，则默认跳转到第一个一级菜单

    if (!firstPath) {
      navigate(`/${routes[0].path}`);
    }

    // 如果没有二级菜单，且有一级菜单，则默认跳转到一级菜单的第一个二级菜单
    if (!secondPath && sideMenu.length > 0) {
      navigate(`${pathname}/${sideMenu[0].path}`);
    }
  }, [pathname]);

  useEffect(() => {
    const [, , secondPath] = pathname.split('/');

    // 当前选中的菜单滚动到可视区域
    setTimeout(() => {
      const activeItem = document.getElementById(secondPath);

      activeItem?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }, 100);
  }, []);

  return (
    <div className={styles.wrap}>
      {sideMenuList.map((el, idx) => {
        return (
          <div
            className={classnames(styles.item, {
              [styles.active]: activeItemPath === `/${el.path}`,
            })}
            key={el.path}
            id={el.path}
            title={el.name}
            onClick={() => {
              setActiveItemPath(el.path);
              navigate(`${el.path}`);
            }}
          >
            {idx + 1}. {el.name}
          </div>
        );
      })}
    </div>
  );
};

export default Aside;
