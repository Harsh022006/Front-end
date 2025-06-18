import React, { useState } from 'react'

function Clickbtn() {
  const[name,setname] = useState("Not-clicked")
  return (
    <div>
      <h1>The Button is {name}</h1>
      <button className='btn btn-info' onClick={()=>setname("clicked")}>Change data</button>
    </div>
  )
}

export default Clickbtn
