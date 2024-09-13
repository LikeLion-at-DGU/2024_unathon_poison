export const choiceData = commentsData.map((data, index) => ({
  id: index,
  text:
    data.type === "NameComment"
      ? `${data.name}: ${data.comment}`
      : data.comment,
}));
