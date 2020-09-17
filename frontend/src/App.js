import React from "react";
import { AppBar } from "./Components";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Home, About, Products, Contact, Footer } from "./Pages";

const App = () => {
  return (
    <>
      <AppBar />
      <main id="main">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/products" component={Products}></Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
