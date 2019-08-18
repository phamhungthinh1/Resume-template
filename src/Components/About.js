import React, { Component } from 'react';
import avatar from '../assets/Image/Avatar.jpg';
class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={avatar} alt="avatar" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              My goal is to work for an encouraging and stable company that will
              assist me in developing, improving, and obtaining the necessary
              skills in order to become the best engineer. My career objective
              is to become a professional front-end developer in the future.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Phạm Hưng Thịnh</span>
                  <br />
                  <span>
                    170/8 Trần Nhân Tông, Phường Vĩnh Điện, Điện Bàn, Quảng Nam
                  </span>
                  <br />
                  <span>0794244189</span>
                  <br />
                  <a href="mailto:thinhphse62039@gmail.com">
                    thinhphse62039@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
