import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (authLoading || profileLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div className={`h-[calc(100vh-3.5rem)] flex-1 overflow-auto ${isSidebarOpen ? "ml-[250px]" : "ml-0"} transition-all duration-300`}>
        {/* Mobile Toggle Button */}
        <button
          className="absolute top-4 left-4 md:hidden z-50 p-2 bg-richblack-800 text-white rounded-full"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close" : "Open"} Sidebar
        </button>

        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
