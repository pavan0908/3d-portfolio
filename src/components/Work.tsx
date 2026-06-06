import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type Project = {
  title: string;
  category: string;
  tools: string;
  color: string;
  icon: string;
  link: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Healthcare Data Pipeline",
    category: "Azure ETL/ELT Modernization",
    tools: "Azure Data Factory, Databricks, PySpark, Azure Synapse, Delta Lake",
    color: "#22d3ee",
    icon: "ADF",
    link: "https://github.com/pavan0908",
    description: "End-to-end ingestion pipeline processing 50M+ daily records from EHR systems into a governed Delta Lakehouse with full data quality and lineage.",
  },
  {
    title: "Real-Time Streaming Pipeline",
    category: "Event-Driven Ingestion on Azure",
    tools: "Azure Event Hub, Spark Structured Streaming, Kafka, Delta Live Tables",
    color: "#a78bfa",
    icon: "KAFKA",
    link: "https://github.com/pavan0908",
    description: "Low-latency event ingestion architecture processing 100K events/sec with auto-scaling consumers and real-time analytics on Delta Live Tables.",
  },
  {
    title: "Banking Reporting Platform",
    category: "AWS Cloud Data Engineering",
    tools: "AWS Glue, Lambda, S3, EMR, Redshift, Kafka, Terraform, GitHub Actions",
    color: "#34d399",
    icon: "AWS",
    link: "https://github.com/pavan0908",
    description: "Serverless reporting platform on AWS consolidating fraud detection signals, risk metrics, and compliance reports for 10+ business units.",
  },
  {
    title: "Retail Analytics Dashboards",
    category: "BI & Reporting Automation",
    tools: "Power BI, SQL Server, SSIS, Python, Tableau",
    color: "#fb923c",
    icon: "PBI",
    link: "https://github.com/pavan0908",
    description: "Self-service analytics layer with automated ETL, parameterized Power BI reports, and Python-driven data refresh for retail KPI monitoring.",
  },
];

const Work = () => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + projects.length) % projects.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % projects.length);
  }, []);

  const project = projects[current];

  return (
    <div className="work" id="workDiv">
      <div className="work-container">
        <h2>
          My <span style={{ color: "var(--accentColor)" }}>Work</span>
        </h2>
        <div className="work-content">
          {/* Project Card Visual */}
          <div className="work-visual" style={{ borderColor: project.color + "55" }}>
            <div className="work-visual-bg" style={{ background: `radial-gradient(ellipse at 30% 40%, ${project.color}18 0%, transparent 70%)` }} />
            <div className="work-badge" style={{ color: project.color, borderColor: project.color + "44", background: project.color + "11" }}>
              {project.icon}
            </div>
            <h3 className="work-project-title">{project.title}</h3>
            <p className="work-category" style={{ color: project.color }}>{project.category}</p>
            <p className="work-description">{project.description}</p>
            <div className="work-tools">
              {project.tools.split(", ").map((tool) => (
                <span key={tool} className="work-tool-tag" style={{ borderColor: project.color + "44" }}>
                  {tool}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-link" style={{ color: project.color }}>
              View on GitHub ↗
            </a>
          </div>

          {/* Navigation */}
          <div className="work-nav">
            <button onClick={prev} className="work-nav-btn" aria-label="Previous">
              <MdArrowBack />
            </button>
            <div className="work-dots">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`work-dot ${i === current ? "work-dot-active" : ""}`}
                  aria-label={`Project ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="work-nav-btn" aria-label="Next">
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
