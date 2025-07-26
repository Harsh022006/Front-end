import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Managedata from './Task1/Que2/Pages/Managedata'
import Adddata from './Task1/Que2/Pages/Adddata'
import Dashboard from './Task1/Que2/Pages/Dashboard'
import Que1 from './Task3/Que1'

function App() {
  return (
    <div>
      {/* Task-1 */}
      {/* <Que1 /> */}

      {/* Que-2 */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Managedata" element={<Managedata />} />
        <Route path="/adddata" element={<Adddata  />} />
      </Routes>
      </BrowserRouter> */}

      {/* Task-3 */}
      <Que1 />

    </div>
  )
}

export default App
