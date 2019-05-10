import React from 'react'
import './Me.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from '../../reducer'

function Me(props) {
    return (
      <div><br /><br /><br /><div className="displaybox">
        <span><center><h3>Welcome {props.username}<br />Show Join List Here</h3></center></span>
        </div>
      </div>
    )
  }

  function mapStateToProps(state){
    return {username: state.username};
  }

  export default withRouter(connect(mapStateToProps, { logout })(Me));