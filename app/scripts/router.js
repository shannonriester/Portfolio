import React from 'react';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';

import MainPage from './Pages/MainPage';
import PortfolioPage from './Pages/PortfolioPage';
import ResumePage from './Pages/ResumePage';
import AboutMePage from './Pages/AboutMePage';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={MainPage} />
    
  </Router>
);

export default router;
