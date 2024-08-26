import { useEffect } from 'react';
import styles from './index.module.less';
import { useLocation, useNavigate } from 'react-router-dom';
import routes, { RouteItem } from '@/config/routes';
import classNames from 'classnames';

const HeaderMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [, firstPath] = pathname.split('/');
  useEffect(() => {
    if (!firstPath) {
      navigate('/home');
    }
  }, [pathname]);

  const onClick = (item: RouteItem) => {
    navigate(item.path);
  };

  return (
    <div className={styles.menuWrap}>
      {routes.map((item) => {
        let p = firstPath;
        if (p === 'home') {
          p = '';
        }
        return (
          <div
            onClick={() => onClick(item)}
            key={item.path}
            className={classNames(styles.item, {
              [styles.active]: `/${p}` === item.path,
            })}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
