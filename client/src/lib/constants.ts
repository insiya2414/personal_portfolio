// Resume data extracted from the PDF
export const PERSONAL_INFO = {
  name: "Insiya Raja",
  location: "San Marcos, TX",
  email: "rajainsiya24@gmail.com",
  linkedin: "LinkedIn.com/in/insiya-raja24",
  github: "GitHub.com/insiya2414",
  website: "InsiyaRaja.com"
};

export const EDUCATION = {
  school: "Texas State University, San Marcos",
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

export const COURSEWORK = [
  {
    id: 1,
    name: "Data Science & Machine Learning",
    courses: [
      "Advanced Data Science",
      "Machine Learning Algorithms",
      "Neural Networks & Deep Learning",
      "Statistical Analysis",
      "Big Data Analytics"
    ]
  },
  {
    id: 2,
    name: "Computer Science Fundamentals",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Design & Management",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  {
    id: 3,
    name: "Mathematics & Analytics",
    courses: [
      "Linear Algebra",
      "Calculus I & II",
      "Discrete Mathematics",
      "Probability & Statistics",
      "Numerical Analysis"
    ]
  },
  {
    id: 4,
    name: "Specialized Topics",
    courses: [
      "Cloud Computing",
      "Computer Vision",
      "Natural Language Processing",
      "Data Visualization",
      "Ethics in AI"
    ]
  }
];

export const SKILLS = {
  languages: ["Python", "SQL", "Java", "C++", "R", "JavaScript", "HTML5", "CSS3"],
  dataAnalysis: [
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", 
    "Tableau", "Excel", "Jupyter Notebook", "Google Colab"
  ],
  machinelearning: [
    "TensorFlow", "PyTorch", "Scikit-learn", "Keras", 
    "OpenCV (computer vision)", "Hugging Face (NLP models)"
  ],
  platforms: [
    "Git/GitHub", "API Integration", "Cloud (Azure, AWS)", 
    "Databricks", "Synapse Analytics", "MySQL Workbench", 
    "ETL", "CI/CD (GitHub Actions, Azure DevOps)", "Forecasting & Decision-Making"
  ],
  certifications: [
    "Microsoft Certified Azure Data Scientist Associate",
    "AZ-900 Microsoft Azure Fundamentals",
    "Python Programming Masterclass",
    "CompTIA Network+ (WIP)",
    "CodePath AWS Certified Cloud Practitioner Certification (WIP)"
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "Azure Data Engineering Pipeline",
    description: [
      "Designed and automated a scalable data pipeline using Azure Data Factory, Databricks, PySpark, and Azure Synapse Analytics for big data processing.",
      "Built an efficient ETL workflow to transform raw data into a data warehouse, enabling seamless integration with Power BI for real-time insights."
    ],
    tech: ["Azure", "Databricks", "PySpark", "ETL", "Power BI"],
    link: "#"
  },
  {
    id: 2,
    title: "AI-Powered Teaching Assistant For Career Readiness Course",
    description: [
      "Focused on prompt engineering to optimize AI responses for technical interview preparation by 30%.",
      "Applied NLP and fine-tuned ML models, achieving 85% relevance in contextually accurate explanations."
    ],
    tech: ["NLP", "Machine Learning", "Prompt Engineering", "AI"],
    link: "#"
  },
  {
    id: 3,
    title: "Diabetes prediction using ML Models",
    description: [
      "Built a diabetes prediction model (82% accuracy) using Random Forest, SVM, and KNN, optimizing features through scaling, encoding, and outlier removal.",
      "Analyzed ~1000 patient records, leveraging EDA, feature visualization, and correlation analysis for variable selection."
    ],
    tech: ["Machine Learning", "Python", "Random Forest", "SVM", "KNN"],
    link: "https://www.kaggle.com/"
  },
  {
    id: 4,
    title: "Power BI & Tableau Developer",
    description: [
      "Developed and implemented interactive dashboards for analyzing Netflix viewership patterns and stock market trends.",
      "Developed interactive charts, graphs, and KPIs to highlight trends, identify top-selling pizza's, and track customer sales preferences."
    ],
    tech: ["Power BI", "Tableau", "Data Visualization", "Dashboard Design"],
    link: "#"
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    title: "Research Analyst",
    company: "Center for Analytics and Data Science",
    location: "San Marcos, TX",
    date: "May 2024 - Dec 2024",
    description: [
      "Examined national CMS datasets with nearly 1M+ records to identify health disparities, aimed at reducing care costs.",
      "Assisted PhD students in publishing 3+ research papers by conducting exploratory data analysis (EDA) using Python, R, and Power BI, uncovering patterns in patient care, provider performance, and cost-effectiveness to support data-driven healthcare policy decisions."
    ]
  },
  {
    id: 2,
    title: "Student Assistant",
    company: "Ingram School of Engineering (AIT Lab)",
    location: "San Marcos, TX",
    date: "Nov 2023 - May 2024",
    description: [
      "Conducted literature reviews for PhD students using Zotero, categorizing sources, and ensuring accurate citation management for academic publications.",
      "Gathered and interpreted transportation data using ArcGIS Pro, mapping road networks and measuring infrastructure lengths to support data-driven insights for transportation research projects."
    ]
  },
  {
    id: 3,
    title: "STEM Tutoring Team",
    company: "Student Support Services",
    location: "San Marcos, TX",
    date: "Aug 2023 - Dec 2023",
    description: [
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

export const MENU_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Coursework", href: "#coursework" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" }
];
