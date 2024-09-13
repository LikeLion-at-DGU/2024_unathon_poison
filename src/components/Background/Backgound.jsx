import * as S from "./Styled";
import { BGS } from "../../datas/Backgrounds/data";
import { CHANS, DONGS, JUNGS, OHS } from "../../datas/persons/data";
import { useState, useEffect } from "react";

const BackgroundWithPerson = () => {
  const [backgroundId, setBackgroundId] = useState(null);
  const [personGroup, setPersonGroup] = useState(null); // API에서 받는 그룹 값 (idg, jjy, otj, ocj)
  const [personId, setPersonId] = useState(null); // API에서 받는 사람 ID 값

  const GetBackgroundAndPerson = async () => {
    // 실제 API 호출
    // try {
    //   const response = await API.get(""); 
    //   setBackgroundId(response.data.backgroundId); // 배경 이미지 ID
    //   setPersonGroup(response.data.group); // idg, jjy, otj, ocj 등의 그룹값
    //   setPersonId(response.data.personId); // 해당하는 사람 ID
    // } catch (error) {
    //   console.error(error);
    // }

    // 더미 데이터로 테스트 (idg, jjy, otj, ocj와 번호)
    const dummyResponse = { 
      backgroundId: 2, 
      group: 'idg',
      personId: 5
    };

    setBackgroundId(dummyResponse.backgroundId);
    setPersonGroup(dummyResponse.group);
    setPersonId(dummyResponse.personId);
  };

  useEffect(() => {
    GetBackgroundAndPerson();
  }, []);

  // 배경 이미지 선택
  const selectedBackground = BGS.find(bg => bg.id === backgroundId);

  // 사람 이미지 선택
  let selectedPerson = null;
  if (personGroup === 'idg') {
    selectedPerson = DONGS.find(person => person.id === personId);
  } else if (personGroup === 'jjy') {
    selectedPerson = JUNGS.find(person => person.id === personId);
  } else if (personGroup === 'otj') {
    selectedPerson = OHS.find(person => person.id === personId);
  } else if (personGroup === 'ocj') {
    selectedPerson = CHANS.find(person => person.id === personId);
  }

  return (
    <S.Wrapper>
      {selectedBackground ? (
        <S.Image src={selectedBackground.src} alt={`Background ${backgroundId}`} />
      ) : (
        <p>백그라운드 불러오는중</p>
      )}

      {selectedPerson ? (
        <S.ImagePerson src={selectedPerson.src} alt={`Person ${personId}`} />
      ) : (
        <p>사람 불러오는 중</p>
      )}
    </S.Wrapper>
  );
};

export default BackgroundWithPerson;
