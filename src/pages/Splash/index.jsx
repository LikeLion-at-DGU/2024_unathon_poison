import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SplashContainer } from "./style";
import s1 from "../../assets/splash/splash1.png";
import s2 from "../../assets/splash/splash2.png";
import s3 from "../../assets/splash/splash3.png";

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0); // 현재 이미지 인덱스를 관리하는 상태
  const navigate = useNavigate();

  // import한 이미지 객체를 배열로 설정
  const images = [s1, s2, s3];

  // 터치 시 이미지 변경 핸들러
  const handleTouch = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage((prevImage) => prevImage + 1); // 다음 이미지로 변경
      console.log("이미지 변경됨:", currentImage + 1); // 변경된 이미지 로그 출력
    } else {
      navigate("/"); // 마지막 이미지 후 특정 경로로 이동
    }
  };

  return (
    <SplashContainer
      $backgroundImage={images[currentImage]} // 현재 배경 이미지 설정
      onClick={handleTouch} // 터치 시 이미지 변경
    ></SplashContainer>
  );
};

export default Index;
