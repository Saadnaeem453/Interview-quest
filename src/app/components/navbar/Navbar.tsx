"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import DarkMode from "../DarkMode";
import Dropdowns from "./DropDowns";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="p-4 shadow bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="container xl:mx-auto flex justify-between items-center gap-2">
        <Link href="/" className="text-lg font-bold">
          YourInterviewQuest
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navbar Links and Dropdowns */}
        <div
          className={`hidden md:flex items-center space-x-3 xl:space-x-6 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <Dropdowns />
          <Link href="/blog" className="hover:text-green">
            Blogs
          </Link>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border-2 rounded-full focus:outline-green  focus:ring-green bg-gray-100 dark:bg-gray-700 text-black dark:text-white pr-6 lg:pr-10"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500 dark:text-gray-300" />
          </div>

          <DarkMode />

          <Link
            href="/signin"
            className="ml-4 px-4 py-2 text-white rounded-md bg-green transition-all"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="ml-2 px-4 py-2 rounded-md border border-green dark:border-white text-green-600 hover:bg-green-600 hover:text-white transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} p-4 px-6 space-y-6`}>
        <div className="block">
        <Dropdowns />
        <Link href="/blog" className="px-2 py-2 hover:text-green">
          Blogs
        </Link>
        </div>
        

        <div className="relative my-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 dark:bg-gray-700 text-black dark:text-white pr-10"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500 dark:text-gray-300" />
        </div>

        <DarkMode />

        <Link
          href="/signin"
          className="block my-2 px-4 py-2 rounded-md  bg-green transition-all"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="block my-2 px-4 py-2 rounded-md border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
