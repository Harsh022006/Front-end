import React from 'react'
import LoginLogout from './ConditionRendering/LoginLogout'
import Voting from './ConditionRendering/Voting'
import Form from './Form/Form'
import Click from './HandlingEvent/Click'
import Input from './HandlingEvent/Input'

function App() {
  return (
    <div>
    {/* Condition Rendering */}
    <LoginLogout />
    <Voting />

    {/* Form */}
    <Form />

    {/* Handling Event */}
    <Click />
    <Input />
    </div>
  )
}

export default App
