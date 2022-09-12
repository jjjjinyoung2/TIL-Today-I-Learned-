import { React } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const galleryStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;
`;

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <galleryStyled>
        <div>여기는 갤러리</div>
      </galleryStyled>
    </>
  );
};
export default Gallery;
