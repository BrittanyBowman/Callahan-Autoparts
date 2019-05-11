import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateNameNum } from '../../reducer';
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

  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };

  render() {
    return (
      <div>
        <center><h1>Add Parts</h1></center>
        
          <span>
            <center>
              <h3>Part Details:</h3>
              <br />
              <input                
                value={this.state.name}
                onChange={event =>
                  this.handleChange("name", event.target.value)
                }
                placeholder="Name"
              />
              <br />
              <input
                value={this.state.number}
                onChange={event =>
                  this.handleChange("number", event.target.value)
                }
                placeholder="Number"
              />
              <br />
              <input
                value={this.state.price}
                onChange={event =>
                  this.handleChange("price", event.target.value)
                }
                placeholder="Price"
              />
            </center>
          </span>
        
        <center>
          <button className="myButton" onClick={()=> {
            this.props.history.push('/dashboard')}}>Cancel
            </button>
          <button className="myButton" onClick={() => {
            this.props.updateNameNum(this.state);
            this.props.history.push("/wiz/2")}}>
            Next
          </button>
        </center>
        <br />
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  let { name, number, price, img, descrip } = reduxState;
  return { name, number, price, img, descrip };
}

export default connect(mapStateToProps, { updateNameNum })(Step1);
