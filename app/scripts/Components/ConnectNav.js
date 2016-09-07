import React from 'react';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

export default React.createClass({
  render() {
    return (
      <nav className="connect-nav-component">
        <Element name="connectComponent" />
        <ul className="connect-ul">
          <li className="connect-li">
            <a href="https://github.com/shannonriester">
            <i className="connect-icon fa fa-github" aria-hidden="true"></i>
            </a>
            <h3>GitHub</h3>
            <p>See all of my projects and hard work on my GitHub.</p>
          </li>
          <li className="connect-li">
            <a href="https://www.linkedin.com/in/shannon-riester">
            <i className="connect-icon fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <h3>LinkedIn</h3>
            <p>Connect with me on LinkedIn and learn more about my professional background.</p>
          </li>
          <li className="connect-li">
            <a href="https://twitter.com/ShannonRiester">
            <i className="connect-icon fa fa-twitter" aria-hidden="true"></i>
            </a>
            <h3>Twitter</h3>
            <p>Follow me on Twitter and let's see who we have in common!</p>
          </li>
          <li className="connect-li">
            <a href="https://medium.com/@shannonriester">
            <i className="connect-icon fa fa-medium" aria-hidden="true"></i>
            </a>
            <h3>Medium</h3>
            <p>Checkout my blog and read about my journey as I went through the Iron Yard.</p>
          </li>
        </ul>
      </nav>
    );
  }

});
