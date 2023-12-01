import React from 'react';
import "./ConnectedToolbar.css";
import "./Toolbar.css";
function Toolbar() {
    const isLoggedIn = !!localStorage.getItem('authorization');

    return (
        <div className="my-app-bar flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 bg-white shadow-md">
            <button>
                <img src="./img/logo.png" alt="logo" className="w-44" />
            </button>

            <form className={isLoggedIn ? "flex items-center mx-auto" : "flex items-center"}>
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

            <div className={isLoggedIn ? "flex items-center space-x-7" : "flex items-center space-x-4"}>
                {isLoggedIn ? (
                    <>
                        <button type="button" className="btn-question px-5 py-2 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <img src="./img/plus.svg" alt="" className="m-2" />
                            Poser une question
                        </button>

                        <button>
                            <img src="./img/bell.svg" alt="" className="w-7" />
                        </button>

                        <button>
                            <img src="./img/envelope.svg" alt="" className="w-7" />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            type="button"
                            className="btn-connecter focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        >
                            Se connecter
                        </button>

                        <button
                            type="button"
                            className="btn-inscription focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        >
                            Inscription
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Toolbar;
