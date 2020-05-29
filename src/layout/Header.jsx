import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menu from '../config/menu.config';
import styles from './Header.less';

const Header = () => {
  const [activeItem, setActiveItem] = useState(menu[0].path);
  useEffect(() => {
    if (window.location.pathname === '/') {
      setActiveItem(menu[0].path);
    } else {
      setActiveItem(window.location.pathname || menu[0].path);
    }
  }, []);
  return (
    <div className={styles.wrap}>
      {menu.map(el => (
        <div
          className={`${styles.item} ${activeItem === el.path ? styles.active : ''}`}
          key={el.path}
        >
          <Link to={el.path} onClick={() => setActiveItem(el.path)}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
