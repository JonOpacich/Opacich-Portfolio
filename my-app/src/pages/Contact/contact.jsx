import React from "react";

const Contact = ({ mobile }) => {
  return (
    <div className="section">
      <div className="container">
      <p className="section-title">
        Contact <span class="section-logo">_</span>
      </p>
        <div class="box is-clearfix">
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Name" />
              <span class="icon is-small is-left">
                <i class="fa fa-user" aria-hidden={true} />
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder="Email"
                value=""
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="Message" />
            </div>
          </div>

          <div class="control is-pulled-right">
            <button class="button form-submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
