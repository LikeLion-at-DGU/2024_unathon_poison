import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 import합니다.
import { Wrapper, Button } from "./style";

const Index = () => {
  const navigate = useNavigate(); // navigate 함수 선언

  // 버튼 클릭 핸들러
  const handleClick = () => {
    navigate("/splash"); // /splash 경로로 이동
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>게임 시작</Button>
      {/* 버튼 추가 */}
    </Wrapper>
  );
};

export default Index;
