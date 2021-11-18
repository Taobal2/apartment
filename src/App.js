<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";


const App = () => {
  return (
    <Router>
    <Header/>
    <Routes> 
      <Route />
    </Routes>
    </Router>

    
  );
}
=======
import React from "react";
import SamHomePage from "./Components/SamSalHomePage/samHomePage";
import HomePage from "./Components/TaibatHomePage/HomePage";
import Main from "./Auth/main";

const App = () => {
  return (
    <div>
      <SamHomePage />
      <HomePage />
     <Main />
    <Footer />

    </div>
  );
};
>>>>>>> aef7934d8eb88aaa8557dc8fe999030d018bf437

export default App;
