import React from 'react';

import Nav from '../Components/Nav';

export default React.createClass({
  render() {
    return (
      <div className="about-me-page">
        <Nav />
        <figure className="profile-figure" style={{backgroundImage: `url(/assets/ProfilePic.jpg)`}}></figure>
        <figcaption className="profile-figcaption">Hi, I'm Shannon!</figcaption>
        <section className="mission-section">
          <p className="mission-statement">I pride myself in my pursuit of mastery in life: I triple-majored for my undergraduate education; I moved to France to immerse myself in its culture and language; I completed a full marathon before ever running a half-marathon; I expanded my passion for programming, graduating from an intense training program, the Iron Yard, to become a software engineer.</p>
        </section>
      </div>
    );
  }
});
