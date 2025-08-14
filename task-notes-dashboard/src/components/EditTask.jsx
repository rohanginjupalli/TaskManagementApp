
import React, { useState, useContext } from 'react';
import { ActivityContext } from '../context/Context';

function EditTask({id,onClose}) {

    const {tasks,setTasks} = useContext(ActivityContext)

    const [edit,setEdit] = useState('');
    const handleChange = (event)=>{
        setEdit(event.target.value)
    }

    const handleClick = () =>{
        const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, 
                input:edit
            };
        }
        return task;
        });

        setTasks(updatedTasks);
        onClose();
    }
    
  

  return <div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg flex flex-col gap-3">
      <h1 className="text-lg font-semibold text-gray-700">Edit Task</h1>
      <input 

        className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Update your task..."
        onChange={handleChange}
        value={edit}
        />
      <button 
      onClick={handleClick}  
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Save
      </button>
    </div>

}


export default EditTask