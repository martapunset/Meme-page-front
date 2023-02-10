import {useContext} from "react";
import { MemesContext} from "../MemesContext/MemesProvider";

export const FilterBar = () => {
    //const { loginWithRedirect } = useAuth0();
    const { query, setQuery } = useContext(MemesContext)
    
  return (
    <>
          <button onClick={() => setQuery("cats")}>Cats</button>
          <button onClick={() => setQuery("babies")}>Babies</button>
          <button onClick={() => setQuery("cars")}>Cars</button>
         
    </>
  )
}