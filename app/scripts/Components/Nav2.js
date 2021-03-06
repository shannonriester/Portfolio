import React from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';
import Scroll from 'react-scroll';
var Link = Scroll.Link;

export default React.createClass({
  // track() {
    // $.getScript('http://www.geoplugin.net/javascript.gp', function() {
    //   let country = geoplugin_countryName();
    //   let regionCode = geoplugin_region();
    //   let district = geoplugin_city();
    //   let latitude = geoplugin_latitude();
    //   let longitude = geoplugin_longitude();
    //   let date = new Date();
    //   // console.log('The location is: ' + country + ', ' + zone + ', ' + district + ' at ' + date);
    //   console.log('working');
    //
    //     store.adminCollection.save({
    //       country: country,
    //       regionCode: regionCode,
    //       district: district,
    //       latitude: latitude,
    //       longitude: longitude,
    //       date: date,
    //     },
    //     { url: `https://baas.kinvey.com/user/kid_H1o3YfRo/Visitors`,
    //       type: 'POST',
    //       success: (model, response) => {
    //         console.log('SUCCESS', response);
    //     },
    //      error: function(model, response) {
    //        throw new Error('LOGIN FAILED');
    //     },
    //   });
    // });
  // },
  routeToLink(e) {
    let link = e.target.innerHTML.split(' ').join('');
    browserHistory.push("/" + link);
  },
  routeHome() {
    browserHistory.push("/Home");
  },
  componentDidMount() {
    // store.adminCollection.fetch();

    $(".nav2-component").css({"background-color":"rgba(232, 51, 84, 1.0)"});

    // this.track();
  },
  render() {
    return (
      <nav className="nav2-component">
        <div className="nav-name" onClick={this.routeHome}>
          <p className="name-p">Shannon Riester</p>
          <p className="title-p">Web Developer</p>
       </div>

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
