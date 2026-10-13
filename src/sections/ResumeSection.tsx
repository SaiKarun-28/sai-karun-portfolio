const ResumeSection = () => {
  return (
    <section id="resume" className="section-container">
      <div className="container resume-panel">
        <p className="section-kicker">Profile</p>
        <h2>Resume</h2>
        <p className="section-intro">A professional summary and quick links to view or download my complete resume.</p>

        <div className="resume-actions">
          <a className="resume-download" href="/assets/resume.pdf" target="_blank" rel="noreferrer">Open PDF in new tab</a>
          <a className="resume-download secondary" href="/assets/resume.pdf" download="Sai-Karun-Imiddisetty-Resume.pdf">Download PDF</a>
        </div>

        <div className="resume-content" aria-label="Resume summary">
          <p>
            Entry-level Data Analytics and AI enthusiast focused on turning raw data into useful insights,
            dashboards, automations, and practical AI workflows.
          </p>
          <p>
            Skilled across SQL, Excel, Power BI, Python, data cleaning, reporting, and analytics storytelling,
            with project work spanning dashboards, banking transaction analysis, resume matching, customer ticket
            tracking, and AI-powered workflow automation.
          </p>
          <p>
            Interested in data analyst, business intelligence, AI automation, and junior analytics roles where
            structured problem-solving and clear communication matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
