import { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: call registration API
    console.log('Register user:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow max-w-md mx-auto">
      <h2 className="text-xl mb-4">Register</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-2 border"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-2 border"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mb-4 border"
        required
      />
      <button type="submit" className="bg-yellow-400 text-white py-2 px-4 rounded">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
