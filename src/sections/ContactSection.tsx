import { useState } from 'react';
import { profileData } from '../data/profile';

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyValue = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="container contact-panel">
        <p className="section-kicker">Stay in touch</p>
        <h2>Contact</h2>
        <p className="section-intro">Have a question or an opportunity? Reach out through either channel.</p>
        <div className="contact-info">
          <article className="contact-item">
            <div className="contact-icon" aria-hidden="true">@</div>
            <div className="contact-copy">
              <span className="contact-label">Email</span>
              <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
            </div>
            <button className="btn-copy" onClick={() => copyValue(profileData.email)}>{copied === profileData.email ? 'Copied' : 'Copy'}</button>
          </article>
          <article className="contact-item">
            <div className="contact-icon" aria-hidden="true">☎</div>
            <div className="contact-copy">
              <span className="contact-label">Mobile</span>
              <a href={`tel:${profileData.mobile}`}>{profileData.mobile}</a>
            </div>
            <button className="btn-copy" onClick={() => copyValue(profileData.mobile)}>{copied === profileData.mobile ? 'Copied' : 'Copy'}</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;