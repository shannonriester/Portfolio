import React from 'react';
import Scroll from 'react-scroll';

var Link = Scroll.Link;
// import { Link } from 'react-router';

import AboutMePage from '../Pages/AboutMePage';

export default React.createClass({
  render() {
    // var Link = Scroll.Link;

    return (
      <nav className="nav-component">
        <ul className="nav-ul">
          <li className="nav-li"><Link to="MainPage" smooth={true} duration={400}>Home</Link></li>
          <li className="nav-li"><Link to="AboutMePage" smooth={true} duration={500}>About Me</Link></li>
          <li className="nav-li"><Link to="PortfolioPage" smooth={true} duration={500}>Portfolio</Link></li>
          <li className="nav-li"><Link to="ResumePage" smooth={true} duration={500}>Résumé</Link></li>
          <li className="nav-li"><Link to="ContactPage" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    );
  }
});
