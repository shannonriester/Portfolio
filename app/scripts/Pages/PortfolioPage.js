import React from 'react';
import Scroll from 'react-scroll';

var Element = Scroll.Element;
// import Nav from '../Components/Nav';

export default React.createClass({
  getInitialState() {
    return {
      footerWaggle: false,
      footerJeopardy: false,
      footerBeatBands: false,
    }
  },
  showFooterWaggle() {
    this.setState({footerWaggle: true});
  },
  showFooterJeopardy() {
    this.setState({footerJeopardy: true});
  },
  showFooterBeatBands() {
    this.setState({footerBeatBands: true});
  },
  hideFooterWaggle() {
    this.setState({footerWaggle: false});
  },
  hideFooterJeopardy() {
    this.setState({footerWaggle: false});
  },
  hideFooterBeatBands() {
    this.setState({footerWaggle: false});
  },
  render() {
    let footerWaggle;
    let footerBeatBands;
    let footerJeopardy;
    if (this.state.footerWaggle) {
      footerWaggle = (
          <footer className="preview-footer">
            <section className="footer-content">
              <p className="preview-about-app">A location-based, social-media app that allows you to search for dog-friendly places, find cute dogs, and meet other local dog-lovers!</p>
              <ul className="icons-ul">
                <li>
                  <a className="portfolio-live-link" href="http://_waggle.surge.sh/">
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                    <label className="app-label"> Live site</label>
                  </a>
                </li>
                <li>
                  <a className="portfolio-live-link" href="https://github.com/shannonriester/Waggle">
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                    <label className="app-label"> GitHub</label>
                  </a>
                </li>
              </ul>
            </section>
          </footer>);
    }
    if (this.state.footerBeatBands) {
      footerBeatBands = (
          <footer className="preview-footer">
            <section className="footer-content">
              <p className="preview-about-app">A quick preview about Beat the Bands!</p>
              <ul className="icons-ul">
                <li>
                  <a className="portfolio-live-link" href="https://shannonriester.github.io/Beat-The-Bands-day-38/">
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                    <label className="app-label"> Live site</label>
                  </a>
                </li>
                <li>
                  <a className="portfolio-live-link" href="https://github.com/shannonriester/Beat-The-Bands-day-38">
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                    <label className="app-label"> GitHub</label>
                  </a>
                </li>
              </ul>
            </section>
          </footer>);
    }
    if (this.state.footerJeopardy) {
      footerJeopardy = (
          <footer className="preview-footer">
            <section className="footer-content">
              <p className="preview-about-app">A quick preview about my Jeopardy app!</p>
              <ul className="icons-ul">
                <li>
                  <a className="portfolio-live-link" href="http://jeopardy_sriester.surge.sh/">
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                    <label className="app-label"> Live site</label>
                  </a>
                </li>
                <li>
                  <a className="portfolio-live-link" href="https://github.com/shannonriester/Day-33-Jeopardy">
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                    <label className="app-label"> GitHub</label>
                  </a>
                </li>
              </ul>
            </section>
          </footer>);
    }

    return (
      <div className="portfolio-page">
        <Element name="PortfolioPage" />
        <div className="portfolio-preview waggle-preview"
            style={{backgroundImage:`url(/assets/Waggle/LandingPage.png)`}}
            onMouseEnter={this.showFooterWaggle}
            onMouseLeave={this.hideFooterWaggle}>
            {footerWaggle}
        </div>

        <ul className="portfolio-sides">
          <li className="portfolio-preview portfolio-side-item beat-the-bands-preview"
            style={{backgroundImage:`url(/assets/BeatTheBands/SearchPage.png)`}}
            onMouseEnter={this.showFooterBeatBands}
            onMouseLeave={this.hideFooterBeatBands}>
            {footerBeatBands}
          </li>
          <li className="portfolio-preview portfolio-side-item jeopardy-preview"
            style={{backgroundImage:`url(/assets/Jeopardy/GameBoard.png)`}}
            onMouseEnter={this.showFooterJeopardy}
            onMouseLeave={this.hideFooterJeopardy}>
            {footerJeopardy}
          </li>
        </ul>
      </div>
    );
  }
});
