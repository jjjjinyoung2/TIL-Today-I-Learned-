import { React } from "react";
import { useNavigate } from "react-router-dom";
const FaqStyled = styled.div``;
const FAQ = () => {
  const navigate = useNavigate();
  return (
    <FaqStyled>
      <div>여기는 예약페이지</div>
    </FaqStyled>
  );
};
export default FAQ;
