import { Box, Grid, Typography } from "@mui/material";
import Logo from "pages/Home/Logo";
import Footer from "pages/Footer/Footer";
import Carousel from "react-material-ui-carousel";
import AboutDescription from "pages/About/AboutDescription";

const Portfolio = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ backgroundColor: "#ffebeb" }}>
          <Logo />
          <Grid container>
            <Grid item xs={5}></Grid>
            <Grid item xs={7}>
              <Box sx={{ height: "400" }}>
                <AboutDescription />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Carousel></Carousel>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};
export default Portfolio;
