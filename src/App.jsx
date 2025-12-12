import React from "react";
import Header from "./components/Homepage/header/header.jsx";
import Showcase from "./components/Homepage/showcase/showcase.jsx";
import News from "./components/Homepage/news/news.jsx";

const App = () => {
  return (
    <main>
      <Header />
      <Showcase />
      <News />
    </main>
  );
};

export default App;
