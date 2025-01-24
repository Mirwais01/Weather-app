import { NavLink } from "react-router";
import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

function Navigation() {
  const { handleSubmit, query, setQuery } = useGlobalContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center md:flex-1">
            <NavLink to={"/"} className="flex items-center">
              <img
                src="icons8-weather-100.png"
                className="h-4 sm:h-6 md:h-8 mr-3"
                alt="Weather App Logo"
              />
              <span className="self-center text-sm sm:text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                Weather App
              </span>
            </NavLink>
          </div>

          <div className="relative flex items-center flex-1 justify-center">
            <div className="relative w-full max-w-[150px] sm:max-w-xs md:max-w-md">
              <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  id="search-navbar"
                  className="block w-full p-2 pl-8 text-xs sm:text-sm md:pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex justify-end flex-1">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              Login
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-gray-100 dark:bg-gray-800">
            <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-gray-700 dark:text-gray-300">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `hover:text-blue-700 dark:hover:text-blue-500 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/today"}
                  className={({ isActive }) =>
                    `hover:text-blue-700 dark:hover:text-blue-500 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  Today
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/hourly"}
                  className={({ isActive }) =>
                    `hover:text-blue-700 dark:hover:text-blue-500 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  Hourly
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/tenDay"}
                  className={({ isActive }) =>
                    `hover:text-blue-700 dark:hover:text-blue-500 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  10Day
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/weekend"}
                  className={({ isActive }) =>
                    `hover:text-blue-700 dark:hover:text-blue-500 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  Weekend
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/monthly"}
                  className={({ isActive }) =>
                    `hover:text-blue-700 dark:hover:text-blue-500 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  Monthly
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="hidden md:flex bg-gray-100 dark:bg-gray-800 h-[40px]">
        <ul className="flex items-center  mx-auto justify-center space-x-8 font-medium text-gray-700 dark:text-gray-300">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/today"}
              className={({ isActive }) =>
                `hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Today
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/hourly"}
              className={({ isActive }) =>
                `hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Hourly
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/tenDay"}
              className={({ isActive }) =>
                `hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              10Day
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/weekend"}
              className={({ isActive }) =>
                `hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Weekend
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/monthly"}
              className={({ isActive }) =>
                `hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Monthly
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
