import React from 'react';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

import Nav from '../Components/Nav';

export default React.createClass({
  render() {
    return (
      <div className="resume-page">
        <Element name="ResumePage"/>
        <figure className="resume-figure" style={{backgroundImage: `url(/assets/resume_SRiester.jpg)`}}></figure>
      </div>
    );
  }
});
