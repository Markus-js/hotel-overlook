import classes from "./Desc.module.scss"

export default function Desc({ place }) {
  let itDoes = [];
  let intro = "Vores hoteller i ";
  let country;
  if (place) {
    let includesImage = Object.keys(place).includes("name");
    if (!includesImage) {
      // HOTEL DETAILTS = PLACE
      intro = "";
      country = place.city_name;
      itDoes.push(place.title);
      itDoes.push(place.teaser);
    }
    if (includesImage) {
      // DEFAULT SETTING
      itDoes.push(place.name);
      itDoes.push(place.description);
    }
  }

  return (
    <div className={classes.description_container}>
      <h2>
        {intro} {itDoes[0]} {country}
      </h2>
      <p>{itDoes[1]} </p>
      <p>{itDoes[3]} </p>
    </div>
  );
}
