import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import BookList from "./components/BookList.jsx";

export default (_) => {
  return (
    <div className="App">
      <h1>Current Manga Best Sellers</h1>
        <div className="Cards">
          <Card title="Mangas" color="#85C1E9">
            <BookList/>
          </Card>
        </div>
    </div>
  );
};
