import React, { useState } from "react";
import "../css/Projects.css";

function Projects() {
  const [activePage, setActivePage] = useState("project1");

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <div className="projects-container">
    <title>My Projects</title>
      <section
        data-page="project1"
        className={activePage === "project1" ? "active" : ""}
      >
        <h1 className="project-name">Affordable Grocery Finder Website</h1>
        <p className="project-link">Github Link: <a href="https://github.com/neidymlg/CPSC-449-Grocery-Website">Grocery Website</a></p>
        <p className="project-tech">Tech Stack: React, Node.js, Typescript, MySQL, Docker</p>
        <p className="project-description">Description: This is a website that takes the user's location and uses the Krogers API to display
          food items and their prices. The point of this website is for the user to compare the prices, and select the most afforable price.
          In addition, the user will be able to group the items inside a shopping list, so as to better see their total. They can then save the order
          if they have a registered account.
        </p>
        <p className="project-challenges">Challenges: We intended to make this project display all groceries, but were unable due to time constraints
          and Use of Service issues. Instead, we had to settle with an API call. Since this was my first React website, I had issues with connecting the backend,
          but I was able to do a workaround using Vite and Sequalize. 
        </p>
        <p className="project-outcomes">Outcomes: Overall, this project did exactly what it was intended to. It provided users with a database full of 
          food items and stores, allowing them to make informed decisions about their purchases. 
        </p>
        
        <button onClick={() => handleNavigation("project2")}>Next</button>
      </section>

      <section
        data-page="project2"
        className={activePage === "project2" ? "active" : ""}
      >
        <h1 className="project-name">Task List App</h1>
        <p className="project-link">Github Link: <a href="https://github.com/neidymlg/Task_List_App">Task List App</a></p>
        <p className="project-tech">Tech Stack: Android Studio, Kotlin, SQLite</p>
        <p className="project-description">Description: This is a basic app that simply stores user's task. Using SQLite, the user is able to add, delete, and edit tasks.
          In addition, it has time-based notifications, which is useful for users that need alarms.   Ensured an efficient list with Recycler-Biew</p>
        <p className="project-challenges">Challenges: I wasn't able to figure out how to alert on newer devices, as it has a new verification system for newer devices systems, 
          so I simplified it's use for older designs.
        </p>
        <p className="project-outcomes">Outcomes: I was able to make a basic Android Task List app on a new language, Kotlin. This was my first time creating an phone applications,
          so it helped expand my understanding of SQLite and Android applications.
        </p>
        <button onClick={() => handleNavigation("project3")}>Next</button>
      </section>

      <section
        data-page="project3"
        className={activePage === "project3" ? "active" : ""}
      >
        <h1 className="project-name">Data Analysis on Penguin Dataset</h1>
        <p className="project-link">Github Link: <a href="https://github.com/neidymlg/Penguin_Data_Analysis">Penguin_Data_Analysis</a></p>
        <p className="project-tech">Tech Stack: Juptyer Notebook, Python</p>
        <p className="project-description">Description: I was able to perform ANOVA and T-test comparisons on a dataset. I then normalized and scaled the dataset, 
          and then created a Linear Regression model.</p>
        <p className="project-challenges">  Challenges: One of the main challenges was understanding the nuances of statistical tests and interpreting their results required significant research and practice. 
          Building the Linear Regression model also involved fine-tuning hyperparameters to improve its accuracy.
        </p>
        <p className="project-outcomes">  Outcomes: This project enhanced my understanding of statistical analysis and data preprocessing techniques. 
          I gained hands-on experience with ANOVA, T-tests, and regression modeling. The final analysis provided meaningful insights into the dataset, and the Linear Regression model achieved a reasonable level of accuracy in predicting measurements.
        </p>
        <button onClick={() => handleNavigation("project4")}>Next</button>
      </section>

      <section
        data-page="project4"
        className={activePage === "project4" ? "active" : ""}
      >
        <h1 className="project-name">Data Analysis on Multple Dataset</h1>
        <p className="project-link">Github Link: <a href="https://github.com/neidymlg/LC_Data_Analysis">LC_Data_Analysis</a></p>
        <p className="project-tech">Tech Stack: PostgreSQL</p>
        <p className="project-description">Description: This is a SQL data analysis conducted on Postgresql. This data analysis involves probability 
          formulas such as Bayes Theroem and Conditional Probability in order to gauge what the probability is for having a condition and Lung Cancer and etc. 
          In addition, I have included an additional SQL file that details the basics of SQL commands
        </p>
        <p className="project-challenges">Challenges: This is a project that was done when I was new to SQL in general. As such, it was challending to work with CTEs and subqueries, 
          but I did eventually become accustomed to it.</p>
        <p className="project-outcomes">Outcomes: Based on my findings, the data might be biased, as there is a high chance of having a somewhat unrelated condition 
          and Lung Cancer. This is probably due to the fact that this data contains equal amount of patients who do not have lung cancer and who do have lung cancer.
        </p>
        <button onClick={() => handleNavigation("project1")}>Next</button>
      </section>
    </div>
  );
}

export default Projects;