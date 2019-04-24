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
      <h4>APP</h4>
        {Routes}
      </div>
      </Router>
    )
  }
}

export default App;
