import { certificationsData } from '../data/certifications';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-container">
      <div className="container projects-panel">
        <p className="section-kicker">Credentials & Badges</p>
        <h2>Certifications</h2>
        <p className="section-intro">
          A collection of verified Google Cloud skill badges and professional certifications.
        </p>

        <div className="resume-actions">
          <a className="resume-download" href={`${import.meta.env.BASE_URL}assets/merged_portfolio.pdf`} target="_blank" rel="noreferrer">View Full Portfolio (PDF)</a>
          <a className="resume-download secondary" href={`${import.meta.env.BASE_URL}assets/merged_portfolio.pdf`} download="Certifications-Portfolio.pdf">Download PDF</a>
        </div>

        <div className="projects-list projects-grid">
          {certificationsData.map((cert, index) => (
            <article key={cert.title} className="project-card project-card-complete">
              <div className="card-meta">Certification {String(index + 1).padStart(2, '0')}</div>
              <h3>{cert.title}</h3>
              <div style={{ fontSize: '.9rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                <strong>{cert.level}</strong> • {cert.source} • Issued: {cert.issued}
              </div>
              <ul className="project-points">
                {cert.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
