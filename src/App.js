import React from "react";
import {Routes, Route} from "react-router-dom";

// componets: 
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";


const App = () => {
    

  return(
    <div>
      <Navbar/>
        <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  )
}


export default App;