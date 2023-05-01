import { Grid } from "@mui/material";
import NavBar from "pages/NavBar/NavBar";
import Home from "./Home";
import Logo from "./Logo";
import MakeOverTypes from "pages/MakeOverTypes/MakeOverTypes";
import Portfolio from "pages/Portfolio/Portfolio";
import Footer from "pages/Footer/Footer";

const MainGrid = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ backgroundColor: "#ffebeb" }}>
          <Logo />
          <Grid container>
            <Grid item xs={5}></Grid>
            <Grid item xs={7}>
              <Home />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <NavBar />
        </Grid>
      </Grid>
      <MakeOverTypes />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default MainGrid;
