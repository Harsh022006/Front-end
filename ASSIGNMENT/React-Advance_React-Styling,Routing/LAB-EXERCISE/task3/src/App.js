import React from 'react'
// import LoginLogout from './ConditionRendering/LoginLogout'
// import Voting from './ConditionRendering/Voting'
// import Form from './Form/Form'
// import Click from './HandlingEvent/Click'
// import Input from './HandlingEvent/Input'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routing/Pages/Home'

function App() {
  return (
    <div>
    {/* Condition Rendering */}
    {/* <LoginLogout />
    <Voting /> */}

    {/* Form */}
    {/* <Form /> */}

    {/* Handling Event */}
    {/* <Click />
    <Input /> */}

      {/* routing & styling */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </div>

    
  )
}

export default App
