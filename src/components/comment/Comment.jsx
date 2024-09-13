import React from "react";
import * as S from "./style";
import CommentBgWrapper from "./CommentBg";

const Comment = ({ comment }) => {
  return (
    <CommentBgWrapper>
      <S.NameCommentWrapper>
        <S.SingleComment>{comment}</S.SingleComment>
      </S.NameCommentWrapper>
    </CommentBgWrapper>
  );
};

export default Comment;
