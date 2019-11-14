import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

class Busqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ data: event.target.value })
  };

  searchHandler(e) {
    if(e.key === "Enter") {
      this.props.history.push(`/busqueda/${this.state.data}`);
    }
  }

  render() {
    return (
        <div className="container">
            <input
              className="text__input"
              type="text"
              placeholder="Ingresa un texto"
              onChange={this.handleChange}
              onKeyDown={(event) => this.searchHandler(event)}
            />
        </div>
    );
  }
}

export default withRouter(Busqueda);
