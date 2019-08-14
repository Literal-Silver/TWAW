import React, { Component } from "react";
import star from "./img/star.png";
import "./App.css";
import Button from "react-bootstrap/Button";
import NavbarTWAW from "./Components/Navbar/NavbarTWAW";
import TWAWCalendar from "./Components/Calendar/Calendar";
//import Footer from "Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTWAW />
        <header className="App-header">
          <img src={star} className="App-logo" alt="logo" />
        </header>
        <div class="container">
          <TWAWCalendar />
        </div>

        <Button variant="success" onClick={() => alert("YEET!")}>
          Yeet
        </Button>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
