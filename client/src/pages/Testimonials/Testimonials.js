import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Item = (props) => {
  const { name, description } = props;

  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "400",
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          margin: "8px",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontWeight: "600",
          display: "flex",
          justifyContent: "center",
          color: "#341717",
          margin: "32px",
          textTransform: "uppercase",
        }}
      >
        {`- ${name}`}
      </Typography>
    </Box>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Abinaya",
      description:
        "I really admire the way she does her work. Hairstyle and Saree draping was too too good!. Beyond this, personally you are inspiring!. Will come back for more. Thank you so much Ms.Gowri!!",
    },
    {
      name: "Manosri Rajan",
      description:
        "Her service of Hairstyle and saree draping was really awesome for my wedding. I really love it..",
    },
    {
      name: "Hamsitha Reddy",
      description:
        "The way the makeup and hair done is just flawless..And the requirements we had were fulfilled to the best..Finally we got the best looks and output from gowri which deserves a big appreciation.. Thankyou for making our day gowri Looking forward to have u with us in further occasions.",
    },
    {
      name: "Nireekshana Natta",
      description:
        "Gowri and her assistant did an excellent job with draping, hairstyle and makeup. They were very patient throughout.",
    },
    {
      name: "Veluru Priyanka",
      description:
        "Amazing makeup done by Gowri on my wedding day. She is amazingly talented, humble and professional makeup artist. I just loved her work and friendly nature. Every single service of her is so good. On my wedding day, my overall makeup and hairstyle was praised and complemented by all. Thank you to Gowri for making me look the best on my special day.",
    },
    {
      name: "Niveda Surendran",
      description:
        "Gowri gave us excellent finish to our look. She is a PRO when it comes to hairstyle and makeup. She did for all the events. She listens patiently to all our needs, and does justice to that. Lots of Love Gowri",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#b89c9c" }}>
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
        <Typography
          variant="h3"
          sx={{
            color: "#000",
            marginTop: "8px",
            fontWeight: "500",
            fontStyle: "italic",
            fontFamily: "inherit",
          }}
          paragraph
        >
          TESTIMONIALS
        </Typography>
        <Carousel sx={{ width: "90%", margin: "0 auto" }} stopAutoPlayOnHover>
          {testimonials.map((item, index) => {
            return (
              <Item
                key={index}
                name={item?.name}
                description={item?.description}
              />
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};
export default Testimonials;
