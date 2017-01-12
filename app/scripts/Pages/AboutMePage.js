import React from 'react';
import Scroll from 'react-scroll';

import Nav from '../Components/Nav';

export default React.createClass({
  render() {
    var Element = Scroll.Element;
    return (
      <div className="about-me-page">
        <Element name="AboutMe"/>
          <header>
          <figure className="profile-figure" style={{backgroundImage: `url(/assets/ProfilePic.jpg)`}}></figure>
          <figcaption className="profile-figcaption">Hi, I'm Shannon!</figcaption>
          <section className="mission-section">
            <p className="mission-statement">I pride myself in my pursuit of mastery in life: I triple-majored for my undergraduate education; I moved to France to immerse myself in its culture and language; I completed a full marathon before ever running a half-marathon; I expanded my passion for programming, graduating from an intense training program, the Iron Yard, to become a front–end web developer.</p>
          </section>
          </header>
            <main className="profile-main">
              <h2>Skills</h2>
              <ul className="profile-skills-ul profile-skills-left">
                <li className="profile-skills-li">JavaScript</li>
                <li className="profile-skills-li">React</li>
                <li className="profile-skills-li">ES2015</li>
                <li className="profile-skills-li">HTML</li>
                <li className="profile-skills-li">CSS and SCSS</li>
              </ul>
              <ul className="profile-skills-ul profile-skills-right">
                <li className="profile-skills-li">jQuery</li>
                <li className="profile-skills-li">Backbone</li>
                <li className="profile-skills-li">Underscore</li>
                <li className="profile-skills-li">Bourbon.io</li>
                <li className="profile-skills-li">Neat.io</li>
              </ul>
            </main>
            <footer className="profile-footer">
            </footer>
      </div>
    );
  }
});
