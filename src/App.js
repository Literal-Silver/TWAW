import React from "react";
import star from "../img/star.png";
import "./App.css";
import Button from "react-bootstrap/Button";
//import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import logo from "../img/logo.png";
// eslint-disable-next-line no-unused-vars
import food from "../img/food.jpg";
import Navbar from "Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={star} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React yeet yeet
        </a>
      </header>
      <Button variant="success" onClick={() => alert("YEET!")}>
        Yeet
      </Button>
      <ShoppingList name="ed" />
    </div>
  );
}

export default App;
