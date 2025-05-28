import React from 'react'
import D from './D'

function C({name, setname}) {
  return (
    <div>
      <h1>This is componenet C</h1>
      <h2>name is : {name}</h2>
      <D name={name} setname={setname} />

    </div>
  )
}

export default C
