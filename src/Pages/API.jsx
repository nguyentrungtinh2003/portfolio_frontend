import axios from "axios";
import URL from "./URL";
import data from "../data.json";

const API = async () => {
  const userID = parseInt(localStorage.getItem("userID"));
  try {
    const response = await axios.get(`${URL}/user/${userID ? userID : 2}`);
    return response.data.data; // Trả về dữ liệu người dùng
  } catch (error) {
    console.error("Error fetching user data:", error);
    console.log(data.users);
    return data.users.find((user) => user.id == (userID ? userID : 2)); // Trả về null nếu có lỗi
  }
};

export default API;
