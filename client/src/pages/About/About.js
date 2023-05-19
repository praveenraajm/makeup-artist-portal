import { Home } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import Footer from "pages/Footer/Footer";
import Logo from "pages/Home/Logo";
import background from "../../assets/bridal_trim_landscape.jpg";
import AboutDescription from "./AboutDescription";

const About = () => {
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
          <img src={background} alt="make-over" className="responsive"></img>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};
export default About;
