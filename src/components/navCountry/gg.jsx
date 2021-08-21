import { Link } from "react-router-dom";
import classes from "./navigation.module.scss";
import Logo from "../../assets/logo.svg";

export function gg() {
  return (
    <nav className={classes.navbar}>
      <div>
      <Link to="/frontpage">
        <img className={classes.logo} src={Logo} alt="hotel_overlook" />
      </Link>
      </div>
     
      <ul>
        <li>
          <Link to="/forside">FORSIDE</Link>
        </li>
        <li>
          <Link to="/hoteller_destinationer">hoteller &amp; destinationer</Link>
        </li>

        <li>
          <Link to="/værelser">værelser</Link>
        </li>
        <li>
          <Link to="/reservation">reservation</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
}
