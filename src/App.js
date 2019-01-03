import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: "1" ,
       age: 35 ,
       name: "Guilherme"},
      {id: "2" ,
       age: 29 ,
       name: "Francielle"},
       {id: "3" ,
       age: 3 ,
       name: "Café"},
       {id: "4" ,
       age: 3 ,
       name: "Brisa"}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
  
    person.name = event.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person

    this.setState({ persons: persons })

  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    // spread operator - retorna listas de elementos e adiciona ao array externo
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null

    if (this.state.showPersons){
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id}
              />
          })}
         </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
      }
    }

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }


    return (
      <div className="App">
        <h1>Isto é um aplicativo React!!</h1>
        <p className={classes.join(' ')}>Isso realmente funciona!!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Mostrar pessoas</button>
        {persons}
       </div>
    );
  }
}

export default Radium(App);
