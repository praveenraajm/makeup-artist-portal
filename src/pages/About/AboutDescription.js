import { Box, Typography } from "@mui/material";
import { homeHeaderStyles } from "pages/Home/homeStyles";

const AboutDescription = () => {
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
        dolor vestibulum, congue auctor lacus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </Typography>
      <Typography variant="body2" paragraph>
        Vestibulum maximus imperdiet mauris, at blandit purus molestie vel. Nam
        semper luctus felis. Cras ut lectus ac dolor consectetur venenatis at ut
        tortor. Fusce tempor, lectus ac luctus blandit, risus nisi eleifend
        purus, eget feugiat nulla quam at elit. Morbi rutrum euismod sem, eu
        lobortis urna feugiat a. In hac habitasse platea dictumst. Duis ultrices
        sed ante vel auctor. Nam vulputate leo libero, efficitur tincidunt velit
        porttitor posuere.
      </Typography>
    </Box>
  );
};
export default AboutDescription;
