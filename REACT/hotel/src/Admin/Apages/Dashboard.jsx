import React from 'react'
import Aheader from '../Acommon/Aheader'
import Anavbar from '../Acommon/Anavbar'

function Dashboard() {
  return (
    <div>
        <Aheader />
        <Anavbar title="Dashboard" name="Dashboard" />
      <h1 className="text-center text-success">This is Dashboard Page...!</h1>
    </div>
  )
}

export default Dashboard
