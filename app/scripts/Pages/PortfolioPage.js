import React from 'react';
import Scroll from 'react-scroll';

import Examples from '../Collections/Examples';
import PortfolioPreview from '../Components/PortfolioPreview';

var Element = Scroll.Element;

export default React.createClass({
  getInitialState() {
    return {
      showFooter: false,
      footerWaggle: false,
    }
  },
  render() {
    let portfolioPreview = Examples.map((example, i) => {
      return (<PortfolioPreview
        key={i}
        example={example}
        />);
    });

    return (
      <div className="portfolio-page">
        <Element name="Portfolio" />
        <ul className="portfolio-sides">
          {portfolioPreview}
        </ul>
      </div>
    );
  }
});
