import React, { Component } from 'react'
import Axios from 'axios'

//setup state
export class Wiz extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      number: '',
      price: '',
      img: '',
      descrip: ''
    }
  }
//methods
  handleChange(property, value) {
    this.setState({ [property]: value });
  }
  complete(){
  Axios.post('/api/parts', this.state).then(res => {
    this.props.history.push('/');
    });
  };
  render() {
    return (
      <div>
        <h1>WIZ.JS: Add New Parts</h1>
        <form>
          <h3>Part Details:</h3><br />
        <input type="text" value={this.state.name} onChange={event => this.handleChange('name', event.target.value)} placeholder="Name" />
          <br />
        <input type="text" value={this.state.number} onChange={event => this.handleChange('number', event.target.value)} placeholder="Number" />
          <br />
        <input type="text" value={this.state.price} onChange={event => this.handleChange('price', event.target.value)} placeholder="Price" />
          <br />
        <input type="text" value={this.state.img} onChange={event => this.handleChange('img', event.target.value)} placeholder="Image URL" />
          <br />
        <input type="text" value={this.state.descrip} onChange={event => this.handleChange('descrip', event.target.value)} placeholder="Description" />
        </form>
        <button>Add Part</button>
        <br />
        <button onClick={()=> this.props.history.push('/')}>Cancel</button>
      </div>
    )
  }
}

export default Wiz;
