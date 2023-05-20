import { Box, Link, Typography } from "@mui/material";
import { makeoverTypesAlignStyles } from "./MakeOverTypesStyle";

const MakeOverTypes = () => {
  const makeOverTypes = [
    {
      firstName: "bridal",
      lastName: "makeover",
    },
    {
      firstName: "groom",
      lastName: "makeover",
    },
    {
      firstName: "guest",
      lastName: "makeover",
    },
    {
      firstName: "party",
      lastName: "makeover",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#bf9188" }}>
      <Box
        sx={{
          width: "75%",
          margin: "0 auto",
          height: "300px",
          display: "flex",
          alignItems: "center",
          // flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {makeOverTypes.map((item, index) => {
          return (
            <Box sx={makeoverTypesAlignStyles}>
              <Typography
                variant="h1"
                sx={{ color: "#fff", margin: "0" }}
                paragraph
              >
                {`0${index + 1}`}
              </Typography>
              <Link
                variant="text"
                sx={{
                  color: "#fff",
                  fontSize: "28px",
                  textTransform: "capitalize",
                  fontFamily: "auto",
                  fontWeight: "initial",
                  maxWidth: "150px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                // disableElevation
                // disableRipple
                underline="none"
              >
                {`${item?.firstName} 
                ${item?.lastName}`}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default MakeOverTypes;
