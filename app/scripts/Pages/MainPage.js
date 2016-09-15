import React from 'react';
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
            <button className="hero-btn recent-works-btn"><Link to="Portfolio" smooth={true} duration={500} offset={-220}>Recent Works</Link></button>
            <button className="hero-btn resume-btn" onClick={this.routeResume}>Résumé</button>
          </section>
        </div>
        <AboutMePage />
        <ConnectNav />
        <h2 className="recent-works-heading">Recent Works</h2>
        <PortfolioPage />
        <ContactPage />
      </div>
    );
  }
});
