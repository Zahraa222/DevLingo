'use client';
import { Link } from 'react-router-dom'; // Change here
import { useState } from 'react';


export default function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');


 const handleSubmit = (e) => {
   e.preventDefault();
   // Handle login logic here
   console.log({ email, password });
 };


 return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
       <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700" htmlFor="email">
           Email
         </label>
         <input
           type="email"
           id="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
         />
       </div>
       <div className="mb-6">
         <label className="block text-sm font-medium text-gray-700" htmlFor="password">
           Password
         </label>
         <input
           type="password"
           id="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
         />
       </div>
       <Link to="/register" className="text-blue-500 hover:underline mb-4 block text-center">
         Don't have an account? Register here.
       </Link>
       <button
         type="submit"
         className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
       >
         Login
       </button>
     </form>
   </div>
 );
}





