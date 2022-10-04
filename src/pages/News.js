import React from "react";
import { Link } from "react-router-dom";

const PageNews = () => {
  return (
    <div>
      <h1>新聞</h1>
      <hr />
      <Link to="/news/101" className="p-2">
        News1
      </Link>
      <Link to="/news/102" className="p-2">
        News2
      </Link>
      <Link to="/news/103" className="p-2">
        News3
      </Link>
    </div>
  );
};

export default PageNews;
