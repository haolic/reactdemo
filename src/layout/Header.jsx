import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.less';

const nav = [
  {
    name: '首页',
    path: '/home',
  },
  {
    name: '帮助',
    path: '/help',
  },
  {
    name: '关于',
    path: '/about',
  },
];

const Header = () => {
  return (
    <div className={styles.wrap}>
      {nav.map(el => (
        <div className={styles.item} key={el.path}>
          <Link to={el.path}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
