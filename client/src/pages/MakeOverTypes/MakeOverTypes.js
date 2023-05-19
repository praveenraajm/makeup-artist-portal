import { Box, Button, Typography } from "@mui/material";

const MakeOverTypes = () => {
  return (
    <Box sx={{ backgroundColor: "#bf9188" }}>
      <Box
        sx={{
          width: "75%",
          margin: "0 auto",
          height: "300px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: "#fff" }} paragraph>
          01
        </Typography>
        <Button
          variant="text"
          sx={{ color: "#fff", fontSize: "16px" }}
          disableElevation
          disableRipple
        >
          BRIDAL MAKEUP
        </Button>
      </Box>
    </Box>
  );
};
export default MakeOverTypes;
