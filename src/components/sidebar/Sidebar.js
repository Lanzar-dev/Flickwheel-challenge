import React from "react";
import logo from "../../assets/logo.png";
import dashboardicon from "../../assets/dashboardicon.png";
import technicianIcon from "../../assets/technicianIcon.png";
import servicesIcon from "../../assets/servicesIcon.png";
import locationsIcon from "../../assets/locationsIcon.png";
import profileIcon from "../../assets/profileIcon.png";
import settingsIcon from "../../assets/settingsIcon.png";
import logoutIcon from "../../assets/logoutIcon.png";
import bottomPerson from "../../assets/bottomPerson.png";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <div className="img-bg space-bottom">
            <li className="sidebarListItem logo">
              <img src={logo} alt="logo" className="sidebarIcon" />
            </li>
          </div>
          <div className="space-bottom">
            <li className="sidebarListItem">
              <img src={dashboardicon} alt="logo" className="sidebarIcon" />
              <span className="sidebarListItemText dashboard">Dashboard</span>
            </li>
            <li className="sidebarListItem">
              <img src={technicianIcon} alt="logo" className="sidebarIcon" />
              <span className="sidebarListItemText">Technicians</span>
            </li>
            <li className="sidebarListItem">
              <img src={servicesIcon} alt="logo" className="sidebarIcon" />
              <span className="sidebarListItemText">Services</span>
            </li>
            <li className="sidebarListItem">
              <img src={locationsIcon} alt="logo" className="sidebarIcon" />
              <span className="sidebarListItemText">Locations</span>
            </li>
          </div>
          <div>
            <hr className="sidebarHr" />
          </div>
          <div>
            <li className="sidebarListItem">
              <img src={profileIcon} alt="logo" className="sidebarIcon" />
              <span className="sidebarListItemText">Profile</span>
            </li>
            <li className="sidebarListItem">
              <img src={settingsIcon} alt="logo" className="sidebarIcon" />
              <span className="sidebarListItemText">Settings</span>
            </li>
            <li className="sidebarListItem">
              <img src={logoutIcon} alt="logo" className="sidebarIcon" />
              <span className="sidebarListItemText">Logout</span>
            </li>
          </div>
          <div className="img-bg">
            <li className="sidebarListItem  bottomProfileImg">
              <img src={bottomPerson} alt="logo" className="sidebarIcon" />
              <p>Bridget Mary</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
