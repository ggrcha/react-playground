import React from 'react';

const person = (props) => { return (
        <div>
            <p onClick={props.click}>Eu sou {props.name} e tenho {props.age} anos</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person