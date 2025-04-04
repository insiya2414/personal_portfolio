import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChartPie, Database, Code, Server } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCategory = "all" | "data" | "ml" | "web" | "cloud";

type Project = {
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory[];
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    kaggle?: string;
  };
  image: string; // URL to an image or icon
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Azure Data Engineering Pipeline",
      description: "Scalable data pipeline using Azure Data Factory",
      longDescription: "Designed and automated a scalable data pipeline using Azure Data Factory, Databricks, PySpark, and Azure Synapse Analytics for big data processing. Built an efficient ETL workflow to transform raw data into a data warehouse, enabling seamless integration with Power BI for real-time insights.",
      category: ["data", "cloud"],
      tags: ["Azure", "Databricks", "ETL", "PySpark", "Power BI"],
      links: {
        github: "https://github.com/insiya2414/azure-data-pipeline"
      },
      image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kYXRhYmFzZSI+PHBhdGggZD0iTTIwIDYuNWEzLjUgMy41IDAgMCAwLTYuNTYtMS44IiBzdHJva2U9IiMyNTYzZWIiLz48cGF0aCBkPSJNMTQuMyA4Yy0uNDYuNi0uNzggMS4zLS45IDIuMDMtLjEuNzUtLjA0IDEuNTIuMTggMi4yNi4yMi43My41OCAxLjQgMS4wNSAxLjk3LjQ4LjU3IDEuMDYgMS4wNCAxLjcyIDEuMzYuNjYuMzIgMS4zOC40OSAyLjEuNS43My4wMSAxLjQ1LS4xNSAyLjEyLS40Ny42Ny0uMzIgMS4yNi0uNzkgMS43NS0xLjM3LjQ5LS41Ny44Ni0xLjI0IDEuMDctMS45N2EuNS41IDAgMCAwLS45My0uMzYgNi4xOCA2LjE4IDAgMCAxLS42OSAxLjI4Yy0uNS42OS0xLjE0IDEuMjYtMS44NyAxLjY4LS43NC40MS0xLjU2LjY0LTIuMzkuNjZhNS45NCA1Ljk0IDAgMCAxLTIuNDQtLjUzIDUuNzQgNS43NCAwIDAgMS0xLjk4LTEuNTljLS41Ni0uNjYtLjk2LTEuNDMtMS4xOC0yLjI1LS4yMS0uODMtLjI1LTEuNjktLjExLTIuNTMuMTUtLjg1LjUxLTEuNjYgMS4wNi0yLjM3LjU0LS43MSAxLjI0LTEuMzEgMi4wNC0xLjc2LjgtLjQ0IDEuNjgtLjczIDIuNjItLjgxYTkuMTkgOS4xOSAwIDAgMSAyLjc0LjExLjUuNSAwIDAgMCAuMy0uOTUgMTAgMTAgMCAwIDAtMi45NS0uMTMgOC41NiA4LjU2IDAgMCAwLTIuOTEuOTEgOC4xOSA4LjE5IDAgMCAwLTIuMjIgMS45M1oiIHN0cm9rZT0iIzI1NjNlYiIgZmlsbD0iIzI1NjNlYiIvPjxlbGxpcHNlIGN4PSIxMiIgY3k9IjVWIiByeD0iOCIgcnk9IjMiIHN0cm9rZT0iIzI1NjNlYiIvPjxwYXRoIGQ9Ik00IDE0LjV2LTRNMTIgNnYxNE00IDE5LjV2LTRNMjAgOXY5TTEyIDE5YzAgMS42NjYtNC0xLTQtMSIgc3Ryb2tlPSIjMjU2M2ViIi8+PHBhdGggZD0iTTQgMTUuNWMwIDEuMzgtNS41IDIuNS0xMCAyLjUtNC41MyAwLTEwLTEuMTItMTAtMi41TTQgMTUuNWMwLTEuMzgtNS41LTIuNS0xMC0yLjUtNC41MyAwLTEwIDEuMTItMTAgMi41TTQgMTUuNVYyMGMwIDEuMzgtNS41IDIuNS0xMCAyLjUtNC41MyAwLTEwLTEuMTItMTAtMi41di00LjUiIHN0cm9rZT0iIzI1NjNlYiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQgMCkiLz48L3N2Zz4="
    },
    {
      title: "AI-Powered Teaching Assistant",
      description: "Career readiness course assistant with NLP",
      longDescription: "Focused on prompt engineering to optimize AI responses for technical interview preparation by 30%. Applied NLP and fine-tuned ML models, achieving 85% relevance in contextually accurate explanations.",
      category: ["ml"],
      tags: ["NLP", "Prompt Engineering", "ML Models", "AI"],
      links: {
        github: "https://github.com/insiya2414/ai-teaching-assistant"
      },
      image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1icmFpbi1jaXJjdWl0Ij48cGF0aCBkPSJNMTIgNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMSAwIDQgMFY2YTIgMiAwIDAgMC0yLTJaIiBzdHJva2U9IiMyNTYzZWIiLz48cGF0aCBkPSJNMTIgNCBBOCA4IDAgMCAxIDEyIDIwIEE4IDggMCAwIDEgMTIgNCB6IiBzdHJva2U9IiMyNTYzZWIiLz48cGF0aCBkPSJNMTIgNCBBOCA4IDAgMCAwIDEyIDIwIEE4IDggMCAwIDAgMTIgNCB6IiBzdHJva2U9IiMyNTYzZWIiLz48cGF0aCBkPSJNMTkuMjcyIDYuMTAzIEwxMi40NyAxMy44MTUiIHN0cm9rZT0iIzI1NjNlYiIvPjxwYXRoIGQ9Ik0xOS4yNzIgNi4xMDMgTDIwLjcyOCAxMC4wNDkiIHN0cm9rZT0iIzI1NjNlYiIvPjxwYXRoIGQ9Ik0xOS4yNzIgNi4xMDMgTDE1LjE5NSA0LjkgIiBzdHJva2U9IiMyNTYzZWIiLz48cGF0aCBkPSJNNS4zIDIwIDEwIDE1IiBzdHJva2U9IiMyNTYzZWIiLz48cGF0aCBkPSJNNS4zIDIwbC0zLjIyOC0xLjQxIDEuODItMy4wNDYiIHN0cm9rZT0iIzI1NjNlYiIvPjwvc3ZnPg=="
    },
    {
      title: "Diabetes Prediction using ML Models",
      description: "Predictive model with 82% accuracy",
      longDescription: "Built a diabetes prediction model (82% accuracy) using Random Forest, SVM, and KNN, optimizing features through scaling, encoding, and outlier removal. Analyzed ~1000 patient records, leveraging EDA, feature visualization, and correlation analysis for variable selection.",
      category: ["ml", "data"],
      tags: ["Random Forest", "SVM", "KNN", "EDA", "Feature Engineering"],
      links: {
        github: "https://github.com/insiya2414/diabetes-prediction",
        kaggle: "https://kaggle.com/diabetes-prediction"
      },
      image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1waWUtY2hhcnQiPjxwYXRoIGQ9Ik0xMS42MyAyMS41OUExMCAxMCAwIDEgMCAxMiAyMmgtLjM3eiIgc3Ryb2tlPSIjMjU2M2ViIi8+PHBhdGggZD0iTTIyIDEyQTEwIDEwIDAgMCAwIDEyIDJWMTJ6IiBzdHJva2U9IiMyNTYzZWIiLz48L3N2Zz4="
    },
    {
      title: "Power BI & Tableau Developer",
      description: "Interactive dashboards for data analysis",
      longDescription: "Developed and implemented interactive dashboards for analyzing Netflix viewership patterns and stock market trends. Developed interactive charts, graphs, and KPIs to highlight trends, identify top-selling pizza's, and track customer sales preferences.",
      category: ["data"],
      tags: ["Power BI", "Tableau", "Data Visualization", "Dashboard Development"],
      links: {
        demo: "https://example.com/dashboard-demo"
      },
      image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1iYXItY2hhcnQtMiI+PHBhdGggZD0iTTMgMTJoNGMuNiAwIDEtLjQgMS0xVjVjMC0uNi0uNC0xLTEtMUgzYy0uNiAwLTEgLjQtMSAxdjZjMCAuNi40IDEgMSAxWiIgc3Ryb2tlPSIjMjU2M2ViIi8+PHBhdGggZD0iTTEwIDhoNGMuNiAwIDEtLjQgMS0xVjVjMC0uNi0uNC0xLTEtMWgtNGMtLjYgMC0xIC40LTEgMXYyYzAgLjYuNCAxIDEgMVoiIHN0cm9rZT0iIzI1NjNlYiIvPjxwYXRoIGQ9Ik0xNyAyMGg0Yy42IDAgMS0uNCAxLTFWNWMwLS42LS40LTEtMS0xaC00Yy0uNiAwLTEgLjQtMSAxdjE0YzAgLjYuNCAxIDEgMVoiIHN0cm9rZT0iIzI1NjNlYiIvPjxwYXRoIGQ9Ik0xIDIyaDIyIiBzdHJva2U9IiMyNTYzZWIiLz48cGF0aCBkPSJNMTAgMjB2LTRhMSAxIDAgMCAxIDEtMWgydmMuNiAwIDEgLjQgMSAxdjQiIHN0cm9rZT0iIzI1NjNlYiIvPjxwYXRoIGQ9Ik0zIDIwdi02IiBzdHJva2U9IiMyNTYzZWIiLz48L3N2Zz4="
    }
  ];

  const filteredProjects = projects.filter(
    project => activeFilter === "all" || project.category.includes(activeFilter)
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case "data":
        return <Database className="h-4 w-4" />;
      case "ml":
        return <Brain className="h-4 w-4" />;
      case "web":
        return <Code className="h-4 w-4" />;
      case "cloud":
        return <Server className="h-4 w-4" />;
      default:
        return <ChartPie className="h-4 w-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing my work in data science, machine learning, and software development
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="flex items-center gap-2"
          >
            <ChartPie className="h-4 w-4" />
            All Projects
          </Button>
          <Button
            variant={activeFilter === "data" ? "default" : "outline"}
            onClick={() => setActiveFilter("data")}
            className="flex items-center gap-2"
          >
            <Database className="h-4 w-4" />
            Data Analysis
          </Button>
          <Button
            variant={activeFilter === "ml" ? "default" : "outline"}
            onClick={() => setActiveFilter("ml")}
            className="flex items-center gap-2"
          >
            <Brain className="h-4 w-4" />
            Machine Learning
          </Button>
          <Button
            variant={activeFilter === "cloud" ? "default" : "outline"}
            onClick={() => setActiveFilter("cloud")}
            className="flex items-center gap-2"
          >
            <Server className="h-4 w-4" />
            Cloud/Azure
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <div className="w-16 h-16 p-3 bg-primary/10 rounded-md flex items-center justify-center">
                      <img src={project.image} alt={project.title} className="w-full h-full" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button size="sm" asChild>
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.links.kaggle && (
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.links.kaggle} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Kaggle
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
