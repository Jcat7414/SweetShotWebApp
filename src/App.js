import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";
import MemoryBankPage from "./pages/MemoryBankPage";
import MemoryPage from "./pages/MemoryPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/menu">
            <Nav />
          </Route>
          <Route path="/instructions">
            <InstructionsPage />
          </Route>
          <Route path="/memory/:id">
            <MemoryPage />
          </Route>
          <Route path="/memorybank" exact>
            <MemoryBankPage />
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