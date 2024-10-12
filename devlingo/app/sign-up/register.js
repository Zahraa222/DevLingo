'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link


export default function Register() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');


 const handleSubmit = (e) => {
   e.preventDefault();


   if (password !== confirmPassword) {
     console.error("Passwords do not match");
     return;
   }


   console.log({ email, password });
   // Add your registration logic here
 };


 return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <div className="absolute top-4 left-4">
       <Link to="/" className="text-blue-500 hover:underline">
         Back to Login
       </Link>
     </div>
     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
       <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
       <div className="mb-4">
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
       <div className="mb-6">
         <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
           Confirm Password
         </label>
         <input
           type="password"
           id="confirmPassword"
           value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
           required
           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
         />
       </div>
       <button
         type="submit"
         className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
       >
         Register
       </button>
     </form>
   </div>
 );
}





