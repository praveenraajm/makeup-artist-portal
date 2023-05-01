import { Box, Button, Typography } from "@mui/material";
import bridalImage from "../../assets/bridal.jpg";

const Portfolio = () => {
  return (
    <Box sx={{ backgroundColor: "#341717" }}>
      <Box
        sx={{
          width: "75%",
          margin: "0 auto",
          height: "450px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "#fff", marginTop: "32px" }}
          paragraph
        >
          PORTFOLIO
        </Typography>
        <Box sx={{ height: "400px" }}>
          <img src={bridalImage} alt="bridal_makeover" height="300px"></img>
        </Box>
        <Typography variant="h6" color="#fff" margin="16px 0 0 32px">
          BRIDAL
        </Typography>
      </Box>
    </Box>
  );
};
export default Portfolio;
