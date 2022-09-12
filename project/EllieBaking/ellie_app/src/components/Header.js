import { React } from "react";
import { Link } from "react-router-dom";
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
  .navbar_toggleBtn {
    display: none;
    position: absolute;
    right: 32px;
    font-size: 24px;
  }
  //반응형
  @media screen and (max-width: 768px) {
    .navbar {
      flex-direction: column; //방향 세로로
      align-items: flex-start; //로고만 왼쪽으로
      padding: 8px 24px;
    }
    .navbar_menu {
      /* display: none; */
      flex-direction: column; //방향 세로로
      align-items: center;
      width: 100%;
    }
    .navbar_menu li {
      width: 100%;
      text-align: center;
    }
    .navbar_icons {
      /* display: none; */
      justify-content: center;
      width: 100%;
    }
    .navbar_toggleBtn {
      display: block;
    }
  }
`;

const Header = () => {
  // const [navbar_ToggleBtn, setNavbar_ToggleBtn] = useState(false);

  // const toggleBtn = document.querySelector(".navbar_toggleBtn");
  // const menu = document.querySelector(".navbar_menu");
  // const icons = document.querySelector(".navbar_icons");
  // toggleBtn.addEventListener("click", () => {
  //   menu.classList.toggle("active");
  //   icons.classList.toggle("active");
  // });
  return (
    <HeaderStyled>
      <nav className="navbar">
        <div className="navbar_logo">
          <FontAwesomeIcon icon={faBreadSlice} />
          <Link to="/">
            <span> Ellie's Baking</span>
          </Link>
        </div>
        <ul className="navbar_menu">
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/Bookings">Bookings</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
        </ul>
        <ul className="navbar_icons">
          <li>
            <a href="https://www.instagram.com/ellie__baking/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://pf.kakao.com/_QxoxoExj">
              <FontAwesomeIcon icon={faComment} />
            </a>
          </li>
        </ul>
        <Link
          to="#"
          className="navbar_toggleBtn"
          // onClick={() => {
          //   setNavbar_ToggleBtn(!navbar_ToggleBtn);
          // }}
        >
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
