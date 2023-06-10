import { Box, Grid } from "@mui/material";
import Logo from "pages/Home/Logo";
import background from "../../assets/bridal.jpg";
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
          <img
            src={background}
            alt="make-over"
            height="1000px"
            width="100%"
            style={{ objectFit: "cover" }}
          ></img>
        </Grid>
      </Grid>
    </div>
  );
};
export default About;
