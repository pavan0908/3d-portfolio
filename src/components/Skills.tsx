import "./styles/Skills.css";

const skillCategories = [
  {
    title: "Cloud Data Platforms",
    icon: "☁️",
    skills: [
      "Microsoft Azure", "AWS", "Azure Data Factory", "Azure Databricks",
      "Azure Synapse Analytics", "ADLS Gen2", "Azure SQL Database",
      "AWS Glue", "Lambda", "S3", "EMR", "Redshift", "Snowflake",
      "Microsoft Fabric", "Azure Key Vault", "Azure Blob Storage"
    ]
  },
  {
    title: "Big Data & Streaming",
    icon: "⚡",
    skills: [
      "Apache Spark", "PySpark", "Spark SQL", "Kafka", "Hadoop", "Hive",
      "Delta Lake", "Spark Structured Streaming", "Azure Event Hub",
      "Apache Airflow", "Delta Live Tables", "Real-Time Data Processing"
    ]
  },
  {
    title: "Programming & Databases",
    icon: "💻",
    skills: [
      "Python", "SQL", "Scala", "Shell Scripting",
      "SQL Server", "PostgreSQL", "MySQL", "Oracle", "MongoDB",
      "Database Performance Optimization"
    ]
  },
  {
    title: "ETL, Modeling & Warehousing",
    icon: "🔄",
    skills: [
      "ETL/ELT Processing", "Informatica", "Talend", "SSIS",
      "Dimensional Modeling", "Star Schema", "Snowflake Schema",
      "Data Warehousing", "Lakehouse Architecture", "Metadata-Driven Pipelines"
    ]
  },
  {
    title: "DevOps, Governance & Monitoring",
    icon: "🛡️",
    skills: [
      "Azure DevOps", "GitHub Actions", "Terraform", "Jenkins",
      "CI/CD Pipelines", "Azure Monitor", "CloudWatch", "Datadog",
      "RBAC", "Data Governance", "Infrastructure Automation"
    ]
  },
  {
    title: "Analytics & BI",
    icon: "📊",
    skills: [
      "Power BI", "Tableau", "Predictive Analytics", "Advanced SQL Analytics",
      "Agile/Scrum", "SDLC", "Business Intelligence Reporting",
      "Dashboard Development", "KPI Reporting", "Exploratory Data Analysis"
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="skills-header">
        <h2 className="skills-main-title">
          T<span className="skills-italic">ECHNICAL</span>
          <div>SK<span className="skills-italic">ILLS</span></div>
        </h2>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-card-inner">
              <div className="skill-card-icon">{category.icon}</div>
              <h3 className="skill-card-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
