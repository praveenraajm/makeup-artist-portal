import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, Link, Typography } from "@mui/material";
import { footerIconLinkStyles, footerIconStyles } from "./footerIconStyles";
import { navItems } from "pages/NavBar/constants";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#221010", minWidth: "768px" }}>
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
              <Box sx={{ marginTop: "32px" }}>
                {navItems.map((item) => (
                  <Link
                    key={item}
                    sx={{
                      color: "#fff",
                      fontWeight: 400,
                      fontSize: "14px",
                      padding: "16px 18px 16px 0",
                      cursor: "pointer",
                    }}
                    underline="always"
                    onClick={() => console.log("clicked")}
                    href={item?.to}
                  >
                    {item?.label}
                    {item?.icon}
                  </Link>
                ))}
              </Box>
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
