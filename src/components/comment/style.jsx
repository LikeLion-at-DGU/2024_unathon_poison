import styled from "styled-components";

export const NameCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameCommentContainer = styled.div`
  width: 80%;
  border: 3px solid blue;
  background-color: white;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 30px;
  padding-left: 20px;
`;

export const Name = styled.div`
  font-weight: bold;
`;

export const Comment = styled.div``;

export const SingleCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SingleComment = styled.div`
  color: white;
  font-size: 23px;
`;

//choice.jsx

export const ChoiceWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  position: relative;
  max-width: 767px;
  margin: 0 auto;
`;

export const ChoiceContainer = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 767px;
  width: 100%;
`;

export const Qbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const Q = styled.div`
  width: 80%;
  border: 3px solid blue;
  border-radius: 30px;
  background-color: white;
  padding: 15px;
  cursor: pointer;
  text-align: center;
`;
