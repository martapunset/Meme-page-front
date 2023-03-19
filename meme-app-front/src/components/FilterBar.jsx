import { useContext } from "react";
import { MemesContext } from "../MemesContext/MemesProvider";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const FilterBar = (props) => {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(MemesContext);

  return (
    <>
      <FlexContainer direction={props.direction} justify={props.justify}>
        <Button
          onClick={() => {
            setQuery("");
            navigate("/");
          }}
        >
          All
        </Button>
        <Button
          onClick={() => {
            setQuery("cats");
            navigate("/");
          }}
        >
          Cats
        </Button>
        <Button
          onClick={() => {
            setQuery("babies");
            navigate("/");
          }}
        >
          Babies
        </Button>
        <Button
          onClick={() => {
            setQuery("cars");
            navigate("/");
          }}
        >
          Cars
        </Button>
      </FlexContainer>
    </>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "center"};
  @media (max-width: 1248px) {
    display: none;
  }
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
  width: 100px;
  align-items: center;

  &:hover {
    background-color: #e692da;
  }
`;
