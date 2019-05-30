import React, { Component } from "react";
import star from "../img/star.png";
import "./App.css";
import Button from "react-bootstrap/Button";
import NavbarTWAW from "Components/Navbar/NavbarTWAW";
import Footer from "Components/Footer/Footer";

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
          <a
            className="App-link"
            href="https://emiller88.github.io/posts/learn-react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React yeet yeet
          </a>
        </header>
        <Button variant="success" onClick={() => alert("YEET!")}>
          Yeet
        </Button>
        <Footer />
      </div>
    );
  }
}

export default App;
