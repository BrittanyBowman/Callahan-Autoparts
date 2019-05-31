import React, { Component } from 'react'
import Part from './Part/Part'
import Axios from 'axios'
import Header from '../Header/Header'
import './Dash.css'

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

  updateUsername = (id) => {
    Axios.patch(`api/users/${id}`).then(res => this.props.history.push('/'))
  }

  render() {
    return (
      <div>
          <div className="partstop"></div>
          <Header />
          <div className="parts_container">
          {this.state.parts.map(element => {
            return <Part part={element} deletePart={this.deletePart} key={element.id} />
          })}
          </div>
      </div>
    )
  }
}

export default Dash;