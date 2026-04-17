import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow px-6">
        <div className="flex-1 font-bold text-xl">KeenKeeper</div>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-success">Home</button>
          <button className="btn btn-sm">Timeline</button>
          <button className="btn btn-sm">Life Stats</button>
        </div>
      </div>
    );
};

export default Navbar;