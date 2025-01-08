import axios from "axios";
import URL from "./URL";
import data from "../data.json";

const APIProject = async () => {
  try {
    const response = await axios.get(`${URL}/project/all`);
    const data = response.data.data;

    // Kiểm tra nếu data là một mảng
    if (Array.isArray(data)) {
      return data; // Trả về mảng dự án
    } else {
      console.error("API did not return an array.");
      console.log(data.projects);
      return data.projects; // Trả về mảng rỗng nếu không phải mảng
    }
  } catch (error) {
    console.error("Error fetching project data:", error);
    return data.projects; // Trả về mảng rỗng nếu có lỗi
  }
};

export default APIProject;
