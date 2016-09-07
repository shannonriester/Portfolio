import React from 'react';
import { Router, browserHistory, hashHistory, IndexRoute, Route } from 'react-router';

import MainPage from './Pages/MainPage';
import PortfolioPage from './Pages/PortfolioPage';

const router = (
  <Router history={browserHistory}>
    <Route path="/Home" component={MainPage}/>
    <Route path="/Portfolio" component={PortfolioPage}/>
  </Router>
);

export default router;
