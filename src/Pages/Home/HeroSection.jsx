import { useEffect, useState } from "react";
import API from "../API";
export default function HeroSection() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await API();
      setUser(userData);
    };

    fetchUser();
  }, []);
  if (!user) {
    return <p>Loading...</p>; // Hoặc giao diện chờ
  }
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h2 className="">{user.fullName}</h2>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{user.position}</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            <p>
              Born in {user.birthDay} in the vibrant city of {user.address},
              currently pursuing a degree at the prestigious {user.university}{" "}
              in IT.
            </p>
            <p>
              Feel free to connect: Email: {user.email} | Phone:{" "}
              {user.phoneNumber}
            </p>
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={user.img} alt="Hero Section" />
      </div>
    </section>
  );
}
