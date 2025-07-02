import React from 'react'
// import LoginLogout from './ConditionRendering/LoginLogout'
// import Voting from './ConditionRendering/Voting'
// import Form from './Form/Form'
// import Click from './HandlingEvent/Click'
// import Input from './HandlingEvent/Input'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routing/Pages/Home'
import About from './Routing/Pages/About'
import Contact from './Routing/Pages/Contact'
import Error from './Routing/Pages/Error'
import Help from './Routing/Pages/Help'

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
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="/help" element={<Help />} />
    </Routes>
    </BrowserRouter>
    </div>

    
  )
}

export default App
