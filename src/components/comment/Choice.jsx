import React from "react";
import * as S from "./style";

const Choice = ({ q1, q2 }) => {
  return (
    <S.ChoiceWrapper>
      <S.ChoiceContainer>
        <S.Qbox>
          <S.Q>{q1}</S.Q>
          <S.Q>{q2}</S.Q>
        </S.Qbox>
      </S.ChoiceContainer>
    </S.ChoiceWrapper>
  );
};

export default Choice;
