import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';

import {updateUser} from '../../reducer'

class Auth extends Component {
    constructor(props){
        super(props) 
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (prop, val) => {
        this.setState({
          [prop]: val
        })
      };
    
      login = () => {
        Axios.post('/login', this.state)
          .then(res => {
            this.props.updateUser(res.data.user);
            this.props.history.push('/dashboard');
          })
      }
      register = () => {
        Axios.post('/register', this.state)
          .then(res => {
            this.props.updateUser(res.data.user);
            this.props.history.push('/dashboard');
          })
      }
  render() {
    return (
      <div>
      <div className="loginbox"><i>BowmanCallahan.com</i></div>
        <h1><div className="logo"><center>CALLAHAN AUTOPARTS</center></div></h1>
        <div><center>
        <h3>USERNAME:</h3>
        <input value={this.state.username} placeholder="username..." onChange={event => this.handleChange('username', event.target.value)}/>
        <h3>PASSWORD:</h3>
        <input type="password" value={this.state.password} placeholder="password..." onChange={event => this.handleChange('password', event.target.value)}/>
        <br /><br />
        <p><button className="myButton" onClick={this.login}>LOGIN</button><h3>OR</h3>
        <button className="myButton" onClick={this.register}>REGISTER</button></p>
        </center>
        </div>
      </div>
    )
  }
}



export default connect(null, { updateUser })(Auth);