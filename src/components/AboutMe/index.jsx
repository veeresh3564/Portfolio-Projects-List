import "./index.css";

const AboutMe = () => (
  <div className="about">
    <p className="paragraph">Get To Know More</p>
    <h1 className="heading">About Me</h1>
    <div className="main-container">
      <div className="about-img">
        <img
          src="https://res.cloudinary.com/dqhk94co9/image/upload/v1685881421/20230604_175113_sgpdh0.jpg"
          alt="Profile picture"
          className="about-pic"
        />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img
              src="https://res.cloudinary.com/dqhk94co9/image/upload/v1685881421/20230604_175113_sgpdh0.jpg"
              alt="Experience icon"
              className="icon"
            />
            <h3>Experience</h3>
            <p>
              8+ Months <br />
              Nxt Wave 4.O Student
            </p>
          </div>
          <div className="details-container">
            <img
              src="https://res.cloudinary.com/dqhk94co9/image/upload/v1685880976/education_df4q1n.png"
              alt="Education icon"
              className="icon"
            />
            <h3>Education</h3>
            <p>B.Sc. Bachelors Degree </p>
            <p>Anantapuram (AP)</p>
          </div>
        </div>
        <div className="text-container">
          <p>
            I started learning because I have a strong passion for full stock
            developer and wanted to inspire others to start full stock
            developer, too. I decided to take matters into my own hands and
            start my own . Since I started 10/09/2022 to learning. it’s quickly
            become one of the most popular marketing platforms online
            <snap className="nxt">[NXT WAVE]</snap>.I’ve been here at full stock
            developer my goal is to help you achieve your full stock developer
            dreams.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
