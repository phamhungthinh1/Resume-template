import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function(education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <a
              style={{ fontSize: '25px', color: 'black', fontWeight: '800' }}
              href="http://www.tx-tech.com/?fbclid=IwAR0GJkKFtle39BwnHb4xXWoi5twM6R3dlGhWcEQDB9n3_3D4lJv4CVoLHh4#authenticator"
            >
              {work.company}
            </a>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function(skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className} />
            <em>{skills.name}</em>
          </li>
        );
      });
      var languages = this.props.data.languages.map(function(languages) {
        var className = 'bar-expand ' + languages.name.toLowerCase();
        return (
          <li key={languages.name}>
            <span style={{ width: languages.level }} className={className} />
            <em>{languages.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>
              - Web development using HTML, SCSS, JavaScript, ReactJs, Java.
            </p>
            <p>
              - Understand object-oriented programming (OOP), MVC model,
              structure design.
            </p>
            <p>- Familiarity with RESTful APIs</p>
            <p>
              - Strong experience with component and state libraries ReactJS
            </p>
            <p>
              - Organising project work streams on task boards (Trello, Github
              projects).
            </p>
            <p>- API development and design with Spring Boot</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Languages</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{languages}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
