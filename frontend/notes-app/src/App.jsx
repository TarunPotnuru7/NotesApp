import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route should redirect to login or home */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;









// import React from 'react'
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/SignUp/Signup";


// const routes=(
//   <Router>
//     <Routes>
//     <Route path="/dashboard" exact element={<Home/>}/>
//     <Route path="/login" exact element={<Login/>}/>
//     <Route path="/signup" exact element={<Signup/>}/>
//     </Routes>
//   </Router>
// )

// const App = () => {
//   return (
//     <div>
//      {routes}
//     </div>
//   )
// }

// export default App