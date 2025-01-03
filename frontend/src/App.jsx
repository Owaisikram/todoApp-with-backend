import React from 'react'

export default function App() {
  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Todo App</h1>
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="ml-3 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </div>
        <ul className="space-y-4">
          <li className="p-4 bg-gray-50 rounded-lg shadow flex justify-between items-center">
            <span>Sample Task</span>
            <div className="space-x-2">
              <button className="text-green-500 hover:text-green-600 focus:outline-none">Edit</button>
              <button className="text-red-500 hover:text-red-600 focus:outline-none">Delete</button>
            </div>
          </li>
          <li className="p-4 bg-gray-50 rounded-lg shadow flex justify-between items-center">
            <span>Another Task</span>
            <div className="space-x-2">
              <button className="text-green-500 hover:text-green-600 focus:outline-none">Edit</button>
              <button className="text-red-500 hover:text-red-600 focus:outline-none">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

