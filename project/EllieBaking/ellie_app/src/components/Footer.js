import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FooterStyled = styled.div`
  .footer {
    position: absolute;
    bottom: 0;
    left: 700px;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <footer>
        <div className="footer">
          @2022 Copyright
          <a href="https://www.instagram.com/jjjjin_young/">jjjjinyoung</a>
        </div>
      </footer>
    </FooterStyled>
  );
};
export default Footer;
