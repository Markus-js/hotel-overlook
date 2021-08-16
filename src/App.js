
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from './components/navigation/Navigation';
import Forside from "./pages/forside/Forside"


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/forside">
          <Forside />
        </Route>
        <Route path="/hoteller_destinationer">
          
        </Route>
        <Route path="/værelser">

        </Route>
        <Route path="/reservation">

        </Route>
        <Route path="/login">

        </Route>
        <Route exact path="/">
          <Redirect to="/frontpage"></Redirect>
        </Route>
        {/* skal være i bunden ellers rammer path den samme / */}
        <Route path="/">
          <h2>404 siden findes ikke</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
