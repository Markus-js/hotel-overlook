export default function NewsList({ news }) {
  return (
    <div className="container">
      {news.map((item) => {
        // handleClick = context
        // setSliderToggle = context

        return <News news={item} />;
      })}
    </div>
  );
}

function News(item) {
  <h1>{item.title} </h1>;
}
