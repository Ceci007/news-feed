import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { createGlobalStyle } from "styled-components";

import Header from "../Header";
import Nav from "../Nav";

import Home from "../../pages/Home";
import Category from "../../pages/Category";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Container maxWidth="lg">
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categorias/:category" exact component={Category} /> 
            <Redirect from="/" to="/" />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
