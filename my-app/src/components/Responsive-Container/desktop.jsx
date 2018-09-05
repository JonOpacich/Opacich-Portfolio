import React, { Component } from "react";
import PropTypes from "prop-types";
import Hero from "../../components/Hero";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Icon,
  Visibility
} from "semantic-ui-react";

let buttonStyle = {
  marginLeft: 10
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="left"
            style={{ minHeight: "70vh", padding: "1em 0em", scrollSnapAlign: "center"}}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              tabular={fixed}
              size="small"
              style={{ backgroundColor: fixed ? "white" : null }}
              color={fixed ? "red" : null}
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">About</Menu.Item>
                <Menu.Item as="a">Projects</Menu.Item>
                <Menu.Item as="a">Contact</Menu.Item>
                <Menu.Item position="right">
                  <Button
                    basic={fixed ? true : false}
                    inverted={fixed ? false : true}
                    color="blue"
                    style={buttonStyle}
                  >
                    <Icon name="linkedin" />
                    LinkedIn
                  </Button>
                  <Button
                    basic={fixed ? true : false}
                    inverted={fixed ? false : true}
                    style={buttonStyle}
                  >
                    <Icon name="github" />
                    GitHub
                  </Button>
                  <Button
                    basic={fixed ? true : false}
                    inverted={fixed ? false : true}
                    color="orange"
                    style={buttonStyle}
                  >
                    <Icon name="stack overflow" />
                    Stack Overflow
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Hero />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default DesktopContainer;
