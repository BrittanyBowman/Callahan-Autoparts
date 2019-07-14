import React, { Component } from "react";
import "./Wiz.css";
import { connect } from "react-redux";
import { updateImg } from "../../reducer";

export class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: ""
    };
  }
  componentDidMount() {
    this.setState({ img: this.props.img });
  }

  handleChange = value => {
    this.setState({ img: value });
  };
  render() {
    return (
      <div>
        <center>
            <h3 className="step1">ITEM DETAILS</h3>
            <br />
        <input
          placeholder="Enter Image URL..."
          style={{ width: "300x", height: "80px" }}
          value={this.state.img}
          onChange={event => this.handleChange(event.target.value)}
        />
        <input
          className="form_img_preview"
          style={{
            backgroundImage: `url('${this.state.img}')`
          }}
        />
        </center>
        <center>
        <button
          className="myButton"
          onClick={() => {
            this.props.updateImg(this.state.img);
            this.props.history.push("/wiz/1");
          }}
        >
          Previous
        </button>
        <button
          className="myButton"
          onClick={() => {
            this.props.updateImg(this.state.img);
            this.props.history.push("/wiz/3");
          }}
        >
          Next
        </button>
        </center>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    img: state.img
  };
}

export default connect(
  mapStateToProps,
  { updateImg }
)(Step2);
