import { Box, Typography } from "@mui/material";

const Contacts = () => {
  return (
    <div>
      <Box sx={{ width: "75%", margin: "0 auto" }}>
        <Typography variant="h3" sx={{ margin: "32px 0 8px 0" }}>
          Contacts Us
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography variant="body1" sx={{ margin: "8px 8px 8px 0" }}>
            CONTACT INFO
          </Typography>
          <Typography variant="h6" sx={{ margin: "8px 16px 8px 0" }}>
            9600270188
          </Typography>
          <Typography variant="body1" sx={{ margin: "8px 8px 8px 0" }}>
            WORK HOURS
          </Typography>
          <Typography variant="h6" sx={{ margin: "8px 16px 8px 0" }}>
            10 AM - 5 PM
          </Typography>
        </Box>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf49v1WiT72VG8GEC8z_TrR8VrlwtTR2BA4Fcrsu9gvuIUqvQ/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
          title="contact-form"
          style={{
            height: "1000px",
            width: "100%",
            border: "none",
            overflow: "hidden",
            marginBottom: "32px",
          }}
        ></iframe>
      </Box>
    </div>
  );
};
export default Contacts;
