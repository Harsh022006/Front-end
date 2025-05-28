import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Layout/Pages/Home';
import Help from './Layout/Pages/Help';
import About from './Layout/Pages/About';
import Contact from './Layout/Pages/Contact';
// import Maincontext from './Context/Maincontext';
// import Usecart from './UssEffect/Usecart';
// import Usecard from './UssEffect/Usecard';
// import Useproduct from './Jsx/UssEffect/Useproduct';
// import Useusertable from './Jsx/UssEffect/Useusertable';
// import Classcompo from './component/Classcompo';
// import Funcompo from './component/Funcompo';
// import Hello from './Jsx/Hello';
// import Hello1 from './Jsx/Hello1';
// import Usetable from './Jsx/UssEffect/Usetable';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Classcompo />
      <Funcompo />
      <Hello /> */}
        {/* <Hello1 /> */}
        {/* <Usetable /> */}
        {/* <Useusertable /> */}
        {/* <Useproduct /> */}

        {/* <Usecard /> */}
        {/* <Usecart /> */}
        {/* <Maincontext /> */}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
