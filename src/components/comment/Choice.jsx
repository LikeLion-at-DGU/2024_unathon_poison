import React from "react";
import * as S from "./style";
import { choiceData } from "../../data/choiceData";

const Choice = ({ onSelect }) => {
  return (
    <S.ChoiceWrapper>
      <S.ChoiceContainer>
        <S.Qbox>
          {choiceData.map((choice) => (
            <S.Q key={choice.id} onClick={() => onSelect(choice.id)}>
              {choice.text}
            </S.Q>
          ))}
        </S.Qbox>
      </S.ChoiceContainer>
    </S.ChoiceWrapper>
  );
};

export default Choice;
