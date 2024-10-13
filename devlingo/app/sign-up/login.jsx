"use client";
// import { Link } from 'react-router-dom'; // Change here
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "next/image";
import logo from "../images/devlingologo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login request:", { email, password });

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response received:", data);

      if (response.ok) {
        navigate("/home"); // Redirect on successful login
      } else if (response.status === 401) {
        setErrorMessage("Incorrect password");
      } else if (response.status === 404) {
        setErrorMessage("User not found");
      } else {
        setErrorMessage(data.error || "An error occurred during login");
      }
    } catch (error) {
      setErrorMessage("An error occurred while logging in");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <div className="flex p-6">
        <Image
          src={logo}
          alt="Dev Lingo Logo"
          className="object-cover"
          width={100}
          height={100}
        />
        <h1 className="mt-6 text-6xl">DevLingo</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
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
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
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
        <Link
          to="/register"
          className="text-blue-500 hover:underline mb-4 block text-center"
        >
          Don't have an account? Register here.
        </Link>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
