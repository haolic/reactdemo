import React from 'react';
import About from '../pages/About';
import Help from '../pages/Help';
import Home from '../pages/Home';
import Layout from '../layout/Layout';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
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
          </Switch>
        </Layout>
      </Route>
    </Router>
  );
}
