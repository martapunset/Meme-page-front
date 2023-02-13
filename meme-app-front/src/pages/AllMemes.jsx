import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import { getMemes } from "../api/api";
import { useEffect, useContext } from "react";
import { MemesContext } from "../MemesContext/MemesProvider";
import { Link } from "react-router-dom";
import "./AllMemes.css"
export const AllMemes = () => {
  const { query, setQuery, list, setList } = useContext(MemesContext);

  useEffect(() => {
    let mounted = true;
    getMemes().then((items) => {
      if (mounted && query == "") {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, [query]);
  return (
    <>
      <h2>Your uploads </h2>
    <ImageList  cols={3}  gap={10}>
      {list.map((item) => (
        <Link to={"/meme/" + item?._id} style={{ textDecoration: 'none' }}>
          <ImageListItem key={item?._id}>
            <img
              src={`${item?.url}?w=480&h=268&fit=crop&auto=format`}
              alt={item?.title}
              loading="lazy"
            />
             <ImageListItemBar  sx={{
                background:
                  'black',
              }}position="below" title={item?.title} />
          </ImageListItem>
        </Link>
      ))}
      </ImageList>
      </>
  );
};



