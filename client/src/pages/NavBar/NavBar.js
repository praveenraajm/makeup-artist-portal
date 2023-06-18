import * as React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry, faFaceFlushed } from "@fortawesome/free-solid-svg-icons";
import { Button, Link } from "@mui/material";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { navItems } from "./constants";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: 50,
        // backgroundColor: "#4a1e1ee0",
        position: "absolute",
        top: "0",
        left: "50%",
        width: "50%",
        padding: "10px 40px",
        minWidth: "384px",
        flexWrap: "wrap",
      }}
    >
      {navItems.map((item) => (
        <Link
          key={item}
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize: "16px",
            padding: "16px 18px",
            cursor: "pointer",
            minWidth: "20px",
            textAlign: "center",
          }}
          underline="none"
          onClick={() => navigate(item?.to)}
          // href={item?.to}
        >
          {item?.label}
          {item?.icon}
        </Link>
      ))}
    </Box>
  );
};

export default NavBar;
