import React, { Component } from "react";
import "./Wiz.css";

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
        <h4>WIZ.STEP2</h4>
        <form>
          <span>
            <center>
              <input
                type="text"
                value={this.state.img}
                onChange={event => this.handleChange("img", event.target.value)}
                placeholder="Image URL"
              />
            </center>
          </span>
        </form>
        <form>
          <center>
          <button onClick={() => this.props.history.push("/wiz/1")}>
              Previous
            </button>
            <button onClick={() => this.props.history.push("/wiz/3")}>
              Next
            </button>
            
          </center>
        </form>
      </div>
    );
  }
}

export default Step2;
