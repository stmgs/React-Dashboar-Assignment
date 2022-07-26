import React, { useContext } from "react";
import NewsArticle from "../components/NewsArticle";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function News() {
  // const { data } = useContext(NewsContext);
  // console.log(data);

  const [data, setData] = useState();
  const apiKey = "08b403e85fe94d2d9d3418504f1d1803";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div>
      <h1 className="head__text">Top Headlines in US 👋</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
    </>
  );
}

export default News;
