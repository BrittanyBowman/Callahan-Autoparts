import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../reducer'
import "./Header.css";

function Header(props) {
  if (props.location.pathname !== "/") {
    return (
      <div className="linkbox">
      <div className="Header">
      <ul>
          <li><Link to="/dashboard">MAIN</Link></li>
          <li><Link to="/wiz/1">ADD PARTS</Link></li>
          <li><Link to="/search">SEARCH</Link></li>
          <li><Link to="/" onClick={() => {props.logout(); props.history.push('/')}}>LOGOUT</Link></li>
          <li><Link to="/me">HOME</Link></li>
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