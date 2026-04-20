import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow px-6">
        <div className="flex-1 font-bold text-xl">KeenKeeper</div>
        <div className="flex gap-2">
          <NavLink to={'/'} className={({ isActive }) => (isActive ? "btn btn-sm btn-success" : "btn btn-sm")}>Home</NavLink>
          {/* <button className="btn btn-sm btn-success">Home</button> */}
          <NavLink to={''} className={({ isActive }) => (isActive ? "btn btn-sm btn-success" : "btn btn-sm")}>Timeline</NavLink>
          {/* <button  className="btn btn-sm">Timeline</button> */}
          <NavLink className={({ isActive }) => (isActive ? "btn btn-sm btn-success" : "btn btn-sm")}>Life Stats</NavLink>
        </div>
      </div>
    );
};

export default Navbar;