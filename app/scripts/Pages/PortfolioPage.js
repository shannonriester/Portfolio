import React from 'react';
import Scroll from 'react-scroll';

import PortfolioPreview from '../Components/PortfolioPreview';

var Element = Scroll.Element;

export default React.createClass({
  getInitialState() {
    return {
      portfolioImgs: ['/assets/Waggle/SearchResultsPage.png', '/assets/BeatTheBands/SearchPage.png', '/assets/PokemonGame/LandingPage.png', '/assets/Jeopardy/Gameboard.png'],
      portfolioHover: ['/assets/Waggle/LandingPage.png', '/assets/BeatTheBands/VoteModal.png', '/assets/PokemonGame/BattlePage.png', '/assets/Jeopardy/QuestionModal.png'],
      showFooter: false,
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
  showFooter() {
    console.log('showing footer');
  },
  hideFooter() {},
  // showFooterWaggle() {
  //   this.setState({
  //     footerWaggle: true,
  //     waggleImgUrl: '/assets/Waggle/LandingPageBrunch.png',
  //   });
  // },
  // showFooterBeatBands() {
  //   this.setState({
  //     footerBeatBands: true,
  //     beatBandsImgUrl: '/assets/BeatTheBands/VoteModal.png',
  //   });
  // },
  // showFooterPokemon() {
  //   this.setState({
  //     footerPokemon: true,
  //     pokemonImgUrl: '/assets/PokemonGame/LandingPage.png',
  //   });
  // },
  // showFooterJeopardy() {
  //   this.setState({
  //     footerJeopardy: true,
  //     jeopardyImgUrl: '/assets/Jeopardy/QuestionModal.png'
  //   });
  // },
  // hideFooterWaggle() {
  //   this.setState({
  //     footerWaggle: false,
  //     waggleImgUrl: '/assets/Waggle/SearchResultsPage.png',
  //   });
  // },
  // hideFooterBeatBands() {
  //   this.setState({
  //     footerBeatBands: false,
  //     beatBandsImgUrl: '/assets/BeatTheBands/SearchPage.png',
  //   });
  // },
  // hideFooterPokemon() {
  //   this.setState({
  //     footerPokemon: false,
  //     pokemonImgUrl: '/assets/PokemonGame/LandingPage.png',
  //   });
  // },
  // hideFooterJeopardy() {
  //   this.setState({
  //     footerJeopardy: false,
  //     jeopardyImgUrl: '/assets/Jeopardy/GameBoard.png',
  //   });
  // },
  render() {
    let footerWaggle;
    let footerBeatBands;
    let footerPokemon;
    let footerJeopardy;


    let portfolioHover;

    let portfolioImgs = this.state.portfolioImgs.map((image, i) => {
      console.log(image);
      return (
        <PortfolioPreview
        key={i}
        showFooter={this.showFooter}
        hideFooter={this.hideFooter}
        image={image}
        style={{backgroundImage: `url({image})`}}
        />);
    });

    // <li className="portfolio-preview portfolio-side-item waggle-preview"
    //   style={{backgroundImage:`url(${this.state.waggleImgUrl})`}}
    //   onMouseEnter={this.showFooterWaggle}
    //   onMouseLeave={this.hideFooterWaggle}>
    //   {footerWaggle}
    // </li>
    // <li className="portfolio-preview portfolio-side-item beat-the-bands-preview"
    //   style={{backgroundImage:`url(${this.state.beatBandsImgUrl})`}}
    //   onMouseEnter={this.showFooterBeatBands}
    //   onMouseLeave={this.hideFooterBeatBands}>
    //   {footerBeatBands}
    // </li>
    // <li className="portfolio-preview portfolio-side-item pokemon-preview"
    //   style={{backgroundImage:`url(${this.state.pokemonImgUrl})`}}
    //   onMouseEnter={this.showFooterPokemon}
    //   onMouseLeave={this.hideFooterPokemon}>
    //   {footerPokemon}
    // </li>
    // <li className="portfolio-preview portfolio-side-item jeopardy-preview"
    //   style={{backgroundImage:`url(${this.state.jeopardyImgUrl})`}}
    //   onMouseEnter={this.showFooterJeopardy}
    //   onMouseLeave={this.hideFooterJeopardy}>
    //   {footerJeopardy}
    // </li>


    return (
      <div className="portfolio-page">
        <Element name="PortfolioPage" />
        <ul className="portfolio-sides">
          {portfolioImgs}
        </ul>
      </div>
    );
  }
});
