import React, { useContext } from "react";
import "./Toolbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Toolbar() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="my-app-bar flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 bg-white shadow-md h-[8rem] z-10">
      <Link to={"/home"}>
        <img src={"/img/logo.png"} alt="logo" className="w-44" />
      </Link>

      <form
        className={
          isAuthenticated ? "flex items-center mx-auto" : "flex items-center"
        }
      >
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

      <div
        className={
          isAuthenticated
            ? "flex items-center space-x-7"
            : "flex items-center space-x-4"
        }
      >
        {isAuthenticated ? (
          <>
            <button
              type="button"
              className="btn-question px-5 py-2 text-base font-medium text-center inline-flex items-center text-white bg-[#310046] rounded-lg hover:bg-[#41015d] focus:ring-4 focus:outline-none focus:bg-[#310046] dark:bg-[#310046] dark:hover:bg-[#41015d] dark:focus:bg-[#310046]"
            >
              <img src={"/img/plus.svg"} alt="" className="m-2" />
              Poser une question
            </button>


            <button>
              <img src={"/img/envelope.svg"} alt="" className="w-7" />
            </button>

            <img
              src={"/img/logo.png"}
              alt="avatar"
              className="w-10 h-10 rounded-full mr-4"
            />
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              type="button"
              className="btn-connecter focus:outline-none text-white bg-[#310046] hover:bg-[#41015d] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Se connecter
            </Link>

            <Link
              to={"/register"}
              type="button"
              className="btn-inscription focus:outline-none text-white bg-[#310046] hover:bg-[#41015d] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Inscription
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Toolbar;
