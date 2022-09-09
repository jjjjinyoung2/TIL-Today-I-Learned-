import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice, faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const HeaderStyled = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
  .navbar {
    display: flex; //일렬로
    justify-content: space-between; //배치 양끝 가운데
    align-items: center; //세로축 가운데로
    background-color: #1c362a;
    padding: 8px 12px;
  }
  .navbar_logo {
    font-size: 24px;
    color: white;
  }
  .navbar_menu {
    display: flex; //일렬로
    list-style: none; //리스트 점 없애기
    padding-left: 0; //왼쪽 패딩 없애서 가운데로
  }
  .navbar_menu li {
    padding: 8px 12px; //클릭할 수 있는 범위 늘려주기
  }
  .navbar_menu li:hover {
    background-color: #284f3d;
    border-radius: 4px;
  }
  .navbar_icons {
    display: flex;
    color: white;
    list-style: none;
    padding-left: 0;
  }
  .navbar_icons li {
    padding: 8px 12px;
  }
  //반응형
  @media screen and (max-width: 768px) {
    .navbar {
      flex-direction: column; //방향 세로로
      align-items: flex-start; //로고만 왼쪽으로
      padding: 8px 24px;
    }
    .navbar_menu {
      flex-direction: column; //방향 세로로
      align-items: center;
      width: 100%;
    }
    .navbar_menu li {
      width: 100%;
      text-align: center;
    }
    .navbar_icons {
      justify-content: center;
      width: 100%;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <nav className="navbar">
        <div className="navbar_logo">
          <FontAwesomeIcon icon={faBreadSlice} />
          <a href=""> Ellie's Baking</a>
        </div>
        <ul className="navbar_menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">Bookings</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
        <ul className="navbar_icons">
          <li>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faComment} />
            </a>
          </li>
        </ul>
        <a href="" className="navbar_toggleBtn">
          <FontAwesomeIcon icon={faBars} />
        </a>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
