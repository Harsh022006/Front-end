import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {
    const { name, setname} = useContext(data)
  return (
    <div>
      <h1>this is child D</h1>
      <h2>Name is:{name}</h2>
        <button onClick={()=>setname("Amburkar Harsh")}>dabaa</button>
    </div>
  )
}

export default ChildD
