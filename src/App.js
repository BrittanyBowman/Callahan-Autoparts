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
        <h1>APP.JS</h1>
        <Header />
        {Routes}
      </div>
      </Router>
    )
  }
}

export default App;
