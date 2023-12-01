import React from "react";
import "./Toolbar.css";
import { Link } from "react-router-dom";

export default function Toolbar(props) {
  return (
    <div className="my-app-bar flex justify-between items-center fixed top-0 left-0 right-0 bg-white shadow-md z-10 w-screen h-[8rem]">
      <Link to="/content">
        <img src={"/img/logo.png"} alt="logo" className="w-44" />
      </Link>

      <form className="flex items-center">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Faire une recherche..."
            required=""
          />
        </div>
      </form>

      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className="btn-connecter focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Se connecter
        </Link>
        <Link
          to="/register"
          className="btn-inscription focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Inscription
        </Link>
      </div>
    </div>
  );
}
