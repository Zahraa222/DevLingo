'use client';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './sign-up/login';
import Register from './sign-up/register';
import Home from './home';
import GetHelp from './sign-up/gethelp';


const App = () => {
return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gethelp" element={<GetHelp />} />
    </Routes>
  </Router>
);
};




export default App;









