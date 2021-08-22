import { useState } from "react";
import { Link } from "react-router-dom";

import BurgerMenu from "../burgerMenu/BurgerMenu";
import classes from "./Navigation.module.scss";
// Logo 
import Logo from "../../assets/logo.svg";

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  const navigationList = [
    { print: "Forside", path: "/forside" },
    { print: "Hoteller & Destinationer", path: "/hoteller_destinationer" },
    { print: "Login", path: "/login" },
  ];

  const handleClick = () => setMenuActive(false);

  return (
    <header className={classes.pageNavigation}>
      {/* <p className={classes.logo}>HOTEL OVERLOOK</p> */}
      <Link to="/forside">
        <img className={classes.logo} src={Logo} alt="hotel_overlook" />
      </Link>
      <nav
        className={
          menuActive
            ? `${classes.pageNavigation_nav} ${classes.active}`
            : classes.pageNavigation_nav
        }
      >
        <ul className={classes.pageNavigation_ul}>
          {navigationList.map((item, index) => {
            return (
              <li key={index} className={classes.pageNavigation_li}>
                <Link
                  onClick={handleClick}
                  to={item.path}
                  className={classes.pageNavigation_link}
                >
                  {item.print}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
    </header>
  );
};

export default Navigation;
