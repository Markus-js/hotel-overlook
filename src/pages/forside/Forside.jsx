import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper"
import { Slider } from "../../components/slider/Slider";
import NewsList  from "../../components/news/NewsList";

export default function Frontpage()  {
    const [news, setNews] = useState();

    const getNews = async () => {
        const url = "https://api.mediehuset.net/overlook/news";
        const result = await fetch2api(url);
        console.log(result)
        setNews(result?.items);
      };

    
      useEffect(() => {
        getNews();
      }, []);
  return (
    <>
      <Slider />
      <NewsList news={news} />
    </>
  );
}
