import React, { Component } from "react";

export class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: ''
    };
  }
  componentDidMount(){
    this.setState({ img: this.props.img })
}
  handleChange = (value) => {
    this.setState({ img: value })
  }
  render() {
    return (
      <div>
        <h4>WIZ.STEP2</h4>
        <form>
          <input
            type="text"
            value={this.state.img}
            onChange={event => this.handleChange("img", event.target.value)}
            placeholder="Image URL"
          />
        </form>
        <button>Next</button>
      </div>
    );
  }
}

export default Step2;
