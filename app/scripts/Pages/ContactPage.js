import React from 'react';
import $ from 'jquery';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

export default React.createClass({
  getInitialState() {
    return {
      sentEmail: false,
      shake: false,
    }
  },
  validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.exec(email)) return true;

    return false;
  },
  contactMe(e) {
    e.preventDefault();
    if (this.validateEmail(this.refs.email.value) && this.refs.message.value.length > 0 && this.refs.message.value !== ' ' && this.refs.message.value !== '') {
      $.ajax({
        url: `https://baas.kinvey.com/rpc/kid_H1o3YfRo/custom/email`,
        type: 'POST',
        data: {
          myEmail: 'hello@shannonriester.com',
          senderEmail: this.refs.email.value,
          message: this.refs.message.value
        },
        success: (r) => {
          console.log(r);
        },
        error: (r) => {
          console.log('error', r);
        }
      });
      this.setState({sentEmail: true});
      window.setTimeout(() => {
        this.setState({sentEmail: false});
        this.refs.email.value = '';
        this.refs.subject.value = '';
        this.refs.message.value = '';
      }, 7000);
    } else {
      this.setState({shake: true});
      window.setTimeout(() => {
        this.setState({shake: false});
      }, 1000)
    }
  },
  render() {
    let contact;
    if (this.state.sentEmail) {
      contact = (
        <div className="confirm-sent-container">
          <h2 className="contact-h2">Questions? Thoughts? Let me know.</h2>
          <h4 className="my-email">hello@shannonriester.com</h4>
          <p className="confirmation-p">Thanks for your email. I'll be in touch with you soon.</p>
        </div>

      );
    } else {
      let messageContainer = "message-container";
      if (this.state.shake) {
        messageContainer += " shake";
      }
      contact = (
        <form className="contact-form" onSubmit={this.contactMe}>
          <h2 className="contact-h2">Questions? Thoughts? Let me know.</h2>
          <h4 className="my-email">hello@shannonriester.com</h4>
          <section className={messageContainer}>
            <label className="contact-label">Email</label>
            <input type="email" className="contact-input" placeholder="Email" tabIndex="1" ref="email"/>
            <label className="contact-label">Subject</label>
            <input type="text" className="contact-input" placeholder="Subject" tabIndex="3" ref="subject"/>
            <textarea className="contact-message" tabIndex="4" ref="message"></textarea>
          </section>
          <input className="contact-btn" type="text" type="submit" role="button" value="Send"/>
        </form>);
    }
    return (
      <div className="contact-page" onSubmit={this.contactMe}>
        <Element name="Contact" />
        {contact}
      </div>
    );
  }
});
