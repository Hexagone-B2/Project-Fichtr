import React from 'react';
import './ConnectedToolbar.css';


function ConnectedToolbar(props) {
    return (
        <div className="my-app-bar flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 bg-white shadow-md">
            <button>
                <img src="./img/logo.png" alt="logo" className="w-44"/>
            </button>

            <form className="flex items-center mx-auto">
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

            <div className="flex items-center space-x-7">

                <button type="button" className="btn-question px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <img src="./img/plus.svg" alt="" className="m-2"/>

                    Poser une question
                </button>

                <button>
                    <img src="./img/bell.svg" alt="" className="w-7"/>
                </button>

                <button>
                    <img src="./img/envelope.svg" alt="" className="w-7"/>
                </button>


            </div>
        </div>
    );
}

export default ConnectedToolbar;
