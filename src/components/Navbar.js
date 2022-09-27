import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed w-full drop-shadow-sm">
      <div className="flex justify-between z-50 p-4 font-semibold text-white bg-cyan-600">
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>
        <div className="space-x-4">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-teal-300 border-solid border-b-4 pb-2" : "text-white/70"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-teal-300 border-solid border-b-4 pb-2" : "text-white/70"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
