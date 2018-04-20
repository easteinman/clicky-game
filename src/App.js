import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import People from "./people.json";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Row from "./components/Row";
import PeopleCard from "./components/PeopleCard";
import Footer from "./components/Footer";

// Create the variables that will be used in the app
let topScore = 0;
let Score = 0;
let numberCorrect = 0;
let Alert = "";

class App extends Component {
  // Setting this.state._____ to their variables. People being the people array in people.json
	state = {
		People,
    topScore,
		numberCorrect,
    Alert
	};
  //setClicked from PeopleCard.js
  // Setting the ID to the ID of the person clicked
  setClicked = id => {
    const People = this.state.People;
    // Filter people array, set the ID of the cardClicked
    const cardClicked = People.filter(Person => Person.id === id);
    //If a person already clicked is clicked again...
    if (cardClicked[0].clicked) {
      // Reset number correct
      numberCorrect = 0;
      // Set losing alert
      Alert = 'Boohoohoo. Try a malenky bit harder next time my droog.';
      // Reset clicked boolean for the people
      for (let i = 0; i < People.length; i++) {
        People[i].clicked = false;
      }
      // Set the above states
      this.setState({Alert});
      this.setState({numberCorrect});
      this.setState({People});

      // If a person has not been clicked before, set clicked to true
    } else {
      cardClicked[0].clicked = true;
      // Choosing to leave alert empty due to the Alert flashing
      // Just want the losing alert to show and flash
      Alert = ""; 
      // Increase numberCorrext by one
      numberCorrect = numberCorrect +1;
      // If the number corrext exceeds the top score, set new top score
      if (numberCorrect > topScore) {
        topScore = numberCorrect;
        this.setState({Score});
        this.setState({topScore});
      }
      // Randomly sort the people
      People.sort(() => {
        return 0.5 - Math.random();
      });

      this.setState({People});
      this.setState({numberCorrect});
      this.setState({Alert});
    }
  };

  render() {
    return (
    <Router>
      <div>
        <Navbar
          Alert={this.state.Alert}
          Score={this.state.numberCorrect}
          topScore={this.state.topScore}
        />
        <Wrapper>
          <Hero backgroundImage="https://i.ytimg.com/vi/UGKQxzVshvI/maxresdefault.jpg">
            <h1>KUBRICK CLICKY</h1>
            <h2>click on an image to earn points, but don't click on any more than once or the pod bay doors might not open...</h2>
          </Hero>
          <Row>
            {this.state.People.map(Person => (
              <PeopleCard
                setClicked={this.setClicked}
                id={Person.id}
                image={Person.image}
              />
            ))}
          </Row>
        </Wrapper>
        <Footer />
      </div>
    </Router>
    );
  }
};

export default App;