import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import background from "../../assets/bridal_trim_landscape.jpg";
import Home from "pages/Home/Home";
import MakeOverTypes from "pages/MakeOverTypes/MakeOverTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "pages/Portfolio/Portfolio";
import Footer from "pages/Footer/Footer";

const NavBar = (props) => {
  const navItems = [
    {
      label: "Home",
    },
    {
      label: "About",
    },
    {
      label: "Portfolio",
    },
    {
      label: "Classes",
    },
    {
      label: "Contacts",
    },
    {
      icon: <FontAwesomeIcon icon={faPlus} />,
    },
    {
      icon: <FontAwesomeIcon icon={faPlus} />,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "block",
          justifyContent: "space-around",
          backgroundImage: `url(${background})`,
          objectFit: "contain",
          backgroundPosition: "top",
          height: "1000px",
          width: "100%",
          flexWrap: "wrap",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", minHeight: 100 }}>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              {item?.label?.toUpperCase()}
              {item?.icon}
            </Button>
          ))}
        </Box>
        <Home />
      </Box>
      <MakeOverTypes />
      <Portfolio />
      <Footer />
    </Box>
  );
};

export default NavBar;
