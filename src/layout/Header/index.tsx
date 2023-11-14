import styles from './index.module.less';
import routes, { RouteItem } from '@/config/routes';
import classnames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [, firstPath] = pathname.split('/');

  const onClick = (item: RouteItem) => {
    navigate(item.path);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>logo</div>

      <div className={styles.menuWrap}>
        {routes.map((item) => {
          return (
            <div
              onClick={() => onClick(item)}
              key={item.path}
              className={classnames(styles.item, {
                [styles.active]: `/${firstPath}` === item.path,
              })}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
