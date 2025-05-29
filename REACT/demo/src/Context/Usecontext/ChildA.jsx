import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildC from './ChildC'

export const data = createContext()
function ChildA() {
    const [name, setname] = useState("harsh")
    const[form,setform] = useState({
        count : 0
    })
    return (
        <div>
            <h1>hii</h1>
            <data.Provider value={{ name, setname,form,setform }}>
            <ChildD />
            <ChildC />
            </data.Provider>
        </div>
    )
}

export default ChildA
