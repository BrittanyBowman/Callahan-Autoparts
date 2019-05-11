import React from 'react'
import './Me.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from '../../reducer'

function Me(props) {
    return (
      <div><br /><br /><br /><div className="displaybox">
        <span><center><h3>Welcome {props.username}<br /></h3>
        </center>
        </span>
        </div>
        <center><button className="myButton" onClick={()=> this.props.updateUsername}>Update Username</button></center>
        <br></br><center><button className="myButton" onClick={()=> this.props.viewOrders}>View Orders</button></center>
      </div>
    )
  }

  function mapStateToProps(state){
    return {username: state.username};
  }

  export default withRouter(connect(mapStateToProps, { logout })(Me));