import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import './App.css'
import Routes from './Routes'
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Header />
        <h1>APP.JS</h1>
        
        {Routes}
      </div>
      </Router>
    )
  }
}

export default App;
