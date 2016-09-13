import React from 'react';

import Examples from '../Collections/Examples';
import Nav from '../Components/Nav';

export default React.createClass({
  // getInitialState() {
  //   return {
  //     project: {},
  //   }
  // },
  // updateState() {
  //   let project = Examples.filter((example, i) => {
  //     if (this.props.params.projectName === example.name) {
  //       return example;
  //     }
  //   });
  //
  //   this.setState({project: project[0]});
  // },
  // componentDidMount() {

    // this.setState({project: project[0]});
    // this.updateState();
  // },
  render() {
    // console.log(this.state.project);
    console.log(this.props.params.projectName);
    // let project = Examples.filter((example, i) => {
    //   if (this.props.params.projectName === example.name) {
    //     return example;
    //   }
    // });
    // console.log(project[0]);
    // console.log(this.state.project);

    return (
      <div className="project-page">
        <Nav />
        <h2 className="project-heading">Test</h2>
      </div>
    );
  }
});
