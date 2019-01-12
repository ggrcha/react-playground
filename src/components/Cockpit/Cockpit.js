import React from 'react';
import CockpitClasses from './Cockpit.modules.css'

const cockpit = (props) => {

    let btnClass = ''

    const classes = []

    if (props.showPerson) {
        btnClass = CockpitClasses.Red
    }
    
    if (props.persons.length <= 2) {
      classes.push(CockpitClasses.red)
    }

    if (props.persons.length <= 1) {
      classes.push(CockpitClasses.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Isto é um aplicativo React!!</h1>
            <p className={classes.join(' ')}>Isso realmente funciona!!</p>
            <button className={btnClass}
                onClick={props.toggle}>Mostrar pessoas</button>
        </div>
    )

}

export default cockpit