import React, { useState, useContext } from 'react';
import { ActivityContext } from '../context/Context';
import { v4 as uuidv4 } from 'uuid';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import EditTask from './EditTask';


function Task() {

  const { tasks, setTasks } = useContext(ActivityContext);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleChange = (event) => setInput(event.target.value);

  const handleClick = () => {
    if (!input.trim()) return;
    const newTask = { 
        id: uuidv4(),
       input: input 
      };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInput('');
  };

  const deleteClickById = (id)=>{
     const updatedTasks = tasks.filter((task)=>{
      return id !== task.id
    })
    setTasks(updatedTasks)
  }

  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Track Your Tasks</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter The Task Here!"
          onChange={handleChange}
          value={input}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          onClick={handleClick}
        >
          Create
        </button>
      </div>

      {/* this was the final component to be rendering */}

      <div className="flex flex-wrap gap-2 ">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-row items-center justify-between gap-2 border border-gray-400 rounded px-4 py-2"
          >

              <span className="flex-1">{task.input}</span>
             
            <RiDeleteBin6Line onClick={()=>{deleteClickById(task.id)}} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <FaEdit 
              onClick={() => setEditingId(task.id)}
              className="text-gray-600 hover:text-gray-800 cursor-pointer" 
            />
          </div>
        ))}
      </div>

      {editingId && (
        <EditTask
          id={editingId}
          onClose={() => setEditingId(null)}
        />
      )}

    </div>
  );
}

export default Task;
