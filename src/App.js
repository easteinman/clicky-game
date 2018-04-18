import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import people from "./people.json";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Hero backgroundImage="https://i.imgur.com/VtdtTqT.jpg">
          <h1>KUBRICK CLICKY</h1>
          <h2>click on an image to earn points, but don't click on any more than once or the pod bay doors might not open...</h2>
        </Hero>


      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;