import React, { createContext, useState } from 'react'
import ChildD from './ChildD'

export const data = createContext()
function ChildA() {
    const [name, setname] = useState("harsh")
    return (
        <div>
            <h1>hii</h1>
            <data.Provider value={{ name, setname }}>
            <ChildD />
            </data.Provider>
        </div>
    )
}

export default ChildA
