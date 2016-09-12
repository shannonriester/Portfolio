import React from 'react';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

import MainPage from './Pages/MainPage';
import AboutMePage from './Pages/AboutMePage';
import PortfolioPage from './Pages/PortfolioPage';
import ConnectNav from './Components/ConnectNav';
import ContactPage from './Pages/ContactPage';
import ProjectPage from './Pages/ProjectPage';

const router = (
  <Router history={browserHistory}>
    <Route path="/*" component={MainPage} />
    <Route path="/Home" component={MainPage}  Link to="MainPage"/>
    <Route path="/AboutMe" component={MainPage} Link to="AboutMe"/>
    <Route path="/Portfolio" component={MainPage} Link to="Portfolio"/>
    <Route path="/Connect" component={MainPage} Link to="Connect"/>
    <Route path="/Contact" component={MainPage} Link to="Contact"/>
    <Route path="Projects/:projectName" component={ProjectPage} />
  </Router>
);

export default router;
