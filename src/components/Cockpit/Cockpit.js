import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {

    let btnClass = classes.Button

    const assignedClasses = []

    if (props.showPersons) {
        btnClass = [ classes.Button , classes.Red ].join(' ')
    }
    
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <>
        {/* // <div className={classes.Cockpit}> */}
            <h1>Isto é um aplicativo React!!</h1>
            <p className={assignedClasses.join(' ')}>{props.title}</p>
            <button className={btnClass}
                onClick={props.toggle}>Mostrar pessoas</button>
        {/* // </div> */}
        </>
    )

}

export default cockpit