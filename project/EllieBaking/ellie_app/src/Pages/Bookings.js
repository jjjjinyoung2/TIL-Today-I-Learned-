import { React } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const BookingStyled = styled.div``;
const Bookings = () => {
  const navigate = useNavigate();
  return (
    <BookingStyled>
      <div>여기는 예약페이지</div>
    </BookingStyled>
  );
};
export default Bookings;
