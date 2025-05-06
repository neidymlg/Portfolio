import React from 'react';
import '../css/Home.css';
import profile from '../assets/Portfolio_Pic.jpg'; // Adjust the path as necessary 

const Home = () => {
  return (
    <div className="home-container">
      <title>Home</title>
       <div className="home-box">
         <img src={profile} alt="Profile Picture" />
       </div>
      <h1 className="home-title">Hi, I'm Neidy Malaga</h1>
      <p className="home-subtitle">A Data Analysis and Science Enthusiast</p>
      <p className="home-description">
        Welcome to my portfolio! I'm passionate about creating analyzing datasets and gleaning patterns to solve real-world problems.
        I enjoy working with common data analysis tools such as Python, R, and SQL and always strive to learn more.
      </p>
    </div>
  );
};

export default Home;
