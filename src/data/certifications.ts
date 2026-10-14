export interface Certification {
  title: string;
  issued: string;
  level: string;
  source: string;
  details: string[];
}

export const certificationsData: Certification[] = [
  {
    title: "Develop GenAI Apps with Gemini and Streamlit Skill Badge",
    issued: "2025-10-31",
    level: "Intermediate",
    source: "Google Cloud Skills Badge",
    details: [
      "Text generation with Gemini and prompt engineering",
      "Applying function calls using the Python SDK and Gemini API",
      "Deploying a Streamlit app on Cloud Run via Docker container"
    ]
  },
  {
    title: "Set Up a Google Cloud Network Skill Badge",
    issued: "2025-10-31",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Designing VPC networks and subnets",
      "Configuring routes and firewalls",
      "Connecting resources securely across regions"
    ]
  },
  {
    title: "Prompt Design in Vertex AI Skill Badge",
    issued: "2025-10-30",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Crafting effective prompts for Vertex AI",
      "Controlling output format and temperature",
      "Evaluating prompt quality and iterating"
    ]
  },
  {
    title: "Analyze Speech and Language with Google APIs Skill Badge",
    issued: "2025-10-26",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Using Speech-to-Text for transcription",
      "Applying Natural Language API for sentiment/entity",
      "Integrating language APIs into applications"
    ]
  },
  {
    title: "Implement Speech and Language Solutions with Pre-trained APIs",
    issued: "2025-10-26",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Leveraging pre-trained Speech API models",
      "Using Translation and Vision APIs together",
      "Building voice-enabled features"
    ]
  },
  {
    title: "Monitoring in Google Cloud Skill Badge",
    issued: "2025-10-26",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Setting up Cloud Monitoring and Alerting",
      "Creating dashboards and metrics",
      "Defining SLOs and alerting policies"
    ]
  },
  {
    title: "Build Serverless Applications with Cloud Run Functions",
    issued: "2025-10-25",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Writing HTTP-triggered Cloud Functions",
      "Deploying via gcloud and managing revisions",
      "Connecting to Pub/Sub and Firestore"
    ]
  },
  {
    title: "Deploy and Manage Applications on Google App Engine",
    issued: "2025-10-25",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Configuring app.yaml and services",
      "Scaling with automatic instance management",
      "Deploying updates with zero downtime"
    ]
  },
  {
    title: "Build a Website on Google Cloud Skill Badge",
    issued: "2025-10-23",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Hosting static sites with Cloud Storage",
      "Using Firebase Hosting for dynamic content",
      "Connecting custom domains with SSL"
    ]
  },
  {
    title: "Store, Process, and Manage Data on Google Cloud - Console Skill Badge",
    issued: "2025-10-23",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Creating Cloud Storage buckets and managing objects",
      "Using BigQuery for analytics queries",
      "Organizing data with Cloud Console"
    ]
  },
  {
    title: "Develop with Apps Script and AppSheet Skill Badge",
    issued: "2025-10-22",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Automating workflows with Google Apps Script",
      "Building no-code apps in AppSheet",
      "Integrating with Sheets and Calendar"
    ]
  },
  {
    title: "App Building with AppSheet Skill Badge",
    issued: "2025-10-21",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Designing app interfaces with AppSheet",
      "Creating data sources and views",
      "Publishing and sharing mobile apps"
    ]
  },
  {
    title: "Implement Cloud Collaboration and Productivity Workflows",
    issued: "2025-10-21",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Automating cross-app Google Workspace flows",
      "Using AppSheet for team productivity",
      "Integrating Docs, Sheets, and Drive"
    ]
  },
  {
    title: "Get Started with Dataplex Skill Badge",
    issued: "2025-10-19",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Understanding data zones and lakes",
      "Using Dataplex for governance",
      "Cataloging data assets"
    ]
  },
  {
    title: "Get Started with Looker Skill Badge",
    issued: "2025-10-17",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Creating dashboards in Looker",
      "Building SQL-based explores",
      "Sharing insights with stakeholders"
    ]
  },
  {
    title: "Deploy and Secure Serverless APIs with API Gateway",
    issued: "2025-10-15",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Creating REST/GRPC APIs with API Gateway",
      "Applying IAM and API keys for security",
      "Monitoring API usage and quotas"
    ]
  },
  {
    title: "Implement Event-Driven Messaging and Automation Workflows",
    issued: "2025-10-15",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Using Pub/Sub for decoupled messaging",
      "Triggering Cloud Functions on events",
      "Building workflow automation pipelines"
    ]
  },
  {
    title: "The Basics of Google Cloud Compute Skill Badge",
    issued: "2025-10-15",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Creating and managing Compute Engine VMs",
      "Configuring networking and disks",
      "Using SSH and managing instances"
    ]
  },
  {
    title: "Implement Cloud Storage and Data Protection Solutions",
    issued: "2025-10-14",
    level: "Introductory",
    source: "Google Cloud Skills Badge",
    details: [
      "Designing secure Cloud Storage policies",
      "Using encryption and lifecycle rules",
      "Implementing access controls and audits"
    ]
  },
  {
    title: "NPTEL - Foundation of Cloud, IoT, Edge and Machine Learning",
    issued: "2026-06-01",
    level: "Certification",
    source: "NPTEL",
    details: [
      "Foundational concepts across cloud computing, IoT, edge computing and machine learning."
    ]
  },
  {
    title: "HackerRank Orchestrate",
    issued: "2026-06-01",
    level: "Event",
    source: "HackerRank",
    details: [
      "Project submission and participation in HackerRank Orchestrate."
    ]
  }
];
