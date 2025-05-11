import '../css/Skills.css';

const Skills = () => {
    return (
        <div className="skills-container">
        <title>My Skills</title>
            <p className="skills-description">Technical Skills</p>
            <div className="skills-grid">
                <div className="skills-item">Python</div>
                <div className="skills-item">R-studio</div>
                <div className="skills-item">SQL/SQLite</div>
                <div className="skills-item">Excel</div>
                <div className="skills-item">Tableau</div>
                <div className="skills-item">C++</div>
                <div className="skills-item">Java/Kotlin</div>
                <div className="skills-item">HTML/CSS/JS</div>
            </div>
            <p className="skills-description">Soft Skills</p>
            <div className="skills-grid">
                <div className="skills-item">Problem Solving</div>
                <div className="skills-item">Analytical Thinking</div>
                <div className="skills-item">Attention to Detail</div>
                <div className="skills-item">Teamwork</div>
                <div className="skills-item">Adaptability</div>
                <div className="skills-item">Communication</div>
                <div className="skills-item">Spanish</div>
            </div>
        </div>
    );
};

export default Skills;
