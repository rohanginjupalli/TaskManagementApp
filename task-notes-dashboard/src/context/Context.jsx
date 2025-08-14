import React, { useState, createContext } from 'react';

const ActivityContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [edit,setEdit] = useState(false);

  const valuesToBeShared = {
    tasks,
    notes,
    setTasks,
    setNotes,
    edit,
    setEdit
  };

  return (
    <ActivityContext.Provider value={valuesToBeShared}>
      {children}
    </ActivityContext.Provider>
  );
}

export { ActivityContext };
export default Provider;
