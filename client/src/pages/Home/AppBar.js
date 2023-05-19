import { Box, Grid } from "@mui/material";
import Home from "./Home";
import Logo from "./Logo";
import MakeOverTypes from "pages/MakeOverTypes/MakeOverTypes";
import PortfolioHome from "pages/Portfolio/PortfolioHome";
import Footer from "pages/Footer/Footer";
import background from "../../assets/bridal_trim_landscape.jpg";
import Testimonials from "pages/Testimonials/Testimonials";

const AppBar = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ backgroundColor: "#ffebeb" }}>
          <Logo />
          <Grid container>
            <Grid item xs={5}></Grid>
            <Grid item xs={7}>
              <Box sx={{ height: "400" }}>
                <Home />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src={background} alt="make-over" className="responsive"></img>
        </Grid>
      </Grid>
      <MakeOverTypes />
      <PortfolioHome />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AppBar;
