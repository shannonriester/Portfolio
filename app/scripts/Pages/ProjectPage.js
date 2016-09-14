import React from 'react';

import Examples from '../Collections/Examples';
import Nav from '../Components/Nav';

export default React.createClass({
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
    console.log(project);
    console.log(otherProjects);

    return (
      <div className="project-page">
        <Nav />
        <div className="project-content-container">
          <h2 className="project-heading">{project.name}</h2>
          <figure className="portfolio-preview project-img"
                  style={{backgroundImage:`url(${project.image})`}}
                  onMouseOver={this.showFooter}
                  onMouseLeave={this.hideFooter}>

                  </figure>
          <figcaption className="project-caption">{project.aboutBody}</figcaption>
          <ul className="project-ul">
            <li className="project-li project-best"> <h3>The Best</h3> {project.best}</li>
            <li className="project-li project-hardest"> <h3>The Hardest</h3> {project.hardest}</li>
          </ul>
          <footer className="footer-other-projects">
            <ul className="ul-other-projects">
              <li className="li-other-projects"><figure className="figure-other-projects overlay" style={{backgroundImage:`url(${otherProjects[0].imgHover})`}}></figure></li>
              <li className="li-other-projects"><figure className="figure-other-projects overlay" style={{backgroundImage:`url(${otherProjects[1].imgHover})`}}></figure></li>
              <li className="li-other-projects"><figure className="figure-other-projects overlay" style={{backgroundImage:`url(${otherProjects[2].image})`}}></figure></li>
              <li></li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
});
