import { Box, Grid, Typography } from "@mui/material";
import Logo from "pages/Home/Logo";
import Carousel from "react-material-ui-carousel";
import PortfolioDescription from "./PortfolioDescription";
import portfolioImageOne from "../../assets/CharmMakeover/Image_One.jpg";
import portfolioImageTwo from "../../assets/bridal.jpg";
import { NavigateNext } from "@mui/icons-material";

const Portfolio = () => {
  const portfolioImages = [
    {
      src: portfolioImageTwo,
    },
    {
      src: portfolioImageOne,
    },
  ];
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ backgroundColor: "#ddc5c5" }}>
          <Logo />
          <Grid container>
            <Grid item xs={5}></Grid>
            <Grid item xs={7}>
              <Box sx={{ height: "400" }}>
                <PortfolioDescription />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Carousel /* sx={{ width: "90%", margin: "0 auto" }} */
            stopAutoPlayOnHover
            // indicatorIconButtonProps={{
            //   style: {
            //     padding: "2px", // 1
            //     color: "#939393", // 3
            //   },
            // }}
            // activeIndicatorIconButtonProps={{
            //   style: {
            //     backgroundColor: "#939393", // 2
            //   },
            // }}
          >
            {portfolioImages.map((item, index) => {
              return (
                <img
                  key={index}
                  name={`Image-${index}`}
                  src={item?.src}
                  height="1000px"
                  width="100%"
                  style={{ objectFit: "cover" }}
                />
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
};
export default Portfolio;
