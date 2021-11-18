import React from "react";
import SamHomePage from "./Components/SamSalHomePage/samHomePage";
import HomePage from "./Components/TaibatHomePage/HomePage";
import Main from "./Auth/main";
import Header from "./Header/Header";
const App = () => {
  return (
    <div>
      <SamHomePage />
      <HomePage />
      <Header />
      <Main />
    </div>
  );
};

export default App;
