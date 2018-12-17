import React from 'react';

const person = (props) => { return (
        <div>
            <p>Eu sou uma pessoa e tenho {props.age} anos</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person