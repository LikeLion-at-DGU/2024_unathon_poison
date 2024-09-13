import React from "react";
import * as S from "./style";

const Choice = ({ q1, q2, onSelect }) => {
  const handleSelect = (choice) => {
    console.log("선택한 것: ", choice);
    onSelect(choice);
  };

  return (
    <S.ChoiceWrapper>
      <S.ChoiceContainer>
        <S.Qbox>
          <S.Q onClick={() => handleSelect(q1)}>{q1}</S.Q>
          <S.Q onClick={() => handleSelect(q2)}>{q2}</S.Q>
        </S.Qbox>
      </S.ChoiceContainer>
    </S.ChoiceWrapper>
  );
};

export default Choice;
