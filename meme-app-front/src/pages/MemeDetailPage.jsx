import React from 'react'
import { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom"
import { MemesContext } from '../MemesContext/MemesProvider';
import { getMemeById, getMemes } from '../api/api';
export const MemeDetailPage = () => {
  const { query, setQuery ,list, setList, memesSearchData} = useContext(MemesContext)
  
  const { id } = useParams();
  /*
  useEffect(() => {
    const memeAsync = async () => {
      const meme = await getMemeById(id)
        console.log(meme)    
    }
memeAsync()
  },[])
     */
   
  const object = list.find(obj => obj._id === id);
  console.log(object)

  return (
    <>
      <div>MemeDetailPage</div>
      <img     src={object?.url} />


</>


  )
}

