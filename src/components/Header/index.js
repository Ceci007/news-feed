import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Busqueda from "../Busqueda";

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <StyledToolbar style={{ backgroundColor: "#f50057" }}>
          <Typography variant="h6">News Feeds</Typography>
          <Busqueda />
        </StyledToolbar>
      </AppBar>
    );
  }
}

const StyledToolbar = styled(Toolbar)`
  h6 {
    flex-grow: 1;
  }
`;

export default Header;
