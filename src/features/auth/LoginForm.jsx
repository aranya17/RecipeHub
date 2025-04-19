import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: call API here
    const fakeUser = { name: 'John Doe', email: formData.email };
    login(fakeUser);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow max-w-md mx-auto">
      <h2 className="text-xl mb-4">Login</h2>
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
