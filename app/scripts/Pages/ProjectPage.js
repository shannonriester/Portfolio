import React from 'react';

import Examples from '../Collections/Examples';
import Nav from '../Components/Nav';

export default React.createClass({
  componentDidMount() {
    // console.log(this.props);
  // let project = Examples.filter((example, i) => {
  //   if (this.props.params.projectName === example.name) {
  //     this.setState({project: example});
  //
  //     return example;
  //   }
  // });
  //   this.updateState();
  },
  render() {
    // console.log(this.state.project);
    // console.log(this.props);

    // console.log(project[0]);
    // console.log(this.state.project);
    let project = Examples.filter((example, i) => {
      console.log(this.props.params.project);
      if (this.props.params.project === example.name) {
        console.log(example);
        return example;
      }
    });
    project = project[0];

    return (
      <div className="project-page">
        <Nav />
        <h2 className="project-heading">{project.name}</h2>
        <p className="project-short-about"><span className="italics"></span>.  <span className="italics"></span> </p>
      </div>
    );
  }
});
