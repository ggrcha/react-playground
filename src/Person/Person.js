import React from 'react';
import PersonClass from './Person.module.css'

const person = (props) => { 
    
    return (
        <div className={PersonClass.Person}>
            <p onClick={props.click}>Eu sou {props.name} e tenho {props.age} anos</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

// export default Radium(person)
export default person