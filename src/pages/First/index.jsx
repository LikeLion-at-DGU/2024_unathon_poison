import React, { useState } from "react";
import NameComment from "../../components/comment/NameComment";
import Comment from "../../components/comment/Comment";
import Choice from "../../components/comment/Choice";
import { commentsData } from "../../data/comment";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChoice, setShowChoice] = useState(true);

  const handleSelect = (id) => {
    setCurrentIndex(id);
    setShowChoice(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
  };

  const handleTouch = () => {
    handleNext();
  };

  React.useEffect(() => {
    window.addEventListener("click", handleTouch);

    return () => {
      window.removeEventListener("click", handleTouch);
    };
  }, []);

  const currentData = commentsData[currentIndex];

  return (
    <div>
      {showChoice ? (
        <Choice onSelect={handleSelect} />
      ) : currentData.type === "NameComment" ? (
        <NameComment name={currentData.name} comment={currentData.comment} />
      ) : (
        <Comment comment={currentData.comment} />
      )}
    </div>
  );
};

export default Index;
