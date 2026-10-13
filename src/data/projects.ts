export type PortfolioProject = {
  title: string;
  points: string[];
  technologies: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Box Office Analytics Dashboard',
    points: [
      'Built an interactive movie analytics dashboard to explore box-office performance across multiple dimensions.',
      'Created an Executive Overview with key performance indicators and top-performing movies.',
      'Added Financial Analysis for budget, revenue, profit and return on investment (ROI).',
      'Included Genre & Ratings, Time Analysis and Movie Explorer views, with year, genre and language filters.',
    ],
    technologies: ['Power BI', 'Power Query', 'DAX', 'TMDB 5000 Movies dataset'],
  },
  {
    title: 'Student Performance Analysis (Excel)',
    points: [
      'Analyzed records covering students, courses, trainers, branches and exam results.',
      'Used lookup formulas to connect and retrieve information across related tables.',
      'Created PivotTables and PivotCharts to compare performance by branch, course, gender and month.',
      'Organized the workbook for quick academic and operational analysis.',
    ],
    technologies: ['Microsoft Excel', 'XLOOKUP', 'PivotTables', 'PivotCharts'],
  },
  {
    title: 'Bank Transaction Analysis (SQL)',
    points: [
      'Analyzed bank transaction records using SQL queries to extract useful patterns and summaries.',
      'Used joins and subqueries to combine data and answer multi-step questions.',
      'Applied grouping, aggregate functions and CASE expressions to classify and summarize transactions.',
      'Practiced window functions for analytical comparisons and running or ranked calculations.',
    ],
    technologies: ['SQL', 'MySQL', 'JOINs', 'Subqueries', 'GROUP BY', 'Aggregates', 'CASE', 'Window functions'],
  },
  {
    title: 'AI Resume Analyzer / Job Matching System',
    points: [
      'Designed an AI-assisted workflow to analyze a resume against a job description and identify relevant skills.',
      'Planned skill comparison to surface missing skills and summarize candidate-to-role fit.',
      'Connected job discovery/scraping and matching steps to support targeted job recommendations.',
      'Some workflow debugging remained in the available history; full end-to-end completion is not verified.',
    ],
    technologies: ['n8n', 'Google Gemini', 'Firecrawl', 'JavaScript', 'Python', 'AI components'],
  },
  {
    title: 'Documind — Document Reader / RAG Workflow',
    points: [
      'Designed a document-question-answering experience with a Lovable frontend and n8n backend.',
      'Used retrieval-augmented generation (RAG) to ground answers in uploaded document content.',
      'Worked with document ingestion, text extraction, embeddings and vector retrieval concepts.',
      'Recorded as an ongoing build; end-to-end completion is not confirmed in the available history.',
    ],
    technologies: ['Lovable', 'n8n', 'RAG', 'Supabase Vector Store', 'LLM APIs', 'Embedding APIs'],
  },
  {
    title: 'Autonomous Research Writer',
    points: [
      'Outlined an n8n workflow to support research and drafting with AI-assisted steps.',
      'Focused on turning a research task into a structured written output.',
      'Detailed final features, validation results and completion status were not captured.',
      'Treat as a documented workflow/concept rather than a verified production deployment.',
    ],
    technologies: ['n8n', 'AI workflow components', 'LLM workflow components'],
  },
  {
    title: 'Heart Disease Dataset — EDA & ML Evaluation',
    points: [
      'Worked on a traditional machine-learning project using a heart-disease dataset.',
      'Covered preprocessing, exploratory data analysis and descriptive statistics.',
      'Explored feature engineering, visualization and model evaluation.',
      'No deployed application or specific best-performing model is verified in the notes.',
    ],
    technologies: ['Python', 'Pandas', 'scikit-learn', 'Data visualization libraries'],
  },
  {
    title: 'MSME Data Analyst Internship — Analytics Work',
    points: [
      'Completed a one-month Data Analyst internship involving data preparation and analysis.',
      'Used Power Query for data transformation and cleaning.',
      'Created Power BI visualizations and used DAX for analytical measures.',
      'Applied TextBlob-based sentiment analysis in Python as part of the internship work.',
    ],
    technologies: ['Power BI', 'Power Query', 'DAX', 'Python', 'TextBlob', 'SQL'],
  },
  {
    title: 'Educational Training Academy App',
    points: [
      'Built an academy-management application concept with student-facing and administrative sections.',
      'Worked on pages/features including payments, certificates and attendance.',
      'Used a REST-style backend and relational persistence, with SQLite as a local fallback.',
      'Designed for local development; deployment was not required in the interview-build context.',
    ],
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'Logistics & Supply Chain — Route Optimization and Delivery Tracking',
    points: [
      'Worked on a hackathon project direction for route optimization and delivery tracking.',
      'Targeted more efficient delivery routes and clearer delivery-status visibility.',
      'OpenRoute Service API appears in the broader project/tool context; exact integration is not verified.',
      'Final features, evaluation results and submission status are not fully documented.',
    ],
    technologies: ['OpenRoute Service API', 'App/backend tools'],
  },
  {
    title: 'Message Notification Router',
    points: [
      'Worked on a hackathon-oriented Message Notification Router project.',
      'Focused on interpreting incoming messages and routing them through a notification workflow.',
      'Related architecture work included data ingestion, message interpretation and image interpretation.',
      'Complete final architecture and test results were not preserved in the available history.',
    ],
    technologies: ['Google Antigravity', 'AI-assisted development'],
  },
  {
    title: 'Autonomous Research Agent',
    points: [
      'Built or prototyped a research-agent workflow intended to gather information and produce research output.',
      'Used LangChain and a Groq API model in a Python implementation.',
      'Debugged dependency and search-library issues, including LangChain imports and the DuckDuckGo package rename to ddgs.',
      'Local testing and troubleshooting are documented; production deployment is not verified.',
    ],
    technologies: ['Python', 'LangChain', 'Groq API', 'ddgs', 'DuckDuckGo search'],
  },
];
