import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <nav className="nav-component">
        <ul className="nav-ul">
          <li className="nav-li"><Link to={"/Home"}>Home</Link></li>
          <li className="nav-li"><Link to={"Portfolio"}>Portfolio</Link></li>
          <li className="nav-li"><Link to={"Resume"}>Résumé</Link></li>
          <li className="nav-li"><Link to={"AboutMe"}>About Me</Link></li>
          <li className="nav-li"><Link to={"Contact"}>Contact</Link></li>
        </ul>
      </nav>
    );
  }
});
