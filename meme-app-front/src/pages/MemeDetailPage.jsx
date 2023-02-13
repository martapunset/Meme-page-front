import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MemesContext } from "../MemesContext/MemesProvider";
import { getMemeById, getMemes } from "../api/api";

export const MemeDetailPage = () => {
  const { query, setQuery, list, setList, memesSearchData } =
    useContext(MemesContext);

  const { id } = useParams();
  const [meme, setMeme] = useState({});
  useEffect(() => {
    const memeAsync = async () => {
      const meme2 = await getMemeById(id);
      setMeme(meme2);

    };
    memeAsync();
  }, [id]);

  // const object = list.find((obj) => obj._id === id);
  // console.log(object);
  if (meme) {
    return (
      <>
        <div>MemeDetailPage</div>
        <img src={meme.url} />
      </>
    );
  } else {
    return <div>Loading</div>;
  }
};
