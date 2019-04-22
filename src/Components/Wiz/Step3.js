import React, { Component } from "react";
import Axios from 'axios'

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
  handleChange = (value) => {
    this.setState({ descrip: value });
  }
  complete(){
    Axios.post('/api/parts', this.state).then(res => {
      this.props.history.push('/');
      });
    }
  render() {
    return (
      <div>
        <h4>WIZ.STEP3</h4>
        <form>
        <input
          type="text"
          value={this.state.descrip}
          onChange={event => this.handleChange("descrip", event.target.value)}
          placeholder="Description"
        />
        </form>
        <button>Complete</button>
      </div>
    );
  }
}

export default Step3;