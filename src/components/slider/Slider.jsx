import Carousel from "react-material-ui-carousel";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpeg";
import Slide3 from "../../assets/slide3.jpeg";
import Header from "../header/Header";
import classes from "./Slider.module.scss"

export function Slider() {
    const carouselItems = [
      {
        url: Slide1,
        title: "",
        alt: "velkommen_hotel_overlook",
      },
      {
        url: Slide2,
        title: "",
        alt: "",
      },
      {
        url: Slide3,
        title: "",
        alt: "",
      },
    ];
  
    return (
      <section className={classes.carouselSec} >
        <Header />
        <Carousel autoPlay={false} className={classes.carousel}>
        {carouselItems.map((item, index) => {
          return <Item key={index} item={item}  />;
        })}
      </Carousel>
      </section>
    );
  }
  
  function Item(props) {
    return (
      <div className={classes.carouselItem}>
        <h3>{props.item.title} </h3>
        <img alt={props.item.alt} src={props.item.url} />
      </div>
    );
  }