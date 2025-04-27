import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../utils/logout";
// import { logout } from "../../../services/operations/authAPI" // <-- yaha se import kiya
import { logout } from "../services/operations/authAPI"; // <-- yaha se import kiya

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.profile.user);
  const isLoggedIn = Boolean(token);

  return (
    <div className="h-[calc(100vh-4rem)] overflow-hidden bg-richblack-900 flex flex-col  justify-center items-center px-4 mt-0 text-center relative ">
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#b298f565] to-[#758cfd94] opacity-50 blur-[100px] animate-blobGlow top-10 left-10 z-0 mix-blend-lighten shadow-[0_0_60px_40px_rgba(149,135,255,0.4)]"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-br from-[#0f5f8e] to-[#001F3F] rounded-full blur-[120px] opacity-40 bottom-10 right-10 animate-blobGlow mix-blend-lighten shadow-[0_0_60px_40px_rgba(15,95,142,0.4)] z-0"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-maxContent flex flex-col gap-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold  mb-6 font-inter bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
          {isLoggedIn
            ? `Welcome, ${user?.firstName + " " + user?.lastName || "User"}`
            : "Welcome to Auth App"}
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-white mb-2  font-edu-sa">
          {isLoggedIn
            ? "You are logged in successfully."
            : "Login & Sign up with confidence."}
        </p>
        <p className="text-xl md:text-2xl   mb-2  font-edu-sa bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
          {isLoggedIn
            ? "Explore your dashboard, update your details, and enjoy a personalized experience."
            : "Easily manage your account, update details, and explore seamless features built just for you."}
        </p>

        <p className="text-xl md:text-2xl mb-2 font-edu-sa bg-gradient-to-b from-[#a678f0] via-[#b891f7] to-[#d8c1ff] text-transparent bg-clip-text font-bold">
  {isLoggedIn
    ? "Success is not an accident — it's a result of consistency, effort, and action. Keep going!"
    : "Your control. Your security."}
</p>


        <div className="flex flex-wrap justify-center gap-6 mt-5">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="bg-yellow-200 hover:bg-yellow-25 text-richblack-900 font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="border border-richblack-5 text-richblack-5 hover:bg-richblack-5 hover:text-richblack-900 font-semibold px-8 py-3 rounded-full transition duration-300">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard/my-profile">
                <button className="bg-yellow-200 hover:bg-yellow-25 text-richblack-900 font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
                  Go to Profile
                </button>
              </Link>
              <button
                onClick={() => dispatch(logout(navigate))} // <-- same style logout
                className="border border-richblack-5 text-richblack-5 hover:bg-richblack-5 hover:text-richblack-900 font-semibold px-8 py-3 rounded-full transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
