import React, { Component } from 'react';
// import axios from 'axios';

class Search extends Component {
  constructor(){
    super()

    this.state = {
      results: []
    }
  }
  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };
//make a function that pulls in the array? No. Maps it? No...Maybe?
  // searchParts(){
  //   axios.get(`https://api.github.com/users/${text}`).then(res => {this.results = res.data.results})
  // }
  render() {
    let results = this.state.results;

    return (
      <div>
        <h3><br /></h3>
        <center><h3>Search Catalog</h3></center>
        <span>
          <input value={this.state.results}
          onChange={event => this.handleChange("results", event.target.value)} />
        </span>
        <center>
        <button onClick={()=> this.searchParts()}>SEARCH</button>
        </center>
        <div><center>{results}</center></div>
        
      </div>
    )
  }
}

export default Search; 

