import {useContext} from "react";
import { MemesContext } from "../MemesContext/MemesProvider";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const FilterBar = () => {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(MemesContext)
    
  return (  
    <>  
    <FlexContainer>
        <Button onClick={() => { setQuery(""); navigate("/")}}>All</Button>
        <Button onClick={() => { setQuery("search?title=cats"); navigate("/")}}>Cats</Button>
        <Button onClick={() => {setQuery("search?title=babies"); navigate("/")}}>Babies</Button>
        <Button onClick={() => { setQuery("search?title=cars"); navigate("/")}}>Cars</Button>
    </FlexContainer>
    </>
  )
}


const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'center'};
`;

const Button = styled.button`
background-color: #e061ba;
border: none;
color: #fff;
margin: 0 10px;
padding: 10px 20px;
border-radius: 4px;
font-size: 16px;
cursor: pointer;
transition: all 0.3s ease-in-out;
height: 40px;
align-items: center;

&:hover {
  background-color: #e692da;
}
`;