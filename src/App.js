import "./index.css";
import React from "react";
import Header from "./components/Header";

import HomePage from "./components/HomePage";

const App = (props) => {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
