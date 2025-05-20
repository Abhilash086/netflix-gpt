import React, { useState } from "react";
import { LOGO } from "../utils/constants";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ showGptSearch, handleClick, handleSignOut }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full h-full absolute top-0 left-0 pt-6 px-4 sm:hidden">
        <div className="flex items-center gap-2 justify-center">
          <img
            className="w-[100px] sm:w-[150px] mix-blend-normal contrast-200 opacity-[1]"
            src={LOGO}
            alt="Logo"
          />
          <h1 className="font-bold text-xl sm:text-4xl text-white -ml-5 -mt-1 sm:-ml-6 sm:-mt-2">
            -GPT
          </h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleClick}
            className="hover:bg-red-700 px-2 py-1 text-sm text-white sm:text-lg rounded-sm border cursor-pointer bg-white/15 border-white "
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <div
            onClick={handleToggleMenu}
            className={`font-bold text-white text-xl ease-in -mt-1 cursor-pointer z-50`}
          >
            {toggleMenu ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 ${
          toggleMenu ? "block" : "hidden"
        } ease-in bg-[#242020] w-screen h-screen`}
      >
        <div className="pt-14">
          <div className="text-white text-xl flex flex-col gap-8 items-center justify-center">
            <NavLink to="/browse" onClick={() => setToggleMenu(!toggleMenu)}>
              Home
            </NavLink>
            <NavLink to="/profile" onClick={() => setToggleMenu(!toggleMenu)}>
              Profile
            </NavLink>
            <NavLink to="/about" onClick={() => setToggleMenu(!toggleMenu)}>
              About
            </NavLink>
            <NavLink
              to="/browse"
              onClick={() => {
                setToggleMenu(!toggleMenu);
                handleSignOut()
              }}
            >
              Sign Out
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
