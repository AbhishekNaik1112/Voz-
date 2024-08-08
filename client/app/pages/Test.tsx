"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

const TestPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState<Partial<User>>({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      const data = await response.json();
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error('Expected an array, but received:', data);
        setUsers([]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]);
    }
  };

  // Create User
  const createUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        fetchUsers();
        setForm({ username: '', email: '', password: '', role: 'user' });
      } else {
        console.error('Error creating user:', await response.text());
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Delete User
  const deleteUser = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchUsers();
      } else {
        console.error('Error deleting user:', await response.text());
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle Form Change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen p-4 md:p-8 text-black'>
      <h1 className='text-4xl font-bold mb-6 text-gray-800 text-center'>Dummy Admin Page</h1>
      <form onSubmit={createUser} className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-md'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username || ''}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email || ''}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password || ''}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="role">Role</label>
          <select
            name="role"
            value={form.role || 'user'}
            onChange={handleChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          Create User
        </button>
      </form>
      <h2 className='text-2xl font-bold mt-8 mb-4 text-gray-800 text-center'>User List</h2>
      <ul className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-md'>
        {users.map((user) => (
          <li
            key={user.id}
            className={`flex justify-between items-center mb-4 p-4 border-b border-gray-200 ${user.role === 'admin' ? 'bg-yellow-100' : 'bg-green-100'}`}
          >
            <div>
              <p className='font-semibold text-gray-700'>{user.username}</p>
              <p className='text-gray-600'>{user.email}</p>
              <p className='text-gray-500'>{user.role}</p>
            </div>
            <button
              onClick={() => deleteUser(user.id)}
              className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
