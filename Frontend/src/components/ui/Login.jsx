import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // This function can handle form submission logic if needed
    console.log(data);
    const response = await axios.post("http://localhost:3000/login", data);
    console.log(response.data.message);
    if (response.data.message){
      console.log("inside if")
      if(data.userType == "vendor"){
        navigate(`/vendor`);
      }
      else if(data.userType == "Volunteer"){
        navigate(`/volunteer`);
      }
      else{
        console.log(response.data)
        navigate(`/vet/${response.data.user._id}`);
      }
    } 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md border-2 border-gray-300">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
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

          {/* User Type Dropdown */}
          <div className="mb-6">
            <label htmlFor="userType" className="block text-sm font-bold mb-2">
              What kind of user are you?
            </label>
            <select
              id="userType"
              className="w-full px-3 py-2 border rounded-md bg-white text-black"
              {...register("userType", { required: true })}
            >
              <option value="">Select user type</option>
              <option value="vendor">Vendor</option>
              <option value="volunteer">Volunteer</option>
              <option value="vet">Vet</option>
            </select>
            {errors.userType && (
              <span className="text-red-500 text-sm">Please select your user type</span>
            )}
          </div>

          {/* Login Button */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;