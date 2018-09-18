import React from "react";

const Contact = ({ mobile }) => {
  return (
    <div className="section">
      <p className="section-title">
        Contact <span class="section-logo">_</span>
      </p>
      <div className="container">
        <div className="columns">
          <div className="column is-5">
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
                    class="input is-danger"
                    type="email"
                    placeholder="Email"
                    value=""
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope" />
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle" />
                  </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
              </div>

              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Message..." />
                </div>
              </div>

              <div class="control is-pulled-right">
                <button class="button form-submit">Submit</button>
              </div>
            </div>
          </div>
          <div className="column">column 2</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
