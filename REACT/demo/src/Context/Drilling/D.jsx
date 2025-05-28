import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>This is component D</h1>
      <h2>name is : {name}</h2>

      <button onClick={()=>setname("Harsh Amburkar")}>dabaade</button>

    </div>
  )
}

export default D
