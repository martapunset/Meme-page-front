import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";
import { getMemes } from "../api/api";
import { useEffect, useContext } from "react";
import { useState } from "react";
import { MemesContext } from "../MemesContext/MemesProvider";
import { Link } from "react-router-dom";

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
    <ImageList variant="quilted" cols={3}>
      {list.map((item) => (
        <Link to={"/meme/" + item?._id}>
          <ImageListItem key={item?._id}>
            <img
              src={`${item?.url}?w=480&h=268&fit=crop&auto=format`}
              alt={item?.title}
              loading="lazy"
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
};
