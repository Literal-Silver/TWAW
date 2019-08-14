import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import NavbarTWAW from "./Components/Navbar/NavbarTWAW";
import TWAWCalendar from "./Components"

class App extends Component {
    render() {
      return (
        <div className="App">
          <NavbarTWAW />
          <header className="App-header">
            <img src={star} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
             <TWAWCalendar /> 
            </div> 
        </div>
    );
  }
}
