import React from 'react';

import Examples from '../Collections/Examples';
import Nav from '../Components/Nav';
import ProjectSlider from '../Components/ProjectSlider';

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
    // console.log(project);
    // console.log(otherProjects);

    return (
      <div className="project-page">
        <Nav />
        <div className="project-content-container">
          <h2 className="project-heading">{project.name}</h2>
          <ProjectSlider project={project}/>
          <figcaption className="project-caption">{project.aboutBody}</figcaption>
          <ul className="project-ul">
            <li className="project-li project-best"> <h3>Highlights</h3> {project.best}</li>
            <li className="project-li project-hardest"> <h3>Lowlights</h3> {project.hardest}</li>
          </ul>

        </div>
      </div>
    );
  }
});
