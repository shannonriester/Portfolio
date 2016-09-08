import React from 'react';
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var Element = Scroll.Element;

import Nav from '../Components/Nav';
import ConnectNav from '../Components/ConnectNav';
import AboutMePage from './AboutMePage';
import PortfolioPage from './PortfolioPage';

export default React.createClass({
  routeResume() {
    window.open("/assets/resume_SRiester.pdf");
  },
  render() {
    return (
      <div className="main-component">
        <Element name="MainPage" />
        <div className="main-header" style={{backgroundImage: `url(/assets/Desk_Laptop.jpeg)`}}>
          <Nav />
          <section className="hero-section">
            <button className="hero-btn recent-works-btn"><Link to="PortfolioPage" smooth={true} duration={500} offset={-80}>Recent Works</Link></button>
            <button className="hero-btn resume-btn" onClick={this.routeResume}>Résumé</button>
          </section>
        </div>
        <AboutMePage />
        <ConnectNav />
        <h2 className="recent-works-heading">Recent Works</h2>
        <PortfolioPage />
      </div>
    );
  }
});
