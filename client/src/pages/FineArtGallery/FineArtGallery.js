import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { getFineArtGallery } from "actions/portfolioGallery";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import imageOne from "../../assets/CharmMakeover/Image_One.jpg";
import imageTwo from "../../assets/CharmMakeover/Image_Two.jpg";
import imageThree from "../../assets/CharmMakeover/Image_Three.jpg";
import imageFour from "../../assets/CharmMakeover/Image_Four.jpg";
import imageFive from "../../assets/CharmMakeover/Image_Five.jpg";
import imageSix from "../../assets/CharmMakeover/Image_Six.jpg";
import imageSeven from "../../assets/CharmMakeover/Image_Seven.jpg";
import imageEight from "../../assets/CharmMakeover/Image_Eight.jpg";
import imageNine from "../../assets/CharmMakeover/Image_Nine.jpg";
import imageBasic from "../../assets/bridal.jpg";

const FineArtGallery = () => {
  const dispatch = useDispatch();
  // const galleryImages = useSelector((state) => state.portfolioGallery?.gallery);
  // console.log(galleryImages);

  // useEffect(() => {
  //   dispatch(getFineArtGallery());
  // }, []);

  const galleryImages = [
    {
      img: imageBasic,
      title: "imageBasic",
    },
    {
      img: imageOne,
      title: "imageOne",
    },
    {
      img: imageTwo,
      title: "imageTwo",
    },
    {
      img: imageThree,
      title: "imageThree",
    },
    {
      img: imageFour,
      title: "imageFour",
    },
    {
      img: imageFive,
      title: "imageFive",
    },
    {
      img: imageSix,
      title: "imageSix",
    },
    {
      img: imageSeven,
      title: "imageSeven",
    },
    {
      img: imageEight,
      title: "imageEight",
    },
    {
      img: imageNine,
      title: "imageNine",
    },
  ];

  return (
    <div>
      <Box sx={{ backgroundColor: "#ffebeb", paddingBottom: "32px" }}>
        <Box
          sx={{
            width: "75%",
            margin: "0 auto",
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
          <ImageList sx={{ width: "100%", height: "100%" }} cols={3} row="auto">
            {galleryImages.map((item, index) => (
              <ImageListItem key={index}>
                {/* <img
                  src={`http://localhost:8080/file/${item?.filename}`}
                  srcSet={`http://localhost:8080/file/${item?.filename}`}
                  // alt={item?._id}
                  loading="lazy"
                /> */}
                <img
                  src={`${item?.img}?w=164&h=164&fit=cover&auto=format`}
                  srcSet={`${item?.img}?w=164&h=164&fit=cover&auto=format&dpr=2 2x`}
                  alt={item?.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </div>
  );
};
export default FineArtGallery;
