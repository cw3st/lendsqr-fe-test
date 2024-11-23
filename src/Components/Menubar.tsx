import React, { useState } from "react";
import switchOrganizationIcon from "../assets/briefcase 1 (1).png";
import switchOrganizationalDropdownIcon from "../assets/np_next_2236826_000000 2.png";
import dashboardIcon from "../assets/home 1.png";
import "../Styles/Menubar.css";

type MenubarProps = {
  menu1: any;
  menu2: any;
  menu3: any;
};

const Menubar: React.FC<MenubarProps> = ({ menu1, menu2, menu3 }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index: any) => {
    setSelectedItem(index);
  };

  return (
    <div className="menubar">
      <div className="menu1">
        <img
          src={switchOrganizationIcon}
          alt="Switch Organization"
          className="menu1-img1"
        />
        <span>Switch Organization</span>
        <img
          src={switchOrganizationalDropdownIcon}
          alt="Dropdown"
          className="menu1-img2"
        />
      </div>
      <div className="menu2">
        <img src={dashboardIcon} alt="Dashboard" />
        <span>Dashboard</span>
      </div>
      <div className="menu-list1">
        <div className="menu-heading1">CUSTOMERS</div>
        <div className="menu-ul1">
          {menu1.map((menuItem: any, index: any) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`list ${selectedItem === index ? "selected" : ""}`}
            >
              <div className="icon-container">
                <img src={menuItem.icon} alt="" />
              </div>
              <span>{menuItem.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="menu-list1">
        <div className="menu-heading1">BUSINESSES</div>
        <div className="menu-ul1">
          {menu2.map((menuItem: any, index: any) => (
            <div key={index} className="list">
              <div className="icon-container">
                <img src={menuItem.icon} alt="" />
              </div>
              <span>{menuItem.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="menu-list1">
        <div className="menu-heading1">SETTINGS</div>
        <div className="menu-ul1">
          {menu3.map((menuItem: any, index: any) => (
            <div key={index} className="list">
              <div className="icon-container">
                <img src={menuItem.icon} alt="" />
              </div>
              <span>{menuItem.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
