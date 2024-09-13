import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NameComment from "../../components/comment/NameComment";
import Comment from "../../components/comment/Comment";
import Choice from "../../components/comment/Choice";
import { commentsData } from "../../data/comment";
import { postChoiceData } from "../../apis/api/postChoice";
import { firstData } from "../../data/firstData";
import Background from "../../components/Background/Backgound";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentData, setCurrentData] = useState(commentsData);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // 댓글 및 선택지 이동 핸들러
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentData.length);
  };

  // 선택지 선택 핸들러
  const handleChoiceSelect = async (choice) => {
    try {
      await postChoiceData({ choice });
      setSelectedChoice(choice);

      // 선택에 따라 firstData에서 데이터 변경
      const newData = choice === "q1" ? firstData[0] : firstData[1];
      setCurrentData(newData);

      // 선택에 따른 페이지 이동
      navigate("/result", { state: { choice } });
    } catch (error) {
      console.log("에러다");
    }
  };

  useEffect(() => {
    const handleTouch = () => {
      handleNext();
    };

    window.addEventListener("click", handleTouch);

    return () => {
      window.removeEventListener("click", handleTouch);
    };
  }, [currentData]); // Add currentData as dependency to handle changes properly

  // 현재 데이터
  const currentCommentData = currentData[currentIndex];

  return (
    <div>
      <Background />
      {currentCommentData?.type === "NameComment" ? (
        <NameComment
          name={currentCommentData.name}
          comment={currentCommentData.comment}
        />
      ) : currentCommentData?.type === "Comment" ? (
        <Comment comment={currentCommentData.comment} />
      ) : currentCommentData?.type === "Choice" ? (
        <Choice
          q1={currentCommentData.q1}
          q2={currentCommentData.q2}
          onSelect={handleChoiceSelect}
        />
      ) : null}
    </div>
  );
};

export default Index;
