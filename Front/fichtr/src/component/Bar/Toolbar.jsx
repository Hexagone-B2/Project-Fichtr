import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";
import Button from "../Button";

const plusCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function Toolbar() {
  const { isAuthenticated, userId } = useContext(AuthContext);

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
            <Button
              title={"Poser une question"}
              theme={"primary"}
              icon={plusCircle}
            />
            <Button icon={"/img/envelope.svg"} title={""} />
            <Link to={"/profile"}>
              <img
                crossorigin="anonymous"
                src={
                  "https://dev.enzo-salson.fr/api/getProfilePic?id=" + userId
                }
                alt="avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button
                title={"Se connecter"}
                type={"button"}
                theme={"primary"}
              />
            </Link>

            <Link to={"/register"} type="button">
              <Button title={"Inscription"} type={"button"} theme={"primary"} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Toolbar;
