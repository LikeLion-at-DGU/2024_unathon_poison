import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NameComment from "../../components/comment/NameComment";
import Comment from "../../components/comment/Comment";
// import BgImg from "../../components/BgImg";
import { firstData } from "../../data/firstData";

const Result = () => {
  const location = useLocation();
  const { choice } = location.state || {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    console.log("choice: ", choice);
    if (choice === "1. 아기 고양이") {
      setCurrentData(firstData[0]);
    } else if (choice === "2. 곰돌이") {
      setCurrentData(firstData[1]);
    }
    setCurrentIndex(0);
  }, [choice]);

  useEffect(() => {
    // 클릭 이벤트 핸들러
    const handleClick = () => {
      handleNext();
    };

    // 문서에 클릭 이벤트 리스너 추가
    document.addEventListener("click", handleClick);

    // 컴포넌트 언마운트 시 클릭 이벤트 리스너 제거
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [currentData]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentData.length);
  };

  // 현재 데이터
  const currentCommentData = currentData[currentIndex];

  return (
    <div>
      {/* {currentCommentData?.bgNum && <BgImg bgNum={currentCommentData.bgNum} />} */}
      {currentCommentData?.type === "NameComment" ? (
        <NameComment
          name={currentCommentData.name}
          comment={currentCommentData.comment}
        />
      ) : currentCommentData?.type === "Comment" ? (
        <Comment comment={currentCommentData.comment} />
      ) : null}
    </div>
  );
};

export default Result;
