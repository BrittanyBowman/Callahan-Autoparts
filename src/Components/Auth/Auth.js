import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';

import {updateUser} from '../../reducer'

class Auth extends Component {
    constructor(){
        super() 

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (key, event) => {
        this.setState({
          [key]: event.target.value
        })
      };
    
      handleLogin = () => {
        const {username, password} = this.state;
    
        const userInfo = {
          username,
          password
        }
    
        Axios.post('/login', userInfo).then(res => {
            const users = res.data;
            this.props.login(users);
            this.props.history.push('/me');
        })
    }
    register(){
        Axios.post('/register', ).then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/me');
        })
    }
    update(){
        Axios.put('/register', this.state).then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard');
        })
    }
  render() {
    return (
      <div><br /><br />
        <h1><center>LOGIN</center></h1>
        <div><center>
        <h3>Username:</h3>
        <input type="text" placeholder="username.." onChange={(event) => this.handleChange('username', event)}/>
        <h3>Password:</h3>
        <input type="text" placeholder="password.." onChange={(event) => this.handleChange('password', event)}/>
        <br /><br />
        <p><button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogin}>Register</button></p>
        </center>
        </div>
      </div>
    )
  }
}



export default connect(null, { updateUser })(Auth);