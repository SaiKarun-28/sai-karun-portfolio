import { useEffect, useState } from 'react';
import CertificationsSection from '../sections/CertificationsSection';
import ContactSection from '../sections/ContactSection';
import InternshipsSection from '../sections/InternshipsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ResumeSection from '../sections/ResumeSection';

type SectionId = 'certifications' | 'contact' | 'internships' | 'projects' | 'resume';

const externalLinks = {
  github: 'https://github.com/SaiKarun-28',
  linkedin: 'https://www.linkedin.com/in/karun-imiddisetty-664a54397',
} as const;

function PortalShell() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const closeSection = () => setActiveSection(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeSection();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const sectionContent = {
    certifications: <CertificationsSection />,
    contact: <ContactSection />,
    internships: <InternshipsSection />,
    projects: <ProjectsSection />,
    resume: <ResumeSection />,
  } satisfies Record<SectionId, React.ReactNode>;

  return (
    <>
      <main className="portal-interface" aria-label="Sai Karun's portfolio portals">
        <div className="portal-stage">
          <img src={`${import.meta.env.BASE_URL}assets/hero.png`} alt="Sai Karun's portfolio workspace" className="portal-bg-image" />
          <button className="portal-card portal-github" onClick={() => openExternal(externalLinks.github)} aria-label="Open GitHub" />
          <button className="portal-card portal-linkedin" onClick={() => openExternal(externalLinks.linkedin)} aria-label="Open LinkedIn" />
          <button className="portal-card portal-projects" onClick={() => setActiveSection('projects')} aria-label="Open Projects" />
          <button className="portal-card portal-internships" onClick={() => setActiveSection('internships')} aria-label="Open Internships" />
          <button className="portal-card portal-resume" onClick={() => setActiveSection('resume')} aria-label="Open Resume" />
          <button className="portal-card portal-contact" onClick={() => setActiveSection('contact')} aria-label="Open Contact" />
          <button className="portal-card portal-certifications" onClick={() => setActiveSection('certifications')} aria-label="Open Certifications" />
        </div>
      </main>

      {activeSection && (
        <div className="section-overlay" role="dialog" aria-modal="true" aria-label={`${activeSection} section`}>
          <button className="close-button" onClick={closeSection} aria-label="Close section">Close</button>
          <div className="section-content">{sectionContent[activeSection]}</div>
        </div>
      )}
    </>
  );
}

export default PortalShell;
