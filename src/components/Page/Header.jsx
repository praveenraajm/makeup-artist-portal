import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { getIsAuthenticated, setIsAuthenticated } from "utils/localStorage";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.scss";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const session = useSelector((state) => state.session);

  const onClickLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  const onClickMenu = (to) => {
    navigate(to);
  };

  const menus = [
    { label: "Home", to: "/home" },
    { label: "Menu 1", to: "/menu1" },
    { label: "Menu 2", to: "/menu2" },
  ];

  return (
    <div className="app-header">
      <div className="app-header-title">Portal</div>
      <div className="user-details"></div>
      {session.isAuthenticated && pathname !== "/login" && (
        <div className="menu-wrapper">
          {menus.map((menu, i) => (
            <div
              key={i}
              onClick={() => onClickMenu(menu.to)}
              className={`app-header-link ${
                pathname === menu.to ? "app-header-link-active" : ""
              }`}
            >
              {menu.label}
            </div>
          ))}
          <div onClick={onClickLogout} className="app-header-link">
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
