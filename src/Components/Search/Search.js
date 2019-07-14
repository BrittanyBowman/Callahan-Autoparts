import React, { Component } from "react";
import Axios from "axios";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      part: ""
    };
  }
  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };
  searchParts = () => {
    Axios.get(`/api/parts/${this.state.part}`).then(res =>
      this.setState({ results: res.data })
    );
  };
  render() {
    let { part, results } = this.state;

    return (
      <div  className="card2">
        <input
          style={{width: "300px", height: "65px"}}
          value={part}
          placeholder="Search by item name..."
          onChange={event => this.handleChange("part", event.target.value)}
        />
        <div>
          {results.map(part => (
            <h5>
              ITEM: {part.name}
              <br />
              ITEM No. {part.number}
              <br />
              PRICE: ${part.price}.00
              <br />
              IMAGE: {"Currently unavailable"}
            </h5>
          ))}
        </div>
        <button className="myButton" onClick={() => this.searchParts()}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default Search;
