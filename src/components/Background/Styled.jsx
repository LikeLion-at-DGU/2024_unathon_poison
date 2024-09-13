import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImagePerson = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;