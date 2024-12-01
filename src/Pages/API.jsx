import axios from "axios";
import URL from "./URL";

const API = async () => {
  try {
    const response = await axios.get(`${URL}/user/byName/Trung Tinh`);
    return response.data.data; // Trả về dữ liệu người dùng
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null; // Trả về null nếu có lỗi
  }
};

export default API;
