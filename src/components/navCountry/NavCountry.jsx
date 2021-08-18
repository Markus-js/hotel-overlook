
import classes from "./NavCountry.module.scss";

export default function NavCountry({setData, setURL, setRoomID}) {
  


  function handleCountry(x) {
    setData(x)
    setURL(`https://api.mediehuset.net/overlook/countries/`)
    setRoomID(false)
  }

  return (
    <nav className={classes.nav}>
      <ul>
        <li onClick={() => handleCountry(1)} >Danmark</li>
        <li onClick={() => handleCountry(2)}>Svarige</li>
        <li>Norge</li>
        <li>Finland</li>
        <li>Island</li>
        <li>Tyskland</li>
        <li>Polen</li>
      </ul>
    </nav>
  );
}
