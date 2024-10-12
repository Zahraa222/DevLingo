'use client';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './sign-up/login';
import Register from './sign-up/register';
import Home from './home';


const App = () => {
return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);
};




export default App;









