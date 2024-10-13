"use client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import Image from "next/image";
import logo from "../images/devlingologo.png";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Make handleSubmit async to handle the await calls
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login page or home after successful registration
        navigate("/home");
      } else {
        setErrorMessage(data.error || "An error occurred during registration");
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ef4035]">
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
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-slate-50 hover:underline">
          Back to Login
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
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
        <div className="mb-4">
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
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="confirmPassword"
          >
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
          className="w-full bg-[#faaf3f] text-white py-2 rounded-md hover:bg-[#e09c38] transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}
