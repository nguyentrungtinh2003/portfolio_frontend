import axios from "axios";
import URL from "./URL";

const API = async () => {
  const userID = parseInt(localStorage.getItem("userID"));
  try {
    const response = await axios.get(`${URL}/user/${userID ? userID : 2}`);
    return response.data.data; // Trả về dữ liệu người dùng
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null; // Trả về null nếu có lỗi
  }
};

export default API;
