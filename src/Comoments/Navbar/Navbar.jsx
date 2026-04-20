import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow px-6">
        <div className="flex-1 font-bold text-xl">KeenKeeper</div>
        <div className="flex gap-2">
          <NavLink to={'/'} className={({ isActive }) => (isActive ? "btn btn-sm btn-success" : "btn btn-sm")}>Home</NavLink>
          <NavLink to={'/timelinepage'} className={({ isActive }) => (isActive ? "btn btn-sm btn-success" : "btn btn-sm")}>Timeline</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn btn-sm btn-success" : "btn btn-sm")}>Life Stats</NavLink>
        </div>
      </div>
    );
};

export default Navbar;