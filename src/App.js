import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header.component/Header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homepage.component";
function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <HomePage/>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/about"></Route>
          <Route path="/contact"></Route>
          <Route path="/blog"></Route>
          <Route path="/carrer"></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
