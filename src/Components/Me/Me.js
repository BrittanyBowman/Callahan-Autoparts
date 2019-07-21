import React from "react";
import "./Me.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../reducer";

class Me extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      name: ""
    };
  }
  render() {
    return (
      <div>
        <div className="displaybox">
          <center>
            <h3>
              HELLO, {this.props.username.toUpperCase()}! This section is
              still in progress. No account settings yet.
            </h3>
          </center>
        </div>
        <center>
          <button
            className="myButton2"
            onClick={() => this.props.updateUsername}
          >
            Update Username
          </button>
        </center>
        <center>
          <button className="myButton2" onClick={() => this.props.viewOrders}>
            View Orders
          </button>
        </center>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { username: state.username };
}

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Me)
);
