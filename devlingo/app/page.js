'use client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './sign-up/login';
import Register from './sign-up/register';

const App = () => {
 return (
   <Router>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />
     </Routes>
   </Router>
 );
};


export default App;



