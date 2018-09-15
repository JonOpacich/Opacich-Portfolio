import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Landing from "../src/pages/Landing";
import About from "../src/pages/About";
import Portfolio from "../src/pages/Portfolio";
import Contact from "../src/pages/Contact";
import "../src/bulma/app.css";
import Nav from "../src/components/Nav";

const App = fullpageProps => (
  <div>
    <Nav/>
    <ReactFullpage
      {...fullpageProps}
      render={({ state, fullpageApi }) => {
        return (
          <div>
            <Landing />
            <About />
            <Portfolio />
            <Contact />
          </div>
        );
      }}
    />
  </div>
);

export default App;
