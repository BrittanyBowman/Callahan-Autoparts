import React, { Component } from "react";
import "./Wiz.css";
import { connect } from 'react-redux';
import { updateImg } from '../../reducer';

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

  handleChange = (value) => {
    this.setState({ img: value });
  }
  render() {
    return (
      <div>
        <center><h4>Add Image</h4></center>
      
          <span>
            <center>
              <input
                placeholder="URL..."
                style={{ width: "250px", height: '30px'}}
                value={this.state.img}
                onChange={event => this.handleChange(event.target.value)}
              />
              <input
                style={{ width: "250px", height: "190px"}}
                value="SETUP IMAGE PREVIEW HERE"
                />
            </center>
          </span> 
          <center>
          <button className="myButton" onClick={() => {
            this.props.updateImg(this.state.img);
            this.props.history.push("/wiz/1")}}>
              Previous
            </button>
            <button className="myButton" onClick={() => {
              this.props.updateImg(this.state.img);
              this.props.history.push("/wiz/3")}}>
              Next
            </button>
          </center>
        
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    img: state.img
  }
}

export default connect(mapStateToProps, { updateImg })(Step2);
