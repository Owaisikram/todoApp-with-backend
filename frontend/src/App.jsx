import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { response } from "express";

export default function App() {
  const BASE_URL = "http://localhost:3000";

  const [todos, setTodos] = useState([]);

  const getTodo = async () => {
    const res = await axios(`${BASE_URL}/api/v1/todos`);
    const todosFromServer = response?.data?.data;
    console.log("todosFromServer ", todosFromServer);

    setTodos(todosFromServer);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const addTodo = async (event) => {
    try {
      event.preventDefault();

      const todoValue = event.target.children[0].value;

      await axios.post(`${BASE_URL}/api/v1/todo`, {
        todo: todoValue,
      });
      getTodo();
    } catch (err) {
      console.log("error ", err);
      
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Todo App
        </h1>
        <div className="flex items-center mb-6">
          <form onSubmit={addTodo}>
            <input
              type="text"
              placeholder="Add a new task"
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </form>
          <button className="ml-3 px-5 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Add
          </button>
        </div>
        <ul className="space-y-4">
          {todos?.map((todo) => (
            <li className="p-4 bg-gray-50 rounded-lg shadow flex justify-between items-center">
              <span>{todo.todoContent}</span>
              <div className="space-x-2">
                <button className="text-green-500 hover:text-green-600 focus:outline-none">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-600 focus:outline-none">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
