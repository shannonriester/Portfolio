import React from 'react';
import $ from 'jquery';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

export default React.createClass({
  getInitialState() {
    return {
      sentEmail: false,
    }
  },
  contactMe() {
    $.ajax({
      url: `https://baas.kinvey.com/rpc/kid_H1o3YfRo/custom/emails`,
      type: 'POST',
      data: {
        myEmail: 'hello@shannonriester.com',
        senderEmail: this.refs.email.value,
        message: this.refs.message.value
      },
      success: (r) => {
        console.log(r);
        this.setState({sentEmail: true});
      }
    })
  },
  render() {
    return (
      <div className="contact-page" onSubmit={this.contactMe}>
        <Element name="ContactPage" />
        <form className="contact-form" onSubmit={this.contactMe}>
          <h2 className="contact-h2">Questions? Thoughts? Let me know.</h2>
          <h4 className="my-email">hello@shannonriester.com</h4>
          <label className="contact-label">Email</label>
          <input className="contact-input" placeholder="Email" tabIndex="1" ref="email"/>
          <label className="contact-label">Subject</label>
          <input className="contact-input" placeholder="Subject" tabIndex="3" ref="subject"/>
          <textarea className="contact-message" tabIndex="4" ref="message"></textarea>
          <input className="contact-submit" type="submit" role="button" value="send"/>
        </form>
      </div>
    );
  }
});
