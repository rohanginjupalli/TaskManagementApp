import React, { useContext } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';
import { ActivityContext } from '../context/Context';
import EditTaskById from './EditTask';

function Home(){
    const { tasks, notes, setTasks } = useContext(ActivityContext);
    const [input,setInput]=useState('');
    const handleChange = (event)=>{
      setInput(event.target.value);
    }
    const handleClick = (event)=>{
        const newTask = {
          id: uuidv4(),
          input
        }
        setTasks((prevValue)=>{
          return [...prevValue,newTask]
        })
        setInput('');
      }
    return <div className='px-8 py-8 '>
        <div className=" flex flex-col">
          <div className="flex flex-col gap-2 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Personal Task & Notes Dashboard
            </h1>
            <h3 className="text-lg font-bold text-gray-600">
              Welcome back, user
            </h3>
        </div>

        </div>

        <div className="flex flex-row gap-4 mt-5 mb-5">
          <div className="bg-white shadow-md rounded-md px-6 py-4 text-gray-800 bg-yellow-500 font-semibold">
            Total Tasks: {tasks.length}
          </div>
          <div className="bg-white shadow-md rounded-md px-6 py-4 text-gray-800 bg-yellow-500 font-semibold">
            Total Notes: {notes.length}
          </div>
        </div>


        <div className="flex items-center gap-2">
            <input 
                placeholder='Enter The Task Here !'
                onChange={handleChange}
                value={input}
                className="flex-1 p-2 border border-gray-300 rounded-md "
             />
            <button onClick={handleClick} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-blue-600" >Create</button>
        </div>

    <div className="py-8 flex flex-wrap gap-4">
    {tasks.map((task) => (
    <div
      key={task.id}
      className="p-4 border rounded-md shadow-sm hover:shadow-md w-40"
    >
      {task.input}
    </div>
    ))}
    </div>

    

  </div>
}

export default Home