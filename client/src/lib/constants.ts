// Resume data extracted from the PDF
import txstBokoImage from "@/components/txst-bokohacks.jpeg";
import txstDatathonImage from "@/components/txst-datathon.jpeg";
import riceDatathonImage from "@/components/rice-datathon.jpeg";


export const PERSONAL_INFO = {
  name: "Insiya Raja",
  location: "San Marcos, TX",
  email: "rajainsiya24@gmail.com",
  linkedin: "LinkedIn.com/in/insiya-raja24",
  github: "GitHub.com/insiya2414 "
  // website: "https://personal-portfolio-backend-hllu.onrender.com/"
  // LinkedIn.com/in/insiya-raja24 | GitHub.com/insiya2414 | InsiyaRaja.com
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
    "Michael Austin Moore Endowed Award",
    "Computer Science Academic Excellence Award",
    "Alpha Lambda Delta Academic Excellence Award "
  ]
};


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

export const COURSEWORK = [
  {
    id: 1,
    name: "Self-Directed Learning",
    courses: [
      "Data Science",
      "Machine Learning",
      "Neural Networks & Deep Learning",
      "Statistical Analysis",
      "Natural Language Processing",
      "Version Control with Git & GitHub ",
      "CI/CD with GitHub Actions",
      "SQL for Data Analysis",
      "ETL Pipelines with Python"
    ]
  },
  {
    id: 2,
    name: "Computer Science Fundamentals",
    courses: [
      "Data Structures & Algorithms",
      "Operating System Fundamentals",
      "Database Design & Management",
      "Computer Networks",
      "Software Engineering",
      "Human Factors",
      "Computer Architecture",
      "Object Oriented Programming",
      "Algorithms & Analysis",
      "Technical Writing"
    ]
  },
  {
    id: 3,
    name: "Mathematics & Analytics",
    courses: [
      "Linear Algebra",
      "Calculus I, II & III",
      "Discrete Mathematics  I & II",
      "Probability & Statistics"
    ]
  },
  {
    id: 4,
    name: "Specialized Topics",
    courses: [
      "Cloud Computing",
      "Data Visualization",
      "Ethics in AI",
      "Computer Systems Security",
      "Canoeing"
    ]
  }
];


export const PROJECTS = [
  {
    id: 1,
    title: "Azure Data Engineering Pipeline",
    description: [
      "Designed and automated a scalable data pipeline using Azure Data Factory, Databricks, PySpark, and Azure Synapse Analytics for big data processing.",
      "Built an efficient ETL workflow to transform raw data into a data warehouse, enabling seamless integration with Power BI for real-time insights."
    ],
    tech: ["Azure", "Databricks", "PySpark", "ETL", "Power BI"]
    // link: "#"
  },
  {
    id: 2,
    title: "AI-Powered Teaching Assistant For Career Readiness Course",
    description: [
      "Focused on prompt engineering to optimize AI responses for technical interview preparation by 30%.",
      "Applied NLP and fine-tuned ML models, achieving 85% relevance in contextually accurate explanations."
    ],
    tech: ["NLP", "Machine Learning", "Prompt Engineering", "AI"]
    // link: "#"
  },
  {
    id: 3,
    title: "Diabetes prediction using ML Models",
    description: [
      "Built a diabetes prediction model (82% accuracy) using Random Forest, SVM, and KNN, optimizing features through scaling, encoding, and outlier removal.",
      "Analyzed ~1000 patient records, leveraging EDA, feature visualization, and correlation analysis for variable selection."
    ],
    tech: ["Machine Learning", "Python", "Random Forest", "SVM", "KNN"],
    link: "https://www.kaggle.com/code/insiyaraja/diabetes"
  },
  {
    id: 4,
    title: "Power BI & Tableau Developer",
    description: [
      "Developed and implemented interactive dashboards for analyzing Netflix viewership patterns and stock market trends.",
      "Developed interactive charts, graphs, and KPIs to highlight trends, identify top-selling pizza's, and track customer sales preferences."
    ],
    tech: ["Power BI", "Tableau", "Data Visualization", "Dashboard Design"],
    links:[
      { name: "Netflix Dashboard", url: "https://public.tableau.com/app/profile/insiya.maad.raja/viz/NetflixDashboard_17058899470880/NETFLIX" },
      { name: "Stock Market Dashboard", url: "https://public.tableau.com/app/profile/insiya.maad.raja/viz/StockMarketDashboard_17059488914780/Dashboard1" },
      { name: "Pizza Sales Dashboard", url: "https://drive.google.com/file/d/12OgYuhqgF-zdnElWep0awyU4vNoFvWQ4/view?pli=1" },
      { name: "Customer Sales Dashboard", url: "https://drive.google.com/file/d/1-pz8tRENVz3cxCk9I5x00_d3dsj6LA3K/view" }
    ]
  },
  {
    id: 5,
    title: "EcoEats",
    description: [

      "Developed an app that scans grocery receipts, tracks pantry items, and suggests recipes using API integration to reduce food waste.",
      "Implemented API integration and OCR for accurate receipt parsing and personalized recipe recommendations based on available ingredients.",
      "Collaborated in a team to design intuitive user interfaces, ensuring a user-friendly app experience."
    ],
    tech: ["React", "Firebase", "GitHub", "Google Cloud Vision API for OCR"],
    link: "https://www.linkedin.com/posts/insiya-raja24_ecoeats-sustainability-foodwastereduction-activity-7270567313353912320-L9ek?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyMfI4BTHJd7sTDriq4MmQOZBnk8MLNPeo"
  },
  {
    id: 6,
    title: "Vacay Your Way",
    description: [
      "Built a responsive web application that simplifies travel planning with personalized itineraries and local destination highlights.",
      "Collaborated in a team to design a user-centric interface that enhances travel experiences and reduces planning stress."
    ],
    tech: ["React", "Firebase", "Google Weather/Calender API", "Open AI", "Jira"],
    link: "https://www.linkedin.com/posts/insiya-raja24_vacayyourway-travelsimplified-teameffort-activity-7192560903853113344-WLd2?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyMfI4BTHJd7sTDriq4MmQOZBnk8MLNPeo"
  }
  // {
  //   id: 7,
  //   title: "Diabetes Prediction Using ML Models",
  //   description: [
  //     "Engineered a robust diabetes prediction model on Kaggle, showcasing expertise in feature engineering and algorithmic selection.",
  //     "Conducted end-to-end analysis, utilizing advanced ML techniques for accurate diabetes diagnosis with a notable accuracy rate of 82% via the Random Forest Model."
  //   ],
  //   tech: ["Python", "Exploratory Data Analysis", "Model Building", "Kaggle"],
  //   link: "https://www.kaggle.com/code/insiyaraja/diabetes"
  // }

];

