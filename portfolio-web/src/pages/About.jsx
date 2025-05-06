import React from 'react';
import '../css/About.css';
import resume from '../assets/Neidy_Malaga\'s_Resume.jpg';

const About = () => {
    return (
        <section className="about-container">
            <title>About Me</title>
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
                I am a student in <span>California State University Fullerton</span> pursuing a degree in Computer Science.
                In my time as a student, I have been exposed to various aspects of computer science, such that I have
                developed a strong foundation in programming. 
            </p>
            <p className="about-description">
                This exposure has led to my passion in data analysis and science, where I enjoy working with datasets to extract meaningful insights.
                I have experience with various data analysis tools, techniques, and machine learning algorithms.         
            </p>
            <ol className="about-skill-list">
                <li>Python</li>
                <li>R-studio</li>
                <li>SQL</li>
                <li>Excel</li>
                <li>Tableau</li>
            </ol>
            <p className="about-description">
                I enjoy tackling complex problems and analyzing data. Even when the data is messy, I find it rewarding to clean and transform it into a format that can be used for analysis.
                I am particularly interested in machine learning and database creation and its applications in data analysis.
                Additionally, I do have an interest in other facets of computer science, such as web and mobile app development. 
            </p>
            <ol className="about-skill-list">
                <li>Machine Learning</li>
                <li>Database Creation</li>
                <li>Web Development</li>
                <li>Android Development</li>
            </ol>

            <a href={resume} download>
                <img src={resume} alt="Resume" className="resume-image" />
            </a>
        </section>
    );
};

export default About;