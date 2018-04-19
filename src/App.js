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

let topScore = 0;
let Score = 0;
let numberCorrect = 0;
let Alert = "";

class App extends Component {

	state = {
		People,
    topScore,
		numberCorrect,
    Alert
	};

  setClicked = id => {
    const People = this.state.People;
    const cardClicked = People.filter(Person => Person.id === id);

    if (cardClicked[0].clicked) {

      numberCorrect = 0;
      Alert = 'Boohoohoo. Try a malenky bit harder next time.';


      for (let i = 0; i < People.length; i++) {
        People[i].clicked = false;
      }

      this.setState({Alert});
      this.setState({numberCorrect});
      this.setState({People});

    } else {
      cardClicked[0].clicked = true;
      Alert = ""; 

      numberCorrect = numberCorrect +1;

      if (numberCorrect > topScore) {
        topScore = numberCorrect;
        this.setState({Score});
        this.setState({topScore});
      }

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