import { useEffect, useState } from 'react';
import CertificationsSection from '../sections/CertificationsSection';
import ContactSection from '../sections/ContactSection';
import InternshipsSection from '../sections/InternshipsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ResumeSection from '../sections/ResumeSection';

type SectionId = 'certifications' | 'contact' | 'internships' | 'projects' | 'resume';

interface Hotspot {
  id: string;
  label: string;
  left: number; // percentage
  top: number; // percentage
  width: number; // percentage
  height: number; // percentage
  type: 'external' | 'section';
  target?: string;
  sectionId?: SectionId;
}

const hotspots: Hotspot[] = [
  { id: 'github', label: 'GitHub', left: 69.3, top: 9.6, width: 13.0, height: 17.5, type: 'external', target: 'https://github.com/SaiKarun-28' },
  { id: 'linkedin', label: 'LinkedIn', left: 83.3, top: 8.2, width: 15.3, height: 18.6, type: 'external', target: 'https://www.linkedin.com/in/karun-imiddisetty-664a54397' },
  { id: 'projects', label: 'Projects', left: 69.3, top: 28.7, width: 13.0, height: 18.6, type: 'section', sectionId: 'projects' },
  { id: 'internships', label: 'Internships', left: 83.3, top: 28.5, width: 15.3, height: 18.8, type: 'section', sectionId: 'internships' },
  { id: 'resume', label: 'Resume', left: 69.3, top: 49.1, width: 13.0, height: 17.1, type: 'section', sectionId: 'resume' },
  { id: 'contact', label: 'Contact', left: 83.3, top: 49.1, width: 15.3, height: 17.6, type: 'section', sectionId: 'contact' },
  { id: 'certifications', label: 'Certifications', left: 83.3, top: 68.2, width: 12.3, height: 13.3, type: 'section', sectionId: 'certifications' },
];

function PortalShell() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveSection(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClick = (h: Hotspot) => {
    if (h.type === 'external' && h.target) {
      window.open(h.target, '_blank', 'noopener,noreferrer');
    } else if (h.type === 'section' && h.sectionId) {
      setActiveSection(h.sectionId);
    }
  };

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

          {hotspots.map((h) => (
            <div
              key={h.id}
              className={`portal-label-wrapper portal-${h.id}`}
              style={{
                left: `${h.left}%`,
                top: `${h.top}%`,
                width: `${h.width}%`,
                height: `${h.height}%`,
              }}
            >
              <button
                className="portal-card"
                onClick={() => handleClick(h)}
                aria-label={`Open ${h.label}`}
              />
            </div>
          ))}
        </div>
      </main>

      {activeSection && (
        <div className="section-overlay" role="dialog" aria-modal="true" aria-label={`${activeSection} section`}>
          <button className="close-button" onClick={() => setActiveSection(null)} aria-label="Close section">Close</button>
          <div className="section-content">{sectionContent[activeSection]}</div>
        </div>
      )}
    </>
  );
}

export default PortalShell;