import React from 'react';
import $ from 'jquery';

import Examples from '../Collections/Examples';
import Nav2 from '../Components/Nav2';
import ProjectSlider from '../Components/ProjectSlider';

export default React.createClass({
  getInitialState() {
    return {
      highlights: true,
      hardest: false,
    }
  },
  toggleHighlights() {
    this.setState({
      highlights: !this.state.highlights,
      hardest: false,
    });
    // $('.project-best').css({
    //   "height": "100%",
    //   "transition": ".5s",
    // });
    // $('.project-p-best').css({
    //   "display": "block",
    //   "transition": ".5s",
    // });
    // $('.project-p-hardest').css({
    //   "display": "none",
    // });
  },
  toggleHardest() {
    this.setState({
      highlights: false,
      hardest: !this.state.hardest,
    });
    // $('.project-hardest').css({
    //   "height": "100%",
    //   "transition": ".5s",
    // });
    // $('.project-p-hardest').css({
    //   "display": "block",
    //   "transition": ".5s",
    // });
    // $('.project-p-best').css({
    //   "display": "none",
    // });
  },
  componentDidMount() {},
  render() {
    let project = Examples.filter((example, i) => {
      if (this.props.params.project === example.name) {
        return example;
      }
    });
    let otherProjects = Examples.filter((example, i) => {
      if (this.props.params.project !== example.name) {
        return example;
      }
    });
    project = project[0];

    let highlights;
    let hardest;
    if (this.state.highlights) {
      highlights = (<p className="project-p project-p-best">{project.best}</p>);
    }
    if (this.state.hardest) {
      hardest = (<p className="project-p project-p-hardest">{project.hardest}</p>);
    }

    return (

      <div className="project-page">
        <Nav2 />
        <div className="project-content-container">
          <ProjectSlider project={project}/>
          <ul className="project-ul">
            <li className="project-li project-best" onClick={this.toggleHighlights}>
              <div className="project-preview-about">
                <i className="about-arrow-icon fa fa-arrow-circle-up" aria-hidden="true"></i>
                <h3>Highlights</h3>
              </div>
              {highlights}
              </li>
            <li className="project-li project-hardest" onClick={this.toggleHardest}>
              <div className="project-preview-about">
                <h3>Hardest</h3>
                <i className="about-arrow-icon fa fa-arrow-circle-down" aria-hidden="true"></i>
              </div>
              {hardest}
            </li>
          </ul>

        </div>
      </div>
    );
  }
});
