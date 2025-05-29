import React, { useContext } from 'react'
import { data } from 'react-router-dom'

function ChildC() {
    const{form, setform} = useContext(data)
  return (
    <div>
      <h1>this is Child C</h1>
      <h1>count:{form.count}</h1>
      <button onClick={()=>setform({count : form.count +1})}>incerment</button>
    </div>
  )
}

export default ChildC
