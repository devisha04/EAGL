import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate(); // Use the hook here

  const onSubmit = async (data) => {
    console.log("Form data:", data); // Log form data
    try {
      const response = await axios.post("http://localhost:3000/todos", {
        username: data.username,
        password: data.password,
        name: data.name,
        age: data.age,
        contact: data.contact,
        address: data.address,
      });
      console.log("Response data:", response.data); // Log response data
      navigate("/vendor");
    } catch (error) {
      console.error("Error creating vendor:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md border-2 border-gray-300">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded-md bg-white text-black"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md bg-white text-black"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md bg-white text-black"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Age Input */}
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-bold mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              className="w-full px-3 py-2 border rounded-md bg-white text-black"
              {...register("age", { required: true })}
            />
            {errors.age && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Contact Input */}
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-bold mb-2">
              Contact
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="Enter your contact number"
              className="w-full px-3 py-2 border rounded-md bg-white text-black"
              {...register("contact", { required: true })}
            />
            {errors.contact && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Address Input */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-bold mb-2">
              Address
            </label>
            <textarea
              id="address"
              placeholder="Enter your address"
              className="w-full px-3 py-2 border rounded-md bg-white text-black"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;