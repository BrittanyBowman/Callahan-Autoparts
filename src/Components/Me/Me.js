import React from 'react'
import './Me.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from '../../reducer'

class Me extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      orders: [],
      name: ""
    }
  }
    render(){
      return (
        <div><br /><br /><br /><div className="displaybox">
          <span><center><h3>Welcome {this.props.username}<br /></h3>
          </center>
          </span>
          </div>
          <center><button className="myButton" onClick={()=> this.props.updateUsername}>Update Username</button></center>
          <br></br><center><button className="myButton" onClick={()=> this.props.viewOrders}>View Orders</button></center>
        </div>
      )
    }
  }

  function mapStateToProps(state){
    return {username: state.username};
  }

  export default withRouter(connect(mapStateToProps, { logout })(Me));