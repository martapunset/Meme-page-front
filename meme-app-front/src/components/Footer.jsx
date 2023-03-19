import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #F9D5E5;
  color: #423143;
  font-size: 14px;
  padding: 10px;
  width: 100%;
`;
export const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Memeow App</p>
      <p>Created by Marta Punset</p>
    </FooterContainer>
  );
};

