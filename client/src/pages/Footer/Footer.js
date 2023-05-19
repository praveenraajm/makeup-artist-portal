import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, Link, Typography } from "@mui/material";
import { footerIconLinkStyles, footerIconStyles } from "./footerIconStyles";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#221010" }}>
      <Grid container>
        <Grid item xs={6}>
          <Box sx={{ padding: "32px 8px" }}>
            <Box
              sx={{
                width: "75%",
                margin: "0 auto",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" paragraph color="#fff">
                CHARM MAKEOVER
              </Typography>
              <Typography variant="caption" paragraph color="#fff">
                NO.6 11TH CROSS KALA NAGAR, K G HALLI JALAHALLI, BANGALORE -
                560015
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ padding: "32px 8px" }}>
            <Box
              sx={{
                width: "75%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" paragraph color="#fff">
                FOLLOW US ON
              </Typography>
              <Box /* sx={{ display: "flex", justifyContent: "space-between" }} */
              >
                <Link
                  sx={footerIconLinkStyles}
                  href={
                    "https://www.facebook.com/profile.php?id=100090175178959"
                  }
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    color="#fff"
                    style={footerIconStyles()}
                  />
                </Link>
                <Link
                  sx={footerIconStyles}
                  href={"https://www.instagram.com/charm_makeover/"}
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="#fff"
                    style={footerIconStyles()}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
