import axios from "axios";

const BaseURL = 'https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID';

export const Fetch = async(url) => {
    const {data} = await axios.get(`${BaseURL}=${url}`);
    return data;
}
