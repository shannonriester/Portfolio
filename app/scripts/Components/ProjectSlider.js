import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      images: this.props.project.projectImages,
      i: 0,
      slide: '',
    }
  },
  slideLeft() {
    let newI;
    if (this.state.i < (this.state.images.length - 1)) {
      newI = this.state.i + 1;
    } else if (this.state.i === (this.state.images.length - 1)) {
      newI = 0;
    }
    this.setState({
      i: newI,
      slide: 'slide-out-left'
    });
    // this.setState({scroll: 'slide-out-left'});
  window.setTimeout(() => {
    this.setState({
      scroll: 'slide-in-left',
  });
  }, 300);
  },
  slideRight() {
    let newI;
    if (this.state.i > 0) {
      newI = this.state.i - 1;
    } else {
      newI = 4;
    }
    this.setState({
      i: newI,
      slide: 'slide-out-right'
    });
    // this.setState({scroll: 'slide-out-right'});
  window.setTimeout(() => {
    this.setState({
      slide: 'slide-in-left',
  });
  }, 300);
  },
  skipToImg(e) {
    this.setState({i: e.target.value})
  },
  componentDidMount() {
    this.setState({currentImg: this.props.project.projectImages[0]});
  },
  render() {
    console.log(this.state.i);
    let sliderBtns = this.state.images.map((url, i) => {
      return (<li key={i} className="slider-btn-li" onClick={this.skipToImg} value={i}></li>)
    });
    return (
      <div className="project-slider-component">
        <figure className="portfolio-preview project-img"
                id={this.state.slide}
                style={{backgroundImage:`url(${this.state.images[this.state.i]})`}}>
        </figure>
        <ul className="slider-btn-ul">
          {sliderBtns}
        </ul>
        <section className="next-btns">
          <i className="icon-arrow left fa fa-arrow-left" aria-hidden="true" onClick={this.slideRight}></i>
          <i className="icon-arrow right fa fa-arrow-right" aria-hidden="true" onClick={this.slideLeft}></i>
        </section>
      </div>
    );
  }
});
