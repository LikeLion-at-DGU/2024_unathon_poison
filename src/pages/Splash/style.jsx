import styled from "styled-components";

// 전체 페이지를 감싸는 컨테이너 스타일
export const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${({ $backgroundImage }) =>
    `url(${$backgroundImage})`};
  background-size: cover;
  background-position: center;
`;
