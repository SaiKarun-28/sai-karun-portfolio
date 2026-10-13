import { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { parseInternships, parseProjects } from '../utils/parseResume';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

type ResumeState = {
  resumeText: string;
  internships: ReturnType<typeof parseInternships>;
  projects: ReturnType<typeof parseProjects>;
  isLoading: boolean;
  error: string | null;
};

const initialState: ResumeState = {
  resumeText: '',
  internships: [],
  projects: [],
  isLoading: true,
  error: null,
};

const extractPageText = async (page: Awaited<ReturnType<Awaited<ReturnType<typeof pdfjsLib.getDocument>['promise']>['getPage']>>) => {
  const content = await page.getTextContent();
  const rows = new Map<number, string[]>();

  for (const item of content.items) {
    if (!('str' in item) || !item.str.trim()) continue;
    const y = Math.round(item.transform[5]);
    rows.set(y, [...(rows.get(y) ?? []), item.str.trim()]);
  }

  return [...rows.entries()]
    .sort(([yA], [yB]) => yB - yA)
    .map(([, parts]) => parts.join(' '))
    .join('\n');
};

export const useResume = () => {
  const [state, setState] = useState<ResumeState>(initialState);

  useEffect(() => {
    let cancelled = false;
    const loadResume = async () => {
      try {
        const pdf = await pdfjsLib.getDocument({ url: '/assets/resume.pdf' }).promise;
        const pages: string[] = [];
        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          pages.push(await extractPageText(await pdf.getPage(pageNumber)));
        }

        const resumeText = pages.join('\n\n');
        if (!cancelled) {
          setState({
            resumeText,
            internships: parseInternships(resumeText),
            projects: parseProjects(resumeText),
            isLoading: false,
            error: null,
          });
        }
      } catch (cause) {
        console.error('Unable to load resume PDF:', cause);
        if (!cancelled) {
          setState({ ...initialState, isLoading: false, error: 'The resume PDF could not be loaded.' });
        }
      }
    };

    void loadResume();
    return () => { cancelled = true; };
  }, []);

  return state;
};