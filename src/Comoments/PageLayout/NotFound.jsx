import React from "react";
import { Link, NavLink } from "react-router";
export default function NotFound() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-black">404</h1>
        <h2 className="text-xl font-semibold mt-2">
          Page not found
        </h2>
        <p className="text-gray-500 mt-2">
          Oops!, the page you looking for does not exist
        </p>
        <Link
          to={"/"}
          className="mt-6 px-6 py-3 rounded-full bg-orange-400 hover:bg-orange-500 text-black font-medium flex items-center gap-2 mx-auto"
        >
          ←  Back to home
        </Link>

      </div>

    </div>
  );
}