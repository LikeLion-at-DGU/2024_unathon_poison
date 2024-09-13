import React from "react";
import styled from "styled-components";

const CommentBg = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  max-width: 767px;
  display: flex;
`;

const CommentBgWrapper = ({ children }) => {
  return <CommentBg>{children}</CommentBg>;
};

export default CommentBgWrapper;
