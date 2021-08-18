
import classes from "./Header.module.scss";
import hotelStaticImages from "../../assets/room.jpg";

export default function Header({ place }) {
 
  let itDoes;
  if (place) {
    let includesImage = Object.keys(place).includes("image");

    if (includesImage) {
      itDoes = true;
    }
  }
  return (
    <header
      className={classes.header}
      style={
        itDoes
          ? { backgroundImage: `url(${place.image})` }
          : { backgroundImage: `url(${hotelStaticImages})` }
      }
    >
      <h1>tekst</h1>
    </header>
  );
}
