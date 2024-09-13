import React, { useState, useEffect } from "react";
import NameComment from "../../components/comment/NameComment";
import Comment from "../../components/comment/Comment";
import Choice from "../../components/comment/Choice";
import { commentsData } from "../../data/comment";
import { postChoiceData } from "../../apis/api/postChoice";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
  };

  const handleChoiceSelect = async (choice) => {
    try {
      await postChoiceData(choice);
      handleNext();
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
  }, []);

  const currentData = commentsData[currentIndex];

  return (
    <div>
      {currentData.type === "NameComment" ? (
        <NameComment name={currentData.name} comment={currentData.comment} />
      ) : currentData.type === "Comment" ? (
        <Comment comment={currentData.comment} />
      ) : currentData.type === "Choice" ? (
        <Choice
          q1={currentData.q1}
          q2={currentData.q2}
          onSelect={handleChoiceSelect}
        />
      ) : null}
    </div>
  );
};

export default Index;
