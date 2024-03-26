import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 p-5 md:px-10 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-lime-500 border px-3 py-2 border-lime-500 rounded-md font-bold"
                    : ""
                }
              >
                <a>Home</a>
              </NavLink>
              <NavLink
                to={"/listedbooks"}
                className={({ isActive }) =>
                  isActive
                    ? "text-lime-500 border px-3 py-2 border-lime-500 rounded-md font-bold"
                    : ""
                }
              >
                <a>Listed Books</a>
              </NavLink>
              <NavLink
                to={"/pagestoread"}
                className={({ isActive }) =>
                  isActive
                    ? "text-lime-500 border px-3 py-2 border-lime-500 rounded-md font-bold"
                    : ""
                }
              >
                <a>Pages to Read</a>
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl md:text-3xl font-bold">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-5 font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border px-3 py-2 border-green-500 rounded-md font-bold"
                  : ""
              }
            >
              <a>Home</a>
            </NavLink>
            <NavLink
              to={"/listedbooks"}
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border px-3 py-2 border-green-500 rounded-md font-bold"
                  : ""
              }
            >
              <a>Listed Books</a>
            </NavLink>
            <NavLink
              to={"/pagestoread"}
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border px-3 py-2 border-green-500 rounded-md font-bold"
                  : ""
              }
            >
              <a>Pages to Read</a>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <a className="btn bg-green-600 text-white">Sign In</a>
          <a className="btn bg-blue-400 text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
