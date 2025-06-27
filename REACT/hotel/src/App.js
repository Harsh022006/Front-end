import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './User/Pages/Home'
import Room from './User/Pages/Room'
import About from './User/Pages/About'
import Service from './User/Pages/Service'
import Contact from './User/Pages/Contact'
import Team from './User/Pages/Team'
import Test from './User/Pages/Test'
import Booking from './User/Pages/Booking'
import Error from './User/Pages/Error'
import Dashboard from './Admin/Apages/Dashboard'


function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/test" element={<Test />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<Error />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
     
  )
}

export default App
