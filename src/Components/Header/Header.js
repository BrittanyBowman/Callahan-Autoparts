import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../reducer'
import "./Header.css";

function Header(props) {
  if (props.location.pathname !== "/") {
    return <div>
      <div className="Header">
        <h3>Callahan AutoParts: Welcome {props.username}</h3>
        <div className="header_link_box">
          <Link to="/dashboard">Dasboard</Link>
          <Link to="/wiz/1">Add</Link>
          <Link to="/search">Search</Link>
          <Link to="/">Logout</Link>
          <Link to="/me">Home</Link>
        </div>
    </div>
    </div>
  } else {
    return null;
  }
}

function mapStateToProps(state){
  return {username: state.username};
}
export default withRouter(connect(mapStateToProps, { logout })(Header));
