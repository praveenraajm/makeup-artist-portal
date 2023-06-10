import { Box, Button, Typography } from "@mui/material";
import { homeBoxStyles, homeHeaderStyles } from "./homeStyles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box sx={homeHeaderStyles}>
      <Typography variant="h2" paragraph>
        Charm Makeover
      </Typography>
      <Typography variant="body1" paragraph>
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
          marginTop: "16px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7d5851",
            width: "60%",
            borderRadius: "100px",
            padding: "8px 16px",
            margin: "16px",
            "&:hover": {
              backgroundColor: "#7d5851c2",
            },
          }}
          onClick={() => {
            navigate("/about");
          }}
        >
          ABOUT US
        </Button>
      </Box>
    </Box>
  );
};
export default Home;
