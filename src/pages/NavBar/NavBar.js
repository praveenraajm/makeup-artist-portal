import * as React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry, faFaceFlushed } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@mui/material";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const NavBar = (props) => {
  const navItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "#/about",
    },
    {
      label: "Portfolio",
      to: "#/portfolio",
    },
    {
      label: "Classes",
      to: "#/classes",
    },
    {
      label: "Contacts",
      to: "#/contacts",
    },
    {
      icon: <FontAwesomeIcon icon={faFacebook} size="lg" />,
      to: "https://facebook.com",
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} size="lg" />,
      to: "https://instagram.com",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: 50,
          backgroundColor: "#4a1e1ee0",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "14px",
              padding: "16px 18px",
              cursor: "pointer",
            }}
            underline="none"
            onClick={() => console.log("clicked")}
            href={item?.to}
          >
            {item?.label}
            {item?.icon}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
