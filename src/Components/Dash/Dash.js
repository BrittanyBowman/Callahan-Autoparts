import React, { Component } from 'react'
import Part from './Part/Part'
import Axios from 'axios';

//setup initial state
class Dash extends Component {
  constructor(props){
    super(props)

    this.state = {
      parts: []
    }
    console.log(props);
  }
//invoke on load
  componentDidMount() {
    this.getParts();
  }
//gets all the parts from the db
  getParts = () => {
    Axios.get('/api/parts').then(res => this.setState({parts: res.data}))
  }
//deletes a part from the db by id
//passed through props to Part.js
//returns the updated array of parts by invoking the getParts method
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
      </div>
    )
  }
}

export default Dash;