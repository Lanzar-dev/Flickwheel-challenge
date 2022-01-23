import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="sidebarContainer">
        <Sidebar />
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
