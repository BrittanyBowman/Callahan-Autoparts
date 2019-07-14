import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../reducer'
import "./Header.css";

function Header(props) {
  if (props.location.pathname !== "/") {
    return (
      <div className="linkbox">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="Header">
      <ul>
          <li><Link to="/dashboard">Inventory</Link></li>
          <li><Link to="/wiz/1">Add Parts</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/" onClick={() => {props.logout(); props.history.push('/')}}>Logout</Link></li>
          <li><Link to="/me">My Account</Link></li>
        </ul>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

function mapStateToProps(state){
  return {username: state.username};
}

export default withRouter(connect(mapStateToProps, { logout })(Header));