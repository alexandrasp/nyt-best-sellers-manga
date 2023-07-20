import "./App.css";
import React from "react";

import BookList from "./components/BookList.jsx";

export default (_) => {
  return (
    <div className="App">
      <h1>Current Manga Best Sellers</h1>
      <BookList/>
    </div>
  );
};
