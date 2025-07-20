import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Read from './Component/Read'
import Create from './Component/Create'
import Update from './Component/Update'

function App() {
  return (
  //  Task-3
  <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route  path='/' element={<Read />} />
      <Route  path='/new' element={<Create />} />
      <Route  path='/edit/:id' element={<Update />} />
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
