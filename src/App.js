import React from 'react';
import './App.css';
// import axios from 'axios';

import DoggoCard from './Components/DoggoCard.js';

class App extends React.Component {
  state={
    dogs: []
  };

  componentDidMount(){
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(res => res.json())
    .then((data) => {
      this.setState({ dogs: data })
    })
    .catch(err => {
      console.log('cant get dogs')
    });
  }
  
  render() {
    return(
      <div>
        <DoggoCard dogs = {this.state.dogs} />
      </div>
    )
  }
}

export default App;
