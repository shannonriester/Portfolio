import React from 'react';

export default React.createClass({
  render() {


    return (
      <li className="portfolio-preview portfolio-side-item waggle-preview" style={{backgroundImage:`url(${this.props.image})`}}>
        
      </li>
    );
  }
});
