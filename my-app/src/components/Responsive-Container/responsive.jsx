import React from 'react';
import PropTypes from "prop-types";
import DesktopContainer from "./desktop";
import MobileContainer from "./mobile";

const ResponsiveContainer = ({ children }) => (
    <div id="fullpage">
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  );
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node
  };

  export default ResponsiveContainer;