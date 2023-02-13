import {useContext} from "react";
import { MemesContext} from "../MemesContext/MemesProvider";

export const FilterBar = () => {
  
    const { query, setQuery } = useContext(MemesContext)
    
  return (
    <>           <button onClick={() => setQuery("")}>All</button>
          <button onClick={() => setQuery("cats")}>Cats</button>
          <button onClick={() => setQuery("babies")}>Babies</button>
          <button onClick={() => setQuery("cars")}>Cars</button>
         
    </>
  )
}