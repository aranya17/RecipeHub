import React from "react";
import { loginUser } from '../services/api';


const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <form className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">Login</h2>
        <input className="w-full mb-4 p-3 border rounded" type="email" placeholder="Email" />
        <input className="w-full mb-4 p-3 border rounded" type="password" placeholder="Password" />
        <button className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600">Login</button>
      </form>
    </div>
  );
};

const handleLogin = async () => {
  try {
    const res = await loginUser({ email, password });
    console.log(res.data); // contains token and user
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export default Login;
