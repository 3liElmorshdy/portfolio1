import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br />
          Education
        </h2>
        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Freelance Web Developer */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Mostaql (مستقل) · Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering full-stack web applications, e-commerce stores, and custom client solutions
              using MERN stack, TypeScript, and modern API integrations.
            </p>
          </div>

          {/* Nile University */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Development</h4>
                <h5>Nile University · GIG-Skill Boost Program</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Professional specialization in advanced front-end development, TypeScript architecture,
              responsive web standards, and modern performance optimization.
            </p>
          </div>

          {/* ITI Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End React.js Intern</h4>
                <h5>Information Technology Institute (ITI) · Alexandria Branch</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed an intensive 6-month React.js internship (completed July 2025).
              Built scalable single-page web applications, mastered Redux state management,
              and developed production-ready component architectures.
            </p>
          </div>

          {/* Route Academy */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Web Development</h4>
                <h5>Route Academy · React Specialization</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Comprehensive training covering JavaScript (ES6+), React ecosystem,
              state management, RESTful API integration, and responsive UI design.
            </p>
          </div>

          {/* Mansoura University */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Surveying &amp; GIS</h4>
                <h5>Mansoura University · Credit Hour System</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Graduated December 2023. Strong academic grounding in Geographic Information Systems (GIS),
              spatial data modeling, and modern Web GIS architectures (Leaflet, Mapbox, PostGIS).
            </p>
          </div>

          {/* Relocation & Status */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Military Exemption &amp; Relocation</h4>
                <h5>Status: Fully Exempt · Ready to Start</h5>
              </div>
              <h3>READY</h3>
            </div>
            <p>
              Fully exempt from military service and ready for immediate relocation to
              El Sherouk City, Cairo, or remote software engineering roles.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
