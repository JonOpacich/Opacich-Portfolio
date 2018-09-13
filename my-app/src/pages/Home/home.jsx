import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Landing from "../../components/Landing";
import About from "../../components/About"
import Portfolio from "../../components/Portfolio"
import Contact from "../../components/Contact"

const fullpageOptions = {
  callbacks: ["onLeave"]
};
  
const FullpageWrapper = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <Landing/>
          <About/>
          <Portfolio/>
          <Contact/>
        </div>
      );
    }}
  />
);

export default FullpageWrapper;
