import React, { Component } from "react"
import { ProgressBar } from "./progressBar";

const title={
  textAlign:"center",
  gridColumn:"1/3"
}


export class ProgressBarList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {

    return (
      <div  className={this.props.classes}>
      <h1 className="title is-2" style={title}>{this.props.title}</h1>
      <div className="flexbox">
        <ProgressBar column={1} title="SQL" value="85"/>
        <ProgressBar column={0} title="Processing" value="55"/>
        <ProgressBar column={1} title="VBA" value="80"/>
        <ProgressBar column={0} title="Javascript" value="70"/>
        <ProgressBar column={1} title="Java" value="15"/>
        <ProgressBar column={0} title="Python" value="25"/>
        </div>
      </div>
    )
  }
}
