import React from 'react';
import menu from './menu.config';
import Layout from '../layout/Layout';
import { Provider } from 'react-redux';
import store from '../store';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  const menu0 = menu[0];
  return (
    <Provider store={store}>
      <Router>
        <Redirect to={menu0.path} from="/" />
        <Route path="/">
          <Layout>
            <Switch>
              {menu.map(item => {
                const Comp = item.component;
                return (
                  <Route path={item.path} key={item.path}>
                    <Comp />
                  </Route>
                );
              })}
            </Switch>
          </Layout>
        </Route>
      </Router>
    </Provider>
  );
}
