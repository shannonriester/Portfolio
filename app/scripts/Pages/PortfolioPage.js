import React from 'react';
import Scroll from 'react-scroll';

import PortfolioPreview from '../Components/PortfolioPreview';

var Element = Scroll.Element;

export default React.createClass({
  getInitialState() {
    return {
      portfolioImgs: ['/assets/Waggle/SearchResultsPage.png', '/assets/BeatTheBands/SearchPage.png', '/assets/PokemonGame/LandingPage.png', '/assets/Jeopardy/Gameboard.png'],
      portfolioHover: ['/assets/Waggle/LandingPage.png', '/assets/BeatTheBands/VoteModal.png', '/assets/PokemonGame/BattlePage.png', '/assets/Jeopardy/QuestionModal.png'],
      footerWaggle: false,
      waggleImgUrl: '/assets/Waggle/SearchResultsPage.png',
      footerBeatBands: false,
      beatBandsImgUrl: '/assets/BeatTheBands/SearchPage.png',
      footerPokemon: false,
      pokemonImgUrl: '/assets/PokemonGame/BattlePage.png',
      footerJeopardy: false,
      jeopardyImgUrl: '/assets/Jeopardy/GameBoard.png',

    }
  },
  showFooterWaggle() {
    this.setState({
      footerWaggle: true,
      waggleImgUrl: '/assets/Waggle/LandingPageBrunch.png',
    });
  },
  showFooterBeatBands() {
    this.setState({
      footerBeatBands: true,
      beatBandsImgUrl: '/assets/BeatTheBands/VoteModal.png',
    });
  },
  showFooterPokemon() {
    this.setState({
      footerPokemon: true,
      pokemonImgUrl: '/assets/PokemonGame/LandingPage.png',
    });
  },
  showFooterJeopardy() {
    this.setState({
      footerJeopardy: true,
      jeopardyImgUrl: '/assets/Jeopardy/QuestionModal.png'
    });
  },
  hideFooterWaggle() {
    this.setState({
      footerWaggle: false,
      waggleImgUrl: '/assets/Waggle/SearchResultsPage.png',
    });
  },
  hideFooterBeatBands() {
    this.setState({
      footerBeatBands: false,
      beatBandsImgUrl: '/assets/BeatTheBands/SearchPage.png',
    });
  },
  hideFooterPokemon() {
    this.setState({
      footerPokemon: false,
      pokemonImgUrl: '/assets/PokemonGame/LandingPage.png',
    });
  },
  hideFooterJeopardy() {
    this.setState({
      footerJeopardy: false,
      jeopardyImgUrl: '/assets/Jeopardy/GameBoard.png',
    });
  },
  render() {
    let footerWaggle;
    let footerBeatBands;
    let footerPokemon;
    let footerJeopardy;
    if (this.state.footerWaggle) {
      footerWaggle = (
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
    if (this.state.footerBeatBands) {
      footerBeatBands = (
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
    if (this.state.footerPokemon) {
      footerPokemon = (
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
    if (this.state.footerJeopardy) {
      footerJeopardy = (
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

    let portfolioHover;
    //
    // let portfolioImgs = this.state.portfolioImgs.map((image, i) => {
    //   return (
    //     <PortfolioPreview
    //     onMouseEnter={this.showFooter}
    //     onMouseLeave={this.hideFooter}
    //     style={{backgroundImage: `url({image[i]})`}}
    //     />);
    // });


    return (
      <div className="portfolio-page">
        <Element name="PortfolioPage" />
        <ul className="portfolio-sides">
          <li className="portfolio-preview portfolio-side-item waggle-preview"
            style={{backgroundImage:`url(${this.state.waggleImgUrl})`}}
            onMouseEnter={this.showFooterWaggle}
            onMouseLeave={this.hideFooterWaggle}>
            {footerWaggle}
          </li>
          <li className="portfolio-preview portfolio-side-item beat-the-bands-preview"
            style={{backgroundImage:`url(${this.state.beatBandsImgUrl})`}}
            onMouseEnter={this.showFooterBeatBands}
            onMouseLeave={this.hideFooterBeatBands}>
            {footerBeatBands}
          </li>
          <li className="portfolio-preview portfolio-side-item pokemon-preview"
            style={{backgroundImage:`url(${this.state.pokemonImgUrl})`}}
            onMouseEnter={this.showFooterPokemon}
            onMouseLeave={this.hideFooterPokemon}>
            {footerPokemon}
          </li>
          <li className="portfolio-preview portfolio-side-item jeopardy-preview"
            style={{backgroundImage:`url(${this.state.jeopardyImgUrl})`}}
            onMouseEnter={this.showFooterJeopardy}
            onMouseLeave={this.hideFooterJeopardy}>
            {footerJeopardy}
          </li>
        </ul>
      </div>
    );
  }
});
