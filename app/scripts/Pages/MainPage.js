import React from 'react';
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var Element = Scroll.Element;

import Nav from '../Components/Nav';
import AboutMePage from './AboutMePage';
import PortfolioPage from './PortfolioPage';
// import ResumePage from './ResumePage';


export default React.createClass({
  render() {
    return (
      <div className="main-component">
        <Element name="MainPage" />
        <div className="main-header" style={{backgroundImage: `url(/assets/Desk_Laptop.jpeg)`}}>
          <Nav />
          <section className="hero-section">
            <button className="hero-btn recent-works-btn"><Link to="PortfolioPage" smooth={true} duration={500} offset={-80}>Recent Works</Link></button>
            <button className="hero-btn resume-btn"><Link to="/ResumePage" smooth={true} duration={500} offset={-80}>Résumé</Link></button>
          </section>
        </div>
        <AboutMePage />
        <PortfolioPage />
      </div>
    );
  }
});
