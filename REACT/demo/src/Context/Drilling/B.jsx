import React from 'react'
import C from './C'


function B({name, setname}) {
    return (
        <div>
            <h1>This is Component B</h1>
            <h2>name is : {name}</h2>
            <C name={name} setname={setname} />
            
        </div>
    )
}

export default B
