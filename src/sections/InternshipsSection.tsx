import { useResume } from '../hooks/useResume';

const InternshipsSection = () => {
  const { internships, isLoading, error } = useResume();

  return (
    <section id="internships" className="section-container">
      <div className="container">
        <p className="section-kicker">Experience</p>
        <h2>Internships</h2>
        <p className="section-intro">Practical work across data analytics, reporting, and cloud AI.</p>
        {isLoading && <p className="status-message">Reading the resume…</p>}
        {error && <p className="error">{error}</p>}
        {!isLoading && !error && internships.length === 0 && (
          <p className="empty-state">No internship entries were detected in the resume.</p>
        )}
        {!isLoading && !error && internships.length > 0 && (
          <div className="internships-list">
            {internships.map((internship, index) => (
              <article key={`${internship.title}-${index}`} className="internship-card">
                <div className="card-meta">{internship.duration || 'Internship'}</div>
                <h3>{internship.title || 'Internship experience'}</h3>
                {internship.company && <h4>{internship.company}</h4>}
                <p>{internship.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InternshipsSection;