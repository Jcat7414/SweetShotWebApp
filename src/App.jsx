import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import MemoryPage from "./pages/MemoryPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/memory/:id" component={MemoryPage}>
           
          </Route>
          <Route path="/memory" exact>
            <HomePage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;