import React from 'react';

import Examples from '../Collections/Examples';
import Nav from '../Components/Nav';

export default React.createClass({
  render() {
    let project = Examples.filter((example, i) => {
      if (this.props.params.projectName === example.name) {
        return example;
      }
    });
    project = project[0]
    console.log(project);

    return (
      <div className="project-page">
        <Nav />
        <h2 className="project-heading">{project.name}</h2>
      </div>
    );
  }
});
