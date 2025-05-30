import React, { useState } from 'react'

function Count() {
    const [count, setcount] = useState(0)

    const increment = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <h1>Count = {count}</h1>
            <button className='btn btn-info' onClick={increment}>Increment By 1</button>
            <button className='btn btn-success' onClick={() => setcount(0)}>Zero</button>
        </div>
    )
}

export default Count
