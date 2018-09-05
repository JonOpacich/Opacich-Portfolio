import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Header, Icon } from "semantic-ui-react";

let containerStyle = {
  position:"absolute",
  left:0,
  bottom:150
};
let socialButtonDiv={
  marginTop:10
}
let socialButtons={
  margin:"0 3px"
}


const Hero = ({ mobile }) => {
  Hero.propTypes = {
    mobile: PropTypes.bool
  };

  let Buttons = props => {
    const mobile = props.mobile;
    if (mobile) {
      return (
        <div style={socialButtonDiv}>
          <Button circular color="orange" icon="stack overflow" style={socialButtons}/>
          <Button circular color="github" icon="github" style={socialButtons} />
          <Button circular color="linkedin" icon="linkedin" style={socialButtons} />
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <Container style={mobile ? null:containerStyle} textAlign="center">
      <Header
        as="h3"
        content="Hi, I'm Jon! A Full-Stack Developer"
        inverted
        style={{
          fontSize: mobile ? "2em" : "3em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em"
        }}
      />
      <Header
        as="h3"
        content="currently making beautiful stuff in Minneapolis, MN"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "2em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em"
        }}
      />
      <Button primary size={mobile ? "small" : "huge"}>
        <Icon name="envelope" />
        Contact Me
      </Button>
      <Buttons mobile={mobile} />
    </Container>
  );
};

export default Hero;
