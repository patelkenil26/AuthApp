import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";
import { VscSignOut } from "react-icons/vsc";
import { logout } from "../../services/operations/authAPI";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700  ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-10/12 xs:w-10/12 sm:w-11/12 max-w-maxContent items-center justify-between relative  ">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl xs:text-xl font-semibold uppercase tracking-widest text-white border-yellow-400 inline-block pb-1">
            Authentication
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-4">
          {token === null && (
            <>
              <Link to="/login">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Sign up
                </button>
              </Link>
            </>
          )}
          {token !== null && <ProfileDropdown />}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mr-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-14 right-4 flex flex-col gap-2 rounded-md bg-richblack-800 p-4 md:hidden z-50">
            {token === null && (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                    Log in
                  </button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                    Sign up
                  </button>
                </Link>
              </>
            )}
            {token !== null && (
              <>
                <Link
                  to="/dashboard/my-profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center  gap-x-2 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 sm:text-base sm:py-[8px] sm:px-[6px] "
                >
                  <ProfileDropdown />
                  Profile
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(logout(navigate));
                  }}
                  className="flex w-full items-center  gap-x-3 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 sm:text-base sm:py-[8px] sm:px-[10px]"
                >
                  <VscSignOut className=" text-2xl " />
                  Logout
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
