import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {age: 35 ,
      name: "Guilherme"},
      {age: 29 ,
      name: "Francielle"}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("foi clicado!")
    // NÃO FAÇA ASSIM! this.state.persons[0].age = 99
    this.setState({ persons: [
      {age: 35 ,
      name: newName},
      {age: 29, 
      name: "Francielle"}
    ]})
  }

  nameChangedHandler = (event) => {
   this.setState({ persons: [
     {age: 35 ,
     name: event.target.value},
     {age: 29, 
     name: "Francielle"}
   ]})
}
  
  render() {
    return (
      <div className="App">
       <h1>Isto é um aplicativo React!!</h1>
       {/* passagem de parâmetro menos eficiente. não usars */}
       <button onClick={() => this.switchNameHandler("Gui!!!")}>Trocar o nome</button>
       <Person 
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} 
        // passagem de parâmetros mais eficiente! usar este modelo
        click={this.switchNameHandler.bind(this, "GuiGui!!!")}
        changed={this.nameChangedHandler}>Teste do guilherme</ Person>
       <Person 
        name={this.state.persons[1].name}
        age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
