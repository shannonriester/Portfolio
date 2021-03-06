import React from 'react';
import { browserHistory } from 'react-router';
import Scroll from 'react-scroll';
var scroller = Scroll.scroller;
var Link = Scroll.Link;
var Element = Scroll.Element;

import Nav from '../Components/Nav';
import ConnectNav from '../Components/ConnectNav';
import AboutMePage from './AboutMePage';
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage';
import ProjectPage from './ProjectPage';

export default React.createClass({
  routeResume() {
    window.open("/assets/resume_SRiester.pdf");
  },
  routeFeature() {
    browserHistory.push('/Projects/Waggle');
  },
  componentDidMount() {
    let path = this.props.route.path.slice(1);
    let offset;
    let route = this.props.route.path.slice(1);
    if (route === 'Home') {
      offset = 0;
    } else if (route === 'AboutMe') {
      offset = -300;
    } else if (route === 'Portfolio') {
      offset = -220;
    } else if (route === 'Connect') {
      offset = -225;
    } else if (route === 'Contact') {
      offset = -60;
    }
    scroller.scrollTo(`${path}`, {
      duration: 100,
      offset: offset,
      delay: 100,
      smooth: true,
    });
  },
  render() {
    return (
      <div className="main-component">
        <Element name="Home" />
        <div className="main-header" style={{backgroundImage: `url(/assets/Adobe_Geometric.jpeg)`}}>
          <Nav />
          <section className="hero-section">
            <div className="title-container">
              <h1>Shannon Riester</h1>
              <h3>Web Developer</h3>
            </div>
            <div className="hero-btns-container">
              <button className="hero-btn recent-works-btn" onClick={this.routeFeature}>Featured Project</button>
              <button className="hero-btn resume-btn" onClick={this.routeResume}>Résumé</button>
            </div>
          </section>
        </div>
        <AboutMePage />
        <ConnectNav />
        <h2 className="recent-works-heading">Portfolio</h2>
        <PortfolioPage />
        <ContactPage />
      </div>
    );
  }
});
