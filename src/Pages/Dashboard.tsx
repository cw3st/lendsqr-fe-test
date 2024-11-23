import { useState } from "react";
import Menubar from "../Components/Menubar";
import Navbar from "../Components/Navbar";
import {
  BusinessesMenubar,
  CustomerMenubar,
  SettingsMenubar,
} from "../Components/MenubarArray";
import DashboardUsers from "../Components/DashboardUsers";
import { UserCumulationArray } from "../Components/UserCumulationArray";
import UserDetails from "../Components/UserDetails";
import { IoSearchOutline } from "react-icons/io5";
import "../Styles/Dashboard.css";

function Dashboard() {
  const [showUserDetails, setShowUserDetails] = useState(false);

  //Function to handle when a user clickson user details
  const handleUserClick = () => {
    setShowUserDetails(true);
  };

  //Function to navigate back to Dashboard
  const handleBackToDashboard = () => {
    setShowUserDetails(false);
  };

  return (
    <div>
      <Navbar />

      <div className="block2-responsive">
        <form action="" className="search-form-responsive">
          <input
            type="text"
            placeholder="Search for anything"
            className="input-navbar-responsive"
          />
          <button className="search-button-responsive">
            <IoSearchOutline className="search-icon-responsive" />
          </button>
        </form>
        <a href="" className="docs">
          Docs
        </a>
      </div>
      <div style={{ display: "flex" }}>
        <Menubar
          menu1={CustomerMenubar}
          menu2={BusinessesMenubar}
          menu3={SettingsMenubar}
        />
        {showUserDetails ? (
          <UserDetails onBack={handleBackToDashboard} />
        ) : (
          <DashboardUsers
            cumulation={UserCumulationArray}
            onUserClick={handleUserClick}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
