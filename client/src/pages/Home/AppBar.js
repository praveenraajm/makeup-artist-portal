import { Box, Grid } from "@mui/material";
import Home from "./Home";
import Logo from "./Logo";
import MakeOverTypes from "pages/MakeOverTypes/MakeOverTypes";
import PortfolioHome from "pages/Portfolio/PortfolioHome";
import background from "../../assets/bridal.jpg";
import Testimonials from "pages/Testimonials/Testimonials";
import NavBar from "pages/NavBar/NavBar";

const AppBar = () => {
  return (
    <div style={{ minWidth: "768px" }}>
      <Grid container>
        <Grid item xs={6} sx={{ backgroundColor: "#ffebeb" }}>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Box
                sx={{
                  height: "400",
                  display: "flex",
                  flexDirection: "column",
                  paddingRight: "50px",
                }}
              >
                <Logo />
                <Home />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img
            src={background}
            alt="make-over"
            // className="responsive"
            height="1000px"
            width="100%"
            style={{ objectFit: "cover" }}
          ></img>
        </Grid>
      </Grid>
      <MakeOverTypes />
      <PortfolioHome />
      <Testimonials />
    </div>
  );
};

export default AppBar;
