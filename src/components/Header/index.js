import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Busqueda from "../Busqueda";

const StyledToolbar = styled(Toolbar)`
  h6 {
    flex-grow: 1;
  }
`;

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    color: white;
  }

  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  .MuiInputLabel-outlined.MuiInputLabel-marginDense {
    color: white;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParams: ""
    }
    /*
    this.state = {
      data: ""
    };
    this.handleChange = this.handleChange.bind(this);
    */
  }

  /*
  handleChange = event => {
    this.setState({ data: event.target.value });
  };

  searchHandler(e) {
    if (e.key === "Enter") {
      this.props.history.push(`/busqueda/${this.state.data}`);
    }
  }
  */


  searchHandler = (event) => {
    event.preventDefault();
    
      this.setState({ [event.target.name]: event.target.value }, () => {
      this.props.history.push({  
        pathname: "/search",
        searchParams: this.state.searchParams
      });
    });
  };

  render() {
    return (
      <AppBar position="static">
        <StyledToolbar style={{ backgroundColor: "#f50057" }}>
          <Typography variant="h6">News Feeds</Typography>
          <form onSubmit={this.searchHandler}>
            <input
              className="text__input"
              type="search"
              name="searchParams"
              placeholder="Ingresa un texto"
              autoComplete="off"
              /*
              onChange={this.handleChange}
              onKeyDown={event => this.searchHandler(event)}
              */
            />
          </form>
        </StyledToolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
