import React, { Component } from "react";

//setup state. Move over from Wiz for Redux.
class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
      price: "",
      img: "",
      descrip: ""
    };
  }
  componentDidMount() {
    let { name, number, price, img, descrip } = this.props;
    this.setState({ name, number, price, img, descrip });
  }
  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };

  render() {
    return (
      <div>
        <h1>WIZ.STEP1.JS: Add New Parts</h1>
        <form>
          <h3>Part Details:</h3>
          <br />
          <input
            type="text"
            value={this.state.name}
            onChange={event => this.handleChange("name", event.target.value)}
            placeholder="Name"
          />
          <br />
          <input
            type="text"
            value={this.state.number}
            onChange={event => this.handleChange("number", event.target.value)}
            placeholder="Number"
          />
          <br />
          <input
            type="text"
            value={this.state.price}
            onChange={event => this.handleChange("price", event.target.value)}
            placeholder="Price"
          />
        </form>
        <button>Next</button>
        <br />
      </div>
    );
  }
}

export default Step1;
