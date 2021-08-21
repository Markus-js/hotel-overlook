
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Forside from "./pages/forside/Forside"
import HotellerDestinationer from './pages/hotellerDestinationer/HotellerDestinationer';
// Login
import Signup from "./components/login/Signup";
//import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import DashBoard from "./components/login/DashBoard";
import Login from "./components/login/Login";
import PrivateRoute from "./components/login//PrivateRoute";
import ForgotPassword from "./components/login/ForgotPassword";
import UpdateProfile from "./components/login/UpdateProfile";




function App() {
  return (
    <Router>
      <AuthProvider>
      <Navigation />
      <Switch>
        {/* Login */}
        <PrivateRoute exact path="/" component={DashBoard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
        {/* Pages */}
        <Route path="/forside">
          <Forside />
        </Route>
        <Route path="/hoteller_destinationer">
          <HotellerDestinationer />
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
      </AuthProvider>
    </Router>
  );
}

export default App;
