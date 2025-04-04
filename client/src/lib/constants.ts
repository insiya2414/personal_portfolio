export const SKILLS = {
  languages: ["Python", "SQL", "Java", "C++", "R", "JavaScript", "HTML5", "CSS3"],
  dataAnalysis: [
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau", "Excel", 
    "Jupyter Notebook", "Google Colab"
  ],
  machineLearning: [
    "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV (computer vision)", 
    "Hugging Face (NLP models)"
  ],
  platforms: [
    "Git/GitHub", "API Integration", "Cloud (Azure, AWS)", "Databricks", 
    "Synapse Analytics", "MySQL Workbench", "ETL", "CI/CD (GitHub Actions, Azure DevOps)", 
    "Forecasting & Decision-Making"
  ],
  certifications: [
    "Microsoft Certified Azure Data Scientist Associate", 
    "AZ-900 Microsoft Azure Fundamentals", 
    "Python Programming Masterclass", 
    "CompTIA Network+ (WIP)", 
    "CodePath AWS Certified Cloud Practitioner Certification(WIP)"
  ]
};

export const EDUCATION = {
  university: "Texas State University, San Marcos",
  degree: "Bachelor of Science in Computer Science",
  graduationDate: "May 2025",
  gpa: "3.89/4.0",
  awards: [
    "TXST Distinguished Scholarship (four-year, top 25% incoming freshman)",
    "Consistently featured on the Dean's List",
    "Alpha Lambda Delta Honors Society (top 20%)",
    "Computer Science Academic Excellence",
    "Michael Austin Moore Endowed Awards"
  ]
};

export const PROJECTS = [
  {
    title: "Azure Data Engineering Pipeline",
    description: "Designed and automated a scalable data pipeline using Azure Data Factory, Databricks, PySpark, and Azure Synapse Analytics for big data processing. Built an efficient ETL workflow to transform raw data into a data warehouse, enabling seamless integration with Power BI for real-time insights.",
    technologies: ["Azure", "Data Factory", "Databricks", "PySpark", "Synapse Analytics", "Power BI"]
  },
  {
    title: "AI-Powered Teaching Assistant For Career Readiness Course",
    description: "Focused on prompt engineering to optimize AI responses for technical interview preparation by 30%. Applied NLP and fine-tuned ML models, achieving 85% relevance in contextually accurate explanations.",
    technologies: ["NLP", "ML Models", "Prompt Engineering", "Technical Interviews"]
  },
  {
    title: "Diabetes prediction using ML Models",
    description: "Built a diabetes prediction model (82% accuracy) using Random Forest, SVM, and KNN, optimizing features through scaling, encoding, and outlier removal. Analyzed ~1000 patient records, leveraging EDA, feature visualization, and correlation analysis for variable selection.",
    technologies: ["Random Forest", "SVM", "KNN", "EDA", "Feature Engineering"]
  },
  {
    title: "Power BI & Tableau Developer",
    description: "Developed and implemented interactive dashboards for analyzing Netflix viewership patterns and stock market trends. Developed interactive charts, graphs, and KPIs to highlight trends, identify top-selling pizza's, and track customer sales preferences.",
    technologies: ["Power BI", "Tableau", "Data Visualization", "Dashboard Development"]
  }
];

export const EXPERIENCES = [
  {
    title: "Research Analyst",
    company: "Center for Analytics and Data Science",
    location: "San Marcos, TX",
    period: "May 2024 - Dec 2024",
    responsibilities: [
      "Examined national CMS datasets with nearly 1M+ records to identify health disparities, aimed at reducing care costs.",
      "Assisted PhD students in publishing 3+ research papers by conducting exploratory data analysis (EDA) using Python, R, and Power BI, uncovering patterns in patient care, provider performance, and cost-effectiveness to support data-driven healthcare policy decisions."
    ]
  },
  {
    title: "Student Assistant",
    company: "Ingram School of Engineering (AIT Lab)",
    location: "San Marcos, TX",
    period: "Nov 2023 - May 2024",
    responsibilities: [
      "Conducted literature reviews for PhD students using Zotero, categorizing sources, and ensuring accurate citation management for academic publications.",
      "Gathered and interpreted transportation data using ArcGIS Pro, mapping road networks and measuring infrastructure lengths to support data-driven insights for transportation research projects."
    ]
  },
  {
    title: "STEM Tutoring Team",
    company: "Student Support Services",
    location: "San Marcos, TX",
    period: "Aug 2023 - Dec 2023",
    responsibilities: [
      "Empowered over 50 students with personalized study tips, achieving an average two-letter grade improvement.",
      "Spearheaded a student referral initiative, strategically matching 20+ students with tailored academic support, resulting in a significant boost in overall academic achievements across multiple subjects."
    ]
  }
];

export const ACTIVITIES = [
  "Active member of SWE, ACM and the Computer Science Club (.EXE), staying updated on AI and industry trends.",
  "Won Best Product at Boko Hacks, 1st Prize in Chevron Track at Rice Datathon (2024 vehicle prediction), and 1st Prize (Undergrad) at TXST 2025 Datathon. Also competed in several other hackathons.",
  "Mentored 10+ aspiring female coders through Girls Who Code and supported diversity initiatives with AI4ALL.",
  "Represented Texas State at ALD National Conference 2023 (collaborative research) and SWE Conference Chicago 2024."
];
