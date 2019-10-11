import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return <div>dashboard works</div>;
  }
}

export default connect(
  null,
  { getCurrentProfile }
)(Dashboard);