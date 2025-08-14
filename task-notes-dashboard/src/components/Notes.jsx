import React, { useState, useContext } from 'react';
import { ActivityContext } from '../context/Context';
import { v4 as uuidv4 } from 'uuid';

function Notes() {
  const { notes, setNotes } = useContext(ActivityContext);
  const [input, setInput] = useState('');

  const handleChange = (event) => setInput(event.target.value);

  const handleClick = () => {
    if (!input.trim()) return;
    const newNote = { id: uuidv4(), text: input };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setInput('');
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Notes</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Note Here..."
          onChange={handleChange}
          value={input}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          onClick={handleClick}
        >
          Create
        </button>
      </div>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li
            key={note.id}
            className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 "
          >
            {note.text}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Notes;
