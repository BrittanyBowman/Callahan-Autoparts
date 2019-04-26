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

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    login(){
        Axios.post('/api/login', this.state).then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard');
        })
    }
    register(){
        Axios.post('api/register', this.state).then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard');
        })
    }
  render() {
    return (
      <div><br /><br />
        <h1><center>AUTH</center></h1>
        <div><center>
        <h3>Username:</h3>
        <input value={this.state.username} onChange={event => this.handleChange('username', event.target.value)} />
        <h3>Password:</h3>
        <input value={this.state.password} onChange={event => this.handleChange('password', event.target.value)} />
        <br /><br />
        <p><button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button></p>
        </center>
        </div>
      </div>
    )
  }
}

export default connect(null, { updateUser })(Auth);