import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { createGlobalStyle } from "styled-components";
import Header from "../Header";
import Nav from "../Nav";
import Home from "../../pages/Home";
import Category from "../../pages/Category";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Container maxWidth="lg">
          <Header />
          <Nav />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/categorias/:category" component={Category} />
            <Route path="/search" component={Home} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export default App;
