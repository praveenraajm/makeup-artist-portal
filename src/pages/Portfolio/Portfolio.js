import { Box, Button, Typography } from "@mui/material";

const Portfolio = () => {
  return (
    <Box sx={{ backgroundColor: "#341717" }}>
      <Box
        sx={{
          width: "75%",
          margin: "0 auto",
          height: "200px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "#fff" }} paragraph>
          PORTFOLIO
        </Typography>
        <Button
          variant="text"
          sx={{ color: "#fff" }}
          disableElevation
          disableRipple
        >
          BRIDAL
        </Button>
      </Box>
    </Box>
  );
};
export default Portfolio;
