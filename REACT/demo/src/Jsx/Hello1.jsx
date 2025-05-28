import React from 'react'

function Hello1() {
    let name = "harsh"
    console.log(name);

    let a = 20,
        b = 10;
    let sum = a + b;
    console.log(sum);;

    return
    (
        <div>
            <h1>Name ={name}</h1>
            <h1> sum ={sum}</h1>

        </div>
    )
}

export default Hello1
