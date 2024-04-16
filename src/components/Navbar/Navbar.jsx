import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/img/Logo.svg";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user, "from nav");
  const links = (
    <>
      <li className="text-xl font-medium ">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-xl font-medium">
        <NavLink to={"/estates"}>Estates</NavLink>
      </li>
      <li className="text-xl font-medium">
        <NavLink to={"/updateProfile"}>Update Profile</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={
        "navbar bg-[#FEF8F4] py-5 lg:px-8 sticky opacity-95 drop-shadow-lg "
      }
      id="nav"
    >
      <div className="navbar-start">
        {/* <div className="dropdown">
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
            {links}
          </ul>
        </div> */}
        <p className="btn btn-ghost">
          <Link to={"/"}>
            <img className="" src={logo} alt="" />
          </Link>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1 pt-2" id="sidebar">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {/* user profile */}
        {user ? (
          <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={`${user.displayName}`}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  title={user.displayName}
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/login"}>
            <p className="btn bg-custom-text-1 hover:black text-white">Login</p>
          </Link>
        )}
        {/* btn */}

        {/* dropdown */}
        <div className="dropdown bg-custom-text-1 rounded-md">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
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
            className="menu menu-sm dropdown-content mt-1 drop-shadow-lg z-[1] p-2  rounded-xl w-52 right-0 left-auto bg-[#FEF8F4] border "
            id="sidebar"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
