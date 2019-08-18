import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
            <div style={{ display: 'flex' }}>
              <b>Email: &nbsp;</b>

              <a href="mailto:thinhphse62039@gmail.com">
                thinhphse62039@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex' }}>
              <b>Phone number: &nbsp;</b>
              <p>0794244189</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
