import React, { Component } from 'react';
import AppClasses from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      {
        id: "1",
        age: 35,
        name: "Guilherme"
      },
      {
        id: "2",
        age: 29,
        name: "Francielle"
      },
      {
        id: "3",
        age: 3,
        name: "Café"
      },
      {
        id: "4",
        age: 3,
        name: "Brisa"
      }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
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
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null

    if (this.state.showPersons) {
      persons = (
        < Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      )
    }

    return (
      <div className={AppClasses.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
