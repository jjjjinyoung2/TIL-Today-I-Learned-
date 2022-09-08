import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  .main-title {
    color: #1c362a;
    font-size: 50px;
    display: flex;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="main-title">
        <h1>Ellie's Bagking</h1>
        <div>Shop</div>
        <div>Shop</div>
        <div>Shop</div>
        <div>Shop</div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
