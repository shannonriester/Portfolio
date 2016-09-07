import React from 'react';

import Nav from '../Components/Nav';

export default React.createClass({
  render() {
    return (
      <div className="main-component">
        <div className="main-header" style={{backgroundImage: `url(/assets/Desk_Laptop.jpeg)`}}></div>
        <Nav />
        Main component
      </div>
    );
  }
});
