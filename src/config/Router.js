import React from 'react';
import About from '../pages/About';
import Help from '../pages/Help';
import Home from '../pages/Home';
import Redux from '../pages/Redux';
import Layout from '../layout/Layout';
import { Provider } from 'react-redux';
import store from '../store';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Redirect to="/home" from="/" />
        <Route path="/">
          <Layout>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/redux">
                <Redux />
              </Route>
            </Switch>
          </Layout>
        </Route>
      </Router>
    </Provider>
  );
}
