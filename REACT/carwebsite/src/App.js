import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Cental/Pages/Home'
import About from './Cental/Pages/About'
import Service from './Cental/Pages/Service'
import Blog from './Cental/Pages/Blog'
import Contact from './Cental/Pages/Contact'
import Features from './Cental/Pages/Features'
import Car from './Cental/Pages/Car'
import Team from './Cental/Pages/Team'
import Test from './Cental/Pages/Test'
import Error from './Cental/Pages/Error'
import Dashboard from './Admin/Apages/Dashboard'
import Blogmanager from './Admin/Apages/Blogmanager'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}  />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/features" element={<Features />} />
        <Route path="/cars" element={<Car />} />
        <Route path="/team" element={<Team />} />
        <Route path="/test" element={<Test />} />

      
        <Route path="*" element={<Error/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Blog-Manager" element={<Blogmanager />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
