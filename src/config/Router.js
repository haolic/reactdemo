import React from 'react';
import menu from './menu.config';
import Layout from '../layout/Layout';
import { Provider } from 'react-redux';
import NotFound from '../components/404';
import store from '../store';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to={menu[0].path} />} />
            {menu.map((item) => {
              const Comp = item.component;
              return (
                <Route key={item.path} path={item.path} element={<Comp />} />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        {/* <Redirect to={`${initPath}${search}`} from="/" /> */}
      </BrowserRouter>
    </Provider>
  );
}
