import React, { Component } from 'react'
import Part from '../Part/Part'
import Axios from 'axios';

class Dash extends Component {
  constructor(){
    super()

    this.state = {
      parts: []
    }
  }

  componentDidMount() {
    this.getParts();
  }

  getParts = () => {
    Axios.get('/api/parts').then(res => this.setState({parts: res.data}))
  }

  deletePart = (id) => {
    Axios.delete(`/api/part/:${id}`).then(res => this.getParts());
  }

  render() {
    return (
      <div>
          <h1>DASH.JS</h1>
          <button onClick={()=> this.props.history.push('/Wiz')}>Add Parts</button>
          {this.state.parts.map(element => {
            return <Part part={element} deletePart={this.deletePart} key={element.id} />
          })}
        <Part />
      </div>
    )
  }
}

export default Dash;