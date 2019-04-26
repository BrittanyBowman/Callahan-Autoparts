import React, { Component } from 'react'
import Part from './Part/Part'
import Axios from 'axios'
import Header from '../Header/Header'

//setup initial state
class Dash extends Component {
  constructor(props){
    super(props)

    this.state = {
      parts: []
    }
    // console.log(props); parts list.
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
    Axios.delete(`/api/parts/${id}`).then(res => this.getParts());
  }
  //updates an autopart by id that has already been added to the db - need to map this and change the original?
  updatePart = (id) => {
    Axios.put(`/api/parts/${id}`).then(res => this.setState())
  }

  render() {
    return (
      <div><br />
          <h3><center>Parts List</center></h3>
          <Header />
          <center><button onClick={()=> this.props.history.push('/wiz/1')}>Add Parts</button></center>
          {this.state.parts.map(element => {
            return <Part part={element} deletePart={this.deletePart} key={element.id} />
          })}
      </div>
    )
  }
}

export default Dash;