import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../Busqueda/_busqueda.scss";

class Busqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: ""
    };
  }

  setSearchParams = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSearch = event => {
    if (event.charCode === 13 && this.state.searchParams) {
      this.props.history.push({
        pathname: "/search",
        searchParams: this.state.searchParams
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="text">
          <input
            className="text__input"
            type="text"
            name="searchParams"
            placeholder="Buscar"
            onKeyUp={this.setSearchParams}
            onKeyPress={e => this.handleSearch(e)}
          />
          <button className="text__button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Busqueda);
