import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { getFineArtGallery } from "actions/portfolioGallery";
import Footer from "pages/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FineArtGallery = () => {
  const dispatch = useDispatch();
  const galleryImages = useSelector((state) => state.portfolioGallery?.gallery);
  console.log(galleryImages);

  useEffect(() => {
    dispatch(getFineArtGallery());
  }, []);

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

  return (
    <div>
      <Box sx={{ backgroundColor: "#ffebeb", paddingBottom: "32px" }}>
        <Box
          sx={{
            width: "75%",
            margin: "0 auto",
            height: "450px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            fontWeight="500"
            paragraph
            color="#4f3232"
            fontFamily="fangsong"
          >
            BRIDAL
          </Typography>
          <ImageList
            sx={{ width: "80%", height: "auto" }}
            cols={5}
            rowHeight={164}
          >
            {itemData.map((item, index) => (
              <ImageListItem key={index}>
                {/* <img
                  src={`http://localhost:8080/file/${item?.filename}`}
                  srcSet={`http://localhost:8080/file/${item?.filename}`}
                  // alt={item?._id}
                  loading="lazy"
                /> */}
                <img
                  src={`${item?.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item?.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item?.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};
export default FineArtGallery;
