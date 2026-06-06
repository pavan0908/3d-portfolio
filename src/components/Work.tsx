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
    category: "Azure ETL/ELT Modernization — Providence Health",
    tools: "Azure Data Factory, Databricks, PySpark, Azure Synapse, Delta Lake, Azure Key Vault",
    color: "#22d3ee",
    icon: "ADF",
    link: "https://github.com/pavan0908",
    description: "End-to-end ingestion pipeline processing 50M+ daily records from EHR systems into a governed Delta Lakehouse. Accelerated claims visibility by 30%, integrated Azure Event Hub for real-time patient monitoring, and enforced data governance with RBAC and lineage tracking.",
  },
  {
    title: "Real-Time Streaming Pipeline",
    category: "Event-Driven Ingestion on Azure — Providence Health",
    tools: "Azure Event Hub, Spark Structured Streaming, Kafka, Delta Live Tables, Apache Airflow",
    color: "#a78bfa",
    icon: "KAFKA",
    link: "https://github.com/pavan0908",
    description: "Low-latency event ingestion architecture processing 100K events/sec with auto-scaling consumers, supporting proactive patient monitoring and real-time operational intelligence across clinical applications.",
  },
  {
    title: "Banking Reporting Platform",
    category: "AWS Cloud Data Engineering — Wells Fargo",
    tools: "AWS Glue, Lambda, S3, EMR, Redshift, Kafka, Terraform, GitHub Actions, Jenkins",
    color: "#34d399",
    icon: "AWS",
    link: "https://github.com/pavan0908",
    description: "Serverless reporting platform on AWS consolidating fraud detection signals, risk metrics, and compliance reports for 10+ business units. Improved transaction processing efficiency by 30% and release reliability by 20% with CI/CD automation.",
  },
  {
    title: "Retail Analytics Dashboards",
    category: "BI & Reporting Automation — Target",
    tools: "Power BI, SQL Server, SSIS, Python, Tableau",
    color: "#fb923c",
    icon: "PBI",
    link: "https://github.com/pavan0908",
    description: "Self-service analytics layer with automated ETL via SSIS and Python, parameterized Power BI reports improving retail sales visibility by 30%, and optimized SQL queries improving dashboard refresh efficiency by 20%.",
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
    <section className="work" id="work">
      <div className="work-container">
        <h2>My <span>Work</span></h2>
        <div className="work-content">
          {/* Project Card Visual */}
          <div className="work-visual">
            <div className="work-visual-bg" />
            <span
              className="work-badge"
              style={{ color: project.color, borderColor: project.color }}
            >
              {project.icon}
            </span>
            <h3 className="work-project-title">{project.title}</h3>
            <p className="work-category" style={{ color: project.color }}>
              {project.category}
            </p>
            <p className="work-description">{project.description}</p>
            <div className="work-tools">
              {project.tools.split(", ").map((tool) => (
                <span
                  className="work-tool-tag"
                  key={tool}
                  style={{ borderColor: project.color }}
                >
                  {tool}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="work-link"
              style={{ color: project.color }}
            >
              View on GitHub &#8599;
            </a>
          </div>

          {/* Navigation */}
          <div className="work-nav">
            <button className="work-nav-btn" onClick={prev} aria-label="Previous">
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
            <button className="work-nav-btn" onClick={next} aria-label="Next">
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
