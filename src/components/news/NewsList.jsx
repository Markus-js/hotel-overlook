import React from "react";

export default function NewsList({ data }) {
  console.log(data);
  return (
    <div>
{/*       
      {data.map((news) => {
        let x = parseInt(news.id)
        console.log(x)
        if(x <= 3) {
          return <h1>{news.title} </h1>;
        }
      })} */}
    </div>
  );
}
