import React from 'react';
import { Link } from 'react-router';

import Nav from '../Components/Nav';
import PortfolioPage from './PortfolioPage';

export default React.createClass({
  render() {
    return (
      <div className="main-component">
        <div className="main-header" style={{backgroundImage: `url(/assets/Desk_Laptop.jpeg)`}}>
          <Nav />
          <section className="hero-section">
            <button className="hero-btn recent-works-btn"><Link to={"/Portfolio"}>Recent Works</Link></button>
            <button className="hero-btn resume-btn"><Link to={"/Resume"}>Résumé</Link></button>
          </section>
        </div>

        <PortfolioPage />

      </div>
    );
  }
});
