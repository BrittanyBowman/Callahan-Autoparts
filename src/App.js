import React, { Component } from 'react'
import './App.css'
import Routes from './Routes'
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {Routes}
      </div>
    )
  }
}

export default App;
