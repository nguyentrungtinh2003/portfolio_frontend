import React, { useState } from "react";
import axios from "axios";
import URL from "./URL";

const SendEmailForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  // Xử lý gửi email
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Đảm bảo form không rỗng
    if (!email || !subject || !text) {
      setMessage("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Tạo payload
    const payload = {
      email,
      subject,
      text,
    };

    try {
      // Gửi yêu cầu POST đến API
      await axios.post(`${URL}/email/send`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Thông báo thành công
      setMessage("Email đã được gửi thành công!");
      setEmail("");
      setSubject("");
      setText("");
    } catch (error) {
      setMessage("Có lỗi xảy ra khi gửi email.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="sendmail"
      className="container"
      style={{ marginTop: "50px", maxWidth: "600px" }}
    >
      <h3 className="text-center mb-4">Gửi Email</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Địa chỉ Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập địa chỉ email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Chủ đề</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Nhập chủ đề"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Nội dung</label>
          <textarea
            className="form-control"
            id="text"
            rows="4"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nhập nội dung email"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Gửi Email
        </button>
      </form>

      {message && (
        <div className="mt-3 alert-success">
          <p>{message}</p>
        </div>
      )}
    </section>
  );
};

export default SendEmailForm;
