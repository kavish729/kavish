import logo from './logo.svg';
import React from "react";
import Device from "./components/Mobiles.jsx";
import Join from "./components/JoinUs.jsx";
import Setting from "./components/Settings.jsx"
import Login from "./components/Login.jsx"
import Contact from "./components/ContactUs.jsx"
import Search from "./components/Search.jsx"
import Help from "./components/Help.jsx"
import Home from "./components/Home.jsx"
import Download from "./components/Download.jsx"
import CommonQues2 from "./components/CommonQues2.jsx"


import './App.css';

function App() {
  return (
    <React.Fragment>
      <Device />


      <div className="container">
        <div className="div1">
          <Join />
          <Login />
          <Search />
          <Home />
        </div>

        <div className="div2">
          <Setting />
          <Contact />
          <Help />
          <Download />
        </div>
      </div>



      <h1 className="h2"> Part-2</h1>

      <div className="container">
        <div className="div1">
          <CommonQues2 title="JOIN US" color="#1f98cc" />
          < CommonQues2 title="LOGIN" color="#f68d1e" />
          <CommonQues2 title="SEARCH" color="#91c53c" />
          <CommonQues2 title="HOME" color="#cd3b75" />
        </div>

        <div className="div2">
          <CommonQues2 title="SETTINGS" color="#6e9fa5" />
          < CommonQues2 title="CONTACT" color="#c02b32" />
          <CommonQues2 title="HELP" color="#5b5393" />
          <CommonQues2 title="DOWNLOAD" color="#97702d" />
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;

