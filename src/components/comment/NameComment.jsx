import React from "react";
import * as S from "./style";
import CommentBgWrapper from "./CommentBg";

const NameComment = ({ name, comment }) => {
  return (
    <CommentBgWrapper>
      <S.NameCommentWrapper>
        <S.NameCommentContainer>
          <S.Name>{name}</S.Name>
          <S.Comment>{comment}</S.Comment>
        </S.NameCommentContainer>
      </S.NameCommentWrapper>
    </CommentBgWrapper>
  );
};

export default NameComment;
