import axios from "axios";
import URL from "./URL";
import data from "../data.json";
import { ToastContainer, toast, Slide } from "react-toastify";

const API = async () => {
  const loadingToast = toast.info("Loading data ...", {
    position: "top-right",
    autoClose: false, // Không tự động đóng để giữ thông báo loading lâu hơn
    transition: Slide,
  });

  const userID = parseInt(localStorage.getItem("userID"));

  try {
    const response = await axios.get(`${URL}/user/${userID ? userID : 2}`);

    // Cập nhật thông báo toast khi dữ liệu đã được tải thành công
    toast.update(loadingToast, {
      render: "Data loaded successfully!",
      type: "success",
      autoClose: 3000,
    });

    return response.data.data; // Trả về dữ liệu người dùng
  } catch (error) {
    console.log(data.users);

    // Cập nhật thông báo toast khi dữ liệu được load từ data giả
    toast.update(loadingToast, {
      render: "Data loaded successfully !",
      type: "success",
      autoClose: 3000,
    });

    return data.users.find((user) => user.id == (userID ? userID : 2)); // Trả về user giả nếu có lỗi
  }
};

export default API;
