import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">add task</Link>
      </li>
      <li>
        <Link to="/my task">my task</Link>
      </li>
      <li>
        <Link to="/completed task">completed task</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="bg-indigo-200">
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-center gap-6 font-medium capitalize py-3 mb-7 text-slate-800">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