export const EXPERIENCE = [
  {
    id: 1,
    title: "Peer Tutor for Math & Computer Science",
    company: "Student Learning Assistance Center (SLAC)",
    location: "San Marcos, TX",
    date: "Aug 2024 - Present",
    description: [
      "Provided walk-in and appointment-based tutoring for Math and Computer Science (CS I & II), supporting students with foundational concepts, coding assignments, and problem-solving techniques.",
      "Facilitated small group tutoring sessions to enhance collaborative learning, improve academic performance, and foster confidence in technical subjects."
    ]
  },
  {
    id: 2,
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
    id: 3,
    title: "Student Assistant",
    company: "Ingram School of Engineering (AIT Lab)",
    location: "San Marcos, TX",
    date: "Dec 2023 - Apr 2024",
    description: [
      "Conducted literature reviews for PhD students using Zotero, categorizing sources, and ensuring accurate citation management for academic publications.",
      "Gathered and interpreted transportation data using ArcGIS Pro, mapping road networks and measuring infrastructure lengths to support data-driven insights for transportation research projects."
    ]
  },
  {
    id: 4,
    title: "STEM Tutoring Team",
    company: "Student Support Services",
    location: "San Marcos, TX",
    date: "Sep 2023 - Dec 2023",
    description: [
      "Empowered over 50 students with personalized study tips, achieving an average two-letter grade improvement.",
      "Spearheaded a student referral initiative, strategically matching 20+ students with tailored academic support, resulting in a significant boost in overall academic achievements across multiple subjects."
    ]
  }
];


export const ACTIVITIES = [
  {
    title: "Boko Hacks - Best Product",
    description: "Built CatConnect, a mentorship-matching platform for students using React and Elasticsearch—in just 7 hours.",
    image: txstBokoImage,
    link: "https://www.linkedin.com/posts/ugcPost-7263997897468178434-69mX?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyMfI4BTHJd7sTDriq4MmQOZBnk8MLNPeo"
  },
  {
    title: "Rice Datathon - 1st Prize (Chevron Track)",
    description: "Forecasted vehicle populations for Chevron using predictive models. Won for best domain name: shakethatgas.club.",
    image: riceDatathonImage,
    link: "https://devpost.com/software/404-gas-not-found?_gl=1*1sj3e9a*_gcl_au*MTQyNTgyMTgwNC4xNzQyMzQzOTkx*_ga*MjQzNjE1OTQ2LjE3NDIzNDM5OTI.*_ga_0YHJK3Y10M*MTc0Mzk2MTk5MS42LjEuMTc0Mzk2MTk5NS4wLjAuMA.."
  },
  {
    title: "TXST Datathon 2025 - 1st Prize (Undergrad)",
    description: "Predicted university growth using ML and clustering. Achieved 98% accuracy analyzing Texas enrollment trends.",
    image: txstDatathonImage,
    link: "https://www.library.txst.edu/services/research-services/txstopendatathon/2025datathon.html"
  }
  
  
];

export const ACTIVITY_HIGHLIGHTS = [
    "Active member of the Society of Women Engineers (SWE), the Association for Computing Machinery (ACM), and the Texas State University Computer Science Club (.EXE), consistently engaging in workshops, talks, and tech trend discussions around AI, data science, and innovation.",
    
    "Mentored over 10 aspiring female coders through Girls Who Code (GWC), leading sessions on programming fundamentals, debugging, and project building. Encouraged curiosity and confidence in young women pursuing STEM by organizing mini-projects, hands-on coding activities, and fostering a collaborative learning environment.",
    
    "Selected to represent Texas State University at the Alpha Lambda Delta (ALD) National Conference 2023, contributing to collaborative research discussions, and attended the Society of Women Engineers (SWE) Annual Conference 2024 in Chicago, engaging with industry leaders and advancing professional development."
  
];



export const MENU_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Coursework", href: "#coursework" },
  { label: "Experience", href: "#experience" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" }
];
