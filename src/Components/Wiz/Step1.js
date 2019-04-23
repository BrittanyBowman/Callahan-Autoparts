import React, { Component } from "react";
import "./Wiz.css";

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
        <center><h1>Add Parts</h1></center>
        <form>
          <span>
            <center>
              <h3>Part Details:</h3>
              <br />
              <input
                type="text"
                value={this.state.name}
                onChange={event =>
                  this.handleChange("name", event.target.value)
                }
                placeholder="Name"
              />
              <br />
              <input
                type="text"
                value={this.state.number}
                onChange={event =>
                  this.handleChange("number", event.target.value)
                }
                placeholder="Number"
              />
              <br />
              <input
                type="text"
                value={this.state.price}
                onChange={event =>
                  this.handleChange("price", event.target.value)
                }
                placeholder="Price"
              />
            </center>
          </span>
        </form>
        <center>
          <button onClick={() => this.props.history.push("/wiz/2")}>
            Next
          </button>
        </center>
        <br />
      </div>
    );
  }
}

export default Step1;
