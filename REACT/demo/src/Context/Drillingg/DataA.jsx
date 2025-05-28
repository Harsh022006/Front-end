import React, { useState } from 'react'

function DataA() {
    const [name,setname] = useState("harsh")
  return (
    <div>
      <h1>hii</h1>
      <h2>name : {name}</h2>
      <h1>hello</h1>
    </div>
  )
}

export default DataA
