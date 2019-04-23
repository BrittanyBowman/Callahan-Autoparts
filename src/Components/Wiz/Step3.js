import React, { Component } from "react";
import Axios from "axios";

class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descrip: ""
    };
  }
  componentDidMount() {
    this.setState({ descrip: this.props.descrip });
  }
  handleChange = value => {
    this.setState({ descrip: value });
  };
  complete() {
    Axios.post("/api/parts", this.state).then(res => {
      this.props.history.push("/");
    });
  }
  render() {
    return (
      <div>
        <h4>WIZ.STEP3</h4>
        <form>
          <span>
            <center>
              <input
                type="text"
                value={this.state.descrip}
                onChange={event =>
                  this.handleChange("descrip", event.target.value)
                }
                placeholder="Description"
              />
            </center>
          </span>
        </form>
        <form>
          <center>
            <button onClick={() => this.props.history.push("/wiz/1")}>
              Previous
            </button>
            <button>Complete</button>
          </center>
        </form>
      </div>
    );
  }
}

export default Step3;
