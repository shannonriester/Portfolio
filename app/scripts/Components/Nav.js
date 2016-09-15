import React from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';
import Scroll from 'react-scroll';
var Link = Scroll.Link;

export default React.createClass({
  routeToLink(e) {
    let link = e.target.innerHTML.split(' ').join('');
    // console.log(link);
    // browserHistory.push("/");
    browserHistory.push("/" + link);
  },
  componentDidMount() {
    $(window).scroll(function(){
        if($(window).scrollTop() === 0){
            $(".nav-component").css({"background-color":"rgba(232, 51, 84, 0.0)"});
        }
        else if ($(window).scrollTop() < 730){
            $(".nav-component").css({
              "background-color":`rgba(227, 29, 78, ${$(window).scrollTop() / 2000 + 0.2})`});
        } else {
          $(".nav-component").css({"background-color":"#E83354"});
        }
    });
  },
  render() {
    return (
      <nav className="nav-component">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="Home"
                  smooth={true}
                  duration={400}
                  onClick={this.routeToLink}>Home</Link>
          </li>
          <li className="nav-li">
            <Link to="AboutMe"
                  smooth={true}
                  duration={500}
                  offset={-350}
                  onClick={this.routeToLink}>About Me</Link>
          </li>
          <li className="nav-li">
            <Link to="Portfolio"
                  smooth={true}
                  duration={500}
                  offset={-220}
                  onClick={this.routeToLink}>Portfolio</Link>
          </li>
          <li className="nav-li">
            <Link to="Connect"
                  smooth={true}
                  duration={500}
                  offset={-255}
                  onClick={this.routeToLink}>Connect</Link>
          </li>
          <li className="nav-li">
            <Link to="Contact"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onClick={this.routeToLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
});
