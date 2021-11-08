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
import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";

function App() {
  const [user, setUser] = useState(null)

  const currentUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div className="container">
        <UserContext.Provider value={currentUser}>
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
        </UserContext.Provider>  
      </div>
    </Router>
  );
}

export default App;