import classes from "./Header.module.scss";
import hotelStaticImages from "../../assets/room.jpg";
import introbannerImg from "../../assets/banner.svg";

export default function Header({ place }) {
  let itDoes = null;
  if (place) {
    let includesImage = Object.keys(place).includes("image");
    if (includesImage) {
      itDoes = `url(${place.image})`;
    }
    if (!includesImage) {
      itDoes = `url(${hotelStaticImages})`
    }
  }

  return (
    // Get bg-img from current place
    <header
      className={classes.header}
      style={
        itDoes
          ? { backgroundImage: itDoes, position: "relative"}
          : { backgroundImage: "", position: "absolute"}
      }
    >
      <div className={classes.intro_container}>
        <div>
        {place && (
            <h1
              className={classes.intro_tekst}
            >{`HOTELLER & DESTINATIONER`}</h1>
          )}

          {!place && (
            <h1 
              className={classes.intro_tekst}
            >{`VELKOMMEN TIL HOTEL OVERLOOK ONLINE`}</h1>
          )}
          <div className={classes.intro_banner}>
         
          </div>
          <div className={classes.intro_banner_sec}>
            <div className={classes.left}></div>
            <div className={classes.right}></div>
          </div>
          {/* Tegn css efter img skitse */}
          {/* <img
            className={classes.intro_banner}
            src={introbannerImg}
            alt="intro_banner"
          /> */}
        </div>
      </div>
    </header>
  );
}
