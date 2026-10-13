export type Internship = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

const cleanLine = (line: string) => line.replace(/\s+/g, ' ').replace(/^[•·▪◦‣\-–—]\s*/, '').trim();
const isHeading = (line: string, headings: string[]) => headings.some((heading) => new RegExp(`^${heading}(?:\\s|$)`, 'i').test(cleanLine(line)));

const getSection = (text: string, sectionNames: string[], stopNames: string[]) => {
  const lines = text.split(/\r?\n/).map(cleanLine).filter(Boolean);
  const start = lines.findIndex((line) => isHeading(line, sectionNames));
  if (start < 0) return [];
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (isHeading(lines[index], stopNames)) {
      end = index;
      break;
    }
  }
  return lines.slice(start + 1, end);
};

export const parseInternships = (text: string): Internship[] => {
  const lines = getSection(text, ['Experience', 'Internships?', 'Work Experience'], ['Projects?', 'Technical Skills', 'Skills', 'Certifications?', 'Education']);
  const entries: Internship[] = [];
  let current: Internship | null = null;
  let description: string[] = [];

  const commit = () => {
    if (!current) return;
    current.description = description.join(' ').trim();
    entries.push(current);
  };

  for (const line of lines) {
    const dateMatch = line.match(/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}\s*[–—-]\s*(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\.?\s+)?(?:\w+\.?\s+)?\d{4}\b/i);
    if (dateMatch) {
      commit();
      description = [];
      const company = cleanLine(line.replace(dateMatch[0], ''));
      current = { company, title: '', duration: dateMatch[0].trim(), description: '' };
      continue;
    }
    if (!current) continue;
    if (!current.title && !/^[•·▪◦‣]/.test(line)) {
      current.title = line;
    } else {
      description.push(cleanLine(line));
    }
  }
  commit();
  return entries.filter((entry) => entry.company || entry.title);
};

export const parseProjects = (text: string): Project[] => {
  const lines = getSection(text, ['Projects?'], ['Technical Skills', 'Skills', 'Certifications?', 'Education', 'Experience', 'Internships?']);
  const projects: Project[] = [];
  let current: Project | null = null;
  let description: string[] = [];

  const commit = () => {
    if (!current) return;
    current.description = description.join(' ').trim();
    projects.push(current);
  };

  for (const line of lines) {
    const isBullet = /^[•·▪◦‣]/.test(line);
    if (!isBullet) {
      commit();
      const [titlePart, technologyPart = ''] = line.split('|', 2);
      const technologies = technologyPart.split(/[,/&]/).map(cleanLine).filter(Boolean);
      current = { title: cleanLine(titlePart), description: '', technologies };
      description = [];
    } else if (current) {
      description.push(cleanLine(line));
    }
  }
  commit();
  return projects.filter((project) => project.title);
};