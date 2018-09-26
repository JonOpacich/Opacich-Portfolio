import React from "react";

const Contact = ({ mobile }) => {
  return (
    <div className="section">
      <div className="container">
        <p className="section-title">
          Contact <span class="section-logo">_</span>
        </p>
        <h1 className="contact-title">
          Thanks for taking the time to reach out. What can I do for you today?
        </h1>
        <div className="box is-clearfix">
          <div className="field">
            <div className="control has-icons-left">
              <input className="input" type="text" placeholder="Name" />
              <span className="icon is-small is-left">
                <i className="fa fa-user" aria-hidden={true} />
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                value=""
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <textarea className="textarea" placeholder="Message" />
            </div>
          </div>

          <div className="control is-pulled-right">
            <button className="button form-submit is-outlined">Submit</button>
          </div>
        </div>
        <div className="contact-info">
          <span className="icon is-medium">
            <i className="fas fa-envelope" />
          </span>
          <span>jonopacich@gmail.com | </span>
          <span className="icon is-medium">
          <i class="fas fa-phone"></i>
          </span>
          <span>218.626.7710</span>

        </div>
        <div className="icon-container">
          <span className="icon is-large">
            <a className="github" href="#" target="blank">
              <i class="fab fa-3x fa-github" />
            </a>
          </span>
          <span className="icon is-large">
            <a className="overflow" href="#" target="blank">
              <i class="fab fa-3x fa-stack-overflow" />
            </a>
          </span>
          <span className="icon is-large">
            <a className="linkedIn" href="" target="blank">
              <i class="fab fa-3x fa-linkedin-in" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
