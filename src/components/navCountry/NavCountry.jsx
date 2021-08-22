import classes from "./NavCountry.module.scss";

export default function NavCountry({ setData, setURL, setRoomID }) {
  function handleCountry(x) {
    setData(x);
    setURL(`https://api.mediehuset.net/overlook/countries/`);
    setRoomID(false);
  }

  return (
    <>
    <nav className={classes.nav_country}>
      <ul>
        <li onClick={() => handleCountry(1)}>Danmark</li>
        <li onClick={() => handleCountry(2)}>Svarige</li>
        <li onClick={() => handleCountry(3)}>Norge</li>
        <li onClick={() => handleCountry(4)}>Finland</li>
        <li onClick={() => handleCountry(5)}>Tyskland</li>
        <li onClick={() => handleCountry(6)}>Island</li>
        <li onClick={() => handleCountry(7)}>Polen</li>
      </ul>
    </nav>
    <div className={classes.shadow} ></div>
    </>
  );
}
