import { Box, Button, Typography } from "@mui/material";
import { homeBoxStyles, homeHeaderStyles } from "./homeStyles";

const Home = () => {
  return (
    <Box sx={homeHeaderStyles}>
      <Typography variant="h2" paragraph /* sx={{ color: "#fff" }} */>
        Charm Makeover
      </Typography>
      <Typography variant="body1" paragraph /* sx={{ color: "#fff" }} */>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        maximus imperdiet mauris, at blandit purus molestie vel. Nam semper
        luctus felis. Cras ut lectus ac dolor consectetur venenatis at ut
        tortor. Fusce tempor, lectus ac luctus blandit, risus nisi eleifend
        purus, eget feugiat nulla quam at elit. Morbi rutrum euismod sem, eu
        lobortis urna feugiat a. In hac habitasse platea dictumst. Duis ultrices
        sed ante vel auctor. Nam vulputate leo libero, efficitur tincidunt velit
        porttitor posuere. Duis in consectetur diam. In odio tellus, dapibus nec
        dolor vestibulum, congue auctor lacus.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "64px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7d5851",
            width: "60%",
            borderRadius: "100px",
            padding: "8px 16px",
          }}
        >
          ABOUT US
        </Button>
      </Box>
    </Box>
  );
};
export default Home;
