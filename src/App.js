import React, { Component } from 'react'
import './App.css'
import Routes from './Routes'
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header />
        {Routes}
      </div>
    )
  }
}

export default App;
