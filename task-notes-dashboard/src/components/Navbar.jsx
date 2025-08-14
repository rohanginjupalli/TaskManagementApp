import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white"  >
      <h3 className="p-8 text-2xl font-bold border-b border-gray-700" >Dashboard</h3>
      <nav className="flex-1 p-4">
        <ul className="px-4 py-2 rounded " >
          <li className="hover:text-blue-700 rounded-md p-2 cursor-pointer "><Link to="/">Home</Link></li>
          <li className="hover:text-blue-700 rounded-md p-2 cursor-pointer"><Link to="/tasks">Tasks</Link></li>
          <li className="hover:text-blue-700 rounded-md p-2 cursor-pointer"><Link to="/notes">Notes</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
