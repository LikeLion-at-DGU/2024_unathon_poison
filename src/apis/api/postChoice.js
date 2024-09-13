import { API } from "../utils";
export const postChoiceData = async ({ choice }) => {
  try {
    const response = await API.post("", {
      choice: choice,
    });
    return response.data;
  } catch (error) {
    console.log("api 실패다");
  }
};