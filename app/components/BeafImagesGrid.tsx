import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import { Counter } from "yet-another-react-lightbox/plugins";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

export const BeafImagesGrid = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(-1);
  const slides = itemData.map(({ img, title, date }) => ({
    src: img,
    width: 1000,
    height: 800,
    title,
    date,
  }));

  const slideshowRef = React.useRef(null);
  return (
    <Box
      mt={5}
      sx={{
        width: "90%",
        height: "90%",
        ml: 2,

        padding: "2px",
      }}
    >
      <PhotoAlbum
        layout="rows"
        photos={slides}
        padding={2}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={{ position: "relative", ...wrapperStyle }}>
            <Box
              style={{
                position: "absolute",
                overflow: "hidden",
                backgroundColor: "#2b3033",
                color: "white",
                inset: "10 0 0 0",
                padding: 4,
                marginTop: 10,
              }}
            >
              {photo.date}
            </Box>
            {renderDefaultPhoto({ wrapped: true })}
            {photo.title && (
              <Box>
                <Box
                  style={{
                    position: "absolute",
                    overflow: "hidden",
                    backgroundColor: "rgba(255 255 255 / .6)",
                    inset: "auto 0 0 0",
                    padding: 8,
                  }}
                >
                  {photo.title}
                </Box>
              </Box>
            )}
          </div>
        )}
        targetRowHeight={150}
        spacing={5}
        onClick={({ index }) => setIndex(index)}
      />
      {/* <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        slideshow={{ ref: slideshowRef }}
        plugins={[Counter]}
      /> */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "https://picsum.photos/id/237/1800/1200" },
          { src: "https://picsum.photos/id/238/1800/1200" },
          { src: "https://picsum.photos/id/239/1800/1200" },
        ]}
        plugins={[Thumbnails]}
      />
      {/* <ImageList
        sx={{
          maxHeight: "100vh",
          "&scrollbar": {
            borderRadius: "10px",
          },
        }}
        cols={5}
        gap={6}
        rowHeight={260}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => setIndex(index)}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                backgroundColor: "#f2f2f2",
                "& .MuiImageListItemBar-titleWrap": {
                  ml: "30px",
                },
                "& 	.MuiImageListItemBar-title": {
                  fontWeight: "bold",
                },
              }}
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            ></ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      /> */}
    </Box>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    date: "September 16, 2018",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    date: "September 16, 2018",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    date: "September 16, 2018",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    date: "September 16, 2018",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    date: "September 16, 2018",

    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    date: "September 16, 2018",

    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    date: "September 16, 2018",

    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    date: "September 16, 2018",

    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    date: "September 16, 2018",

    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    date: "September 16, 2018",

    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    date: "September 16, 2018",

    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    date: "September 16, 2018",

    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    date: "September 16, 2018",

    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    date: "September 16, 2018",

    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    date: "September 16, 2018",

    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    date: "September 16, 2018",

    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    date: "September 16, 2018",

    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    date: "September 16, 2018",

    author: "@southside_customs",
    cols: 2,
  },
];

// width: "100%",
// maxWidth: "100%",
// height: 450,
