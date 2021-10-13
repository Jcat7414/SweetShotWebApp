import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/assets/sass/main.css";
import Menu from "./components/Menu/Menu";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import SignOutPage from "./pages/SignOutPage";
import MemoryCapturePage from './pages/MemoryCapturePage';
import MemoryBankPage from "./pages/MemoryBankPage";
import MemoryPage from "./pages/MemoryPage";

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/instructions">
            <InstructionsPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/signout">
            <SignOutPage />
          </Route>
          <Route path="/memorycapture">
            <MemoryCapturePage />
          </Route>
          <Route path="/memorybank" exact>
            <MemoryBankPage />
          </Route>
          <Route path="/memory/:id">
            <MemoryPage />
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