import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#ffd2d2" }}>
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
          <Typography variant="h3" paragraph>
            INSTAGRAM
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default Footer;
