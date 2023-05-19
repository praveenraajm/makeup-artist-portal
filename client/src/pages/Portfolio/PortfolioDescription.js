import { Box, Button, Link, Typography } from "@mui/material";
import { homeHeaderStyles } from "pages/Home/homeStyles";

const PortfolioDescription = () => {
  return (
    <div>
      <Box sx={homeHeaderStyles}>
        <Typography variant="h3" paragraph color="#fff" fontFamily="fangsong">
          PORTFOLIO
        </Typography>
        <Typography
          variant="h3"
          paragraph
          color="#655151"
          fontFamily="fangsong"
        >
          Here's a glimpse of what we love to do.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "16px",
          }}
        >
          <Link
            href="#/fine-art-gallery"
            sx={{
              color: "#5f5050",
              textDecoration: "underline",
              fontSize: "24px",
            }}
          >
            BRIDAL
          </Link>
        </Box>
      </Box>
    </div>
  );
};
export default PortfolioDescription;
