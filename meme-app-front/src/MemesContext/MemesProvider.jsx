
import React from "react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { searchMemes } from "../api/api";


export const MemesContext = React.createContext();

export const MemesProvider = ({ children }) => {
    const [query, setQuery] = useState("")
   // const [memesSearchData, setMemesSearchData] = useState([])
    const [list, setList] = useState([]);
    
    useEffect(() => {
        
        
        const memesAsync = async () => {
            const response = await searchMemes(query)
            setList(response)
            console.log("providerresponse",response)
       console.log("query",query)
        }
        
        if (query.length>3) memesAsync();
      }, [query]);
    
  return (
    <MemesContext.Provider
      value={{
              query,
              list,
              setQuery,
              setList

        // resetCurrentTrack,
        
        //fetchData,
      }}
    >
      {children}
    </MemesContext.Provider>
  );

}