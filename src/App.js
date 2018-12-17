import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {age: 35},
      {age: 20}
    ]
  }

  switchNameHandler = () => {
    // console.log("foi clicado!")
    // NÃO FAÇA ASSIM! this.state.persons[0].age = 99
    this.setState({ persons: [
      {age: 99},
      {age: 15}
    ]})
  }

  render() {
    return (
      <div className="App">
       <h1>Isto é um aplicativo React!!</h1>
       <button onClick={this.switchNameHandler}>Trocar o nome</button>
       <Person age={this.state.persons[0].age} >Teste do guilherme</ Person>
       <Person age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
