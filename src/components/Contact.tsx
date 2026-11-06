import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Location &amp; Status</h4>
            <p>
              📍 Mansoura, Egypt
              <br />
              (Open to relocate to El Sherouk City)
              <br />
              <span style={{ color: "var(--accentColor)", fontSize: "14px" }}>
                Fully exempt from military service
              </span>
            </p>
            <h4>Phone &amp; WhatsApp</h4>
            <p>
              <a
                href="https://wa.me/201067219108"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                +20 106 721 9108
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Sc. Surveying &amp; GIS, Mansoura University (2023)
              <br />
              React.js Intern, ITI Alexandria (2025)
              <br />
              Front-End, Nile University (2026)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social &amp; Platforms</h4>
            <a
              href="https://github.com/3liElmorshdy"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-elmorshedy-363877348/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://mostaql.com/u/Aly_Bin_Ahmed"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Mostaql (مستقل) <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/201067219108"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ali Ahmed Elmorshedy</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
