import "../css/Contact.css";
import github_logo from "../assets/Github_Logo.png";
import linkedin_logo from "../assets/LinkedIn_Logo.jpg";

const Contact = () => {
    return(
        <section className="contact-container">
            <title>Contact Me</title>
            <h1 className="contact-title">CONTACT ME</h1>
            <pre className="contact-description">
                ☏       If you would like to get in touch with me,         ☏       
                <br/>
                 feel free to reach out through any of the following methods:
            </pre>
            <br/>
            <ul>
            <li><a className = "contact-info" href="mailto:neidymlg@gmail.com">neidymlg@gmail.com</a></li>
            <li><a className = "contact-info" href="mailto:neidymlg@outlook.com">neidymlg@outlook.com</a></li>
            <li><a className = "contact-info" href="tel:+7146234026">+1 (714) 623-4026</a></li>
            </ul>
            <br/>
            <div className ="contact-logo">
                <a href="https://github.com/neidymlg?tab=repositories">
                    <img src={github_logo} alt="Github_Logo" className="github-logo" />
                </a>

                <a href="https://www.linkedin.com/in/neidy-malaga-87b691230/">
                    <img src={linkedin_logo} alt="LinkedIn_Logo" className="linkedin-logo" />
                </a>
            </div>
        </section>
    );
}

export default Contact;