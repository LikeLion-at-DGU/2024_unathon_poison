import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 300px;
`;
export const Button = styled.button`
  font-size: 24px; /* 글씨 크기 조정 */
  padding: 10px 20px; /* 패딩 추가 */
  background-color: #007bff; /* 버튼 배경색 */
  color: white; /* 글씨 색상 */
  border: none; /* 기본 테두리 제거 */
  border-radius: 5px; /* 테두리 둥글게 */
  cursor: pointer; /* 커서 모양 변경 */
  transition: background-color 0.3s ease; /* 배경색 변화 효과 */

  &:hover {
    background-color: #0056b3; /* 호버 시 배경색 변화 */
  }
`;
