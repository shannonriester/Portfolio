import React from 'react';

export default React.createClass({
  componentWillReceiveProps(newProps) {
    console.log(newProps);
  },
  render() {
    let footer;
    if (this.props.key[0] === 0) {
      footer = (
          <footer className="preview-footer">
            <section className="footer-content">
              <p className="preview-about-app">A location-based, social-media app that allows you to search for dog-friendly places, find cute dogs, and meet other local dog-lovers!</p>
              <ul className="icons-ul">
                <li>
                  <a className="portfolio-live-link" href="http://_waggle.surge.sh/">
                    <i className="portfolio-icon fa fa-external-link" aria-hidden="true"></i>
                    <label className="app-label"> Live site</label>
                  </a>
                </li>
                <li>
                  <a className="portfolio-live-link" href="https://github.com/shannonriester/Waggle">
                    <i className="portfolio-icon fa fa-github-square" aria-hidden="true"></i>
                    <label className="app-label"> GitHub</label>
                  </a>
                </li>
              </ul>
            </section>
          </footer>);
    }
    if (this.props.key[1] === 1) {
      footer = (
          <footer className="preview-footer">
            <section className="footer-content">
              <p className="preview-about-app">Beat the Bands, was built using Spotify's API. Users can vote up/down which artist they'd prefer see visit their city.</p>
              <ul className="icons-ul">
                <li>
                  <a className="portfolio-live-link" href="https://shannonriester.github.io/Beat-The-Bands-day-38/">
                    <i className="portfolio-icon fa fa-external-link" aria-hidden="true"></i>
                    <label className="app-label"> Live site</label>
                  </a>
                </li>
                <li>
                  <a className="portfolio-live-link" href="https://github.com/shannonriester/Beat-The-Bands-day-38">
                    <i className="portfolio-icon fa fa-github-square" aria-hidden="true"></i>
                    <label className="app-label"> GitHub</label>
                  </a>
                </li>
              </ul>
            </section>
          </footer>);
    }
    if (this.props.key[2] === 2) {
      footer = (
          <footer className="preview-footer">
            <section className="footer-content">
              <p className="preview-about-app">Collaborating on a team can be hard, but my peers and I really pulled together, having so much fun pair-programming, and built this awesome game!</p>
              <ul className="icons-ul">
                <li>
                  <a className="portfolio-live-link" href="https://marklyck.github.io/Pokemon/">
                    <i className="portfolio-icon fa fa-external-link" aria-hidden="true"></i>
                    <label className="app-label"> Live site</label>
                  </a>
                </li>
                <li>
                  <a className="portfolio-live-link" href="https://github.com/MarkLyck/Pokemon">
                    <i className="portfolio-icon fa fa-github-square" aria-hidden="true"></i>
                    <label className="app-label"> GitHub</label>
                  </a>
                </li>
              </ul>
            </section>
          </footer>);
    }
    if (this.props.key[3] === 3) {
      footer = (
          <footer className="preview-footer">
            <section className="footer-content">
              <p className="preview-about-app">My Jeopardy game renders random categories and questions from actual Jeopardy clues and questions. Play for yourself!</p>
              <ul className="icons-ul">
                <li>
                  <a className="portfolio-live-link" href="http://jeopardy_sriester.surge.sh/">
                    <i className="portfolio-icon fa fa-external-link" aria-hidden="true"></i>
                    <label className="app-label"> Live site</label>
                  </a>
                </li>
                <li>
                  <a className="portfolio-live-link" href="https://github.com/shannonriester/Day-33-Jeopardy">
                    <i className="portfolio-icon fa fa-github-square" aria-hidden="true"></i>
                    <label className="app-label"> GitHub</label>
                  </a>
                </li>
              </ul>
            </section>
          </footer>);
    }

    return (
      <li className="portfolio-preview portfolio-side-item waggle-preview" style={{backgroundImage:`url(${this.props.image})`}}>
      {footer}
      </li>
    );
  }
});
