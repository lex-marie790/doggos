import React from 'react';
// import './App.css';


import DoggoCard from './Components/DoggoCard.js';

class App extends React.Component {
  state={
    breeds: []
  };

  componentDidMount(){
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(res => res.json())
    .then((data) => {
      this.setState({ breeds:data })
      console.log('app = ' + data);
    })
    .catch(err => {
      console.log('cant get dogs')
    });
  }

  handleSubmit
  
  render() {
    return(
      <div>
        <DoggoCard key={this.state.breeds.id} breeds = {this.state.breeds} />
        {/* <button onClick={this.state.breeds}>Get A New Doggo!</button> */}

      </div>
    )
  }
}

export default App;
