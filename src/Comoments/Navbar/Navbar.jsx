import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow px-6">
        <div className="flex-1 font-bold text-xl">Keen<span className='text-[#244D3F]'>Keeper</span></div>
        <div className="flex gap-2">
          <NavLink to={'/'} className={({ isActive }) => (isActive ? "btn btn-sm bg-[#244D3F] text-white font-bold" : "btn btn-sm font-bold")}><RiHome2Line /> Home</NavLink>
          <NavLink to={'/timelinepage'} className={({ isActive }) => (isActive ? "btn btn-sm bg-[#244D3F] font-bold text-white" : "btn btn-sm font-bold")}><IoTimeOutline /> Timeline</NavLink>
          <NavLink to={'/statspage'} className={({ isActive }) => (isActive ? "btn btn-sm bg-[#244D3F] text-white font-bold" : "btn btn-sm font-bold")}><TfiStatsUp /> Stats</NavLink>
        </div>
      </div>
    );
};

export default Navbar;