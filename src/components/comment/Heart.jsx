import React from "react";
import styled, { keyframes } from "styled-components";
import heartImage from "../../assets/component/broken_heart.png"; // 하트 이미지 경로
//이게 깨지는 하트야~~~~
// 애니메이션 정의
const dropAnimation = keyframes`
  0% {
    transform: translateY(-200px); /* 200px 위에서 시작 */
    opacity: 1; /* 시작 시 불투명도 */
  }
  100% {
    transform: translateY(0); /* 화면의 오른쪽 아래로 떨어지기 */
    opacity: 0; /* 끝 시 사라지기 */
  }
`;

// 하트 스타일 정의
const HeartWrapper = styled.div`
  position: absolute;
  bottom: 0; /* 화면 하단에 위치 */
  right: 0; /* 화면 우측에 위치 */
  transform: translateY(
    200px
  ); /* 애니메이션 시작 위치 설정 */
  width: 50px; /* 하트 이미지 크기 */
  height: 50px; /* 하트 이미지 크기 */
  background-image: url(${heartImage}); /* 하트 이미지 배경 */
  background-size: cover; /* 이미지 사이즈 조정 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
  animation: ${dropAnimation} 2s forwards; /* 애니메이션 적용 */
`;

const Heart = () => {
  return (
    <HeartWrapper />
  ); /* 스타일이 적용된 하트 컴포넌트 반환 */
};

export default Heart;
