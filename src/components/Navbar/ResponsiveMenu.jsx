import React from "react";
import { IoMdClose } from "react-icons/io";
import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, closeMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-8 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      {/* Close Button */}
      <div className="flex justify-end">
        <button
          onClick={closeMenu}
          className="text-3xl text-black dark:text-white"
        >
          <IoMdClose />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="mt-4">
        <ul className="space-y-4 text-xl">
          {Navlinks.map((data, index) => (
            <li key={index}>
              <a href={data.link} className="mb-5 inline-block" onClick={closeMenu}>
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
