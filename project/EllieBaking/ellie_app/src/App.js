import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const Style = styled.div`
  .main-container {
    background-color: #1c362a;
    height: 100vh;
  }
`;
const App = () => {
  return (
    <BrowserRouter>
      <Style>
        <div className="app">
          <Header />
          <div className="main-container"></div>
          <Footer />
        </div>
      </Style>
    </BrowserRouter>
  );
};

export default App;
