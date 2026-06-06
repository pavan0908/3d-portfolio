import "./styles/TechStack.css";

type SkillGroup = {
  category: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Cloud Data Platforms",
    skills: ["Microsoft Azure", "AWS", "Snowflake", "Azure Data Factory", "Azure Databricks", "Azure Synapse", "Azure Data Lake Gen2", "AWS Glue", "Lambda", "S3", "EMR", "Redshift", "Microsoft Fabric"],
  },
  {
    category: "Big Data & Streaming",
    skills: ["Apache Spark", "PySpark", "Spark SQL", "Kafka", "Hadoop", "Hive", "Delta Lake", "Spark Structured Streaming", "Azure Event Hub", "Apache Airflow", "Delta Live Tables"],
  },
  {
    category: "Programming & Databases",
    skills: ["Python", "SQL", "Scala", "Shell Scripting", "SQL Server", "PostgreSQL", "MySQL", "Oracle", "MongoDB"],
  },
  {
    category: "ETL, Modeling & Warehousing",
    skills: ["ETL/ELT Processing", "Informatica", "Talend", "SSIS", "Dimensional Modeling", "Star Schema", "Snowflake Schema", "Lakehouse Architecture", "Metadata-Driven Pipelines"],
  },
  {
    category: "DevOps, Governance & Monitoring",
    skills: ["Azure DevOps", "GitHub Actions", "Terraform", "Jenkins", "CI/CD Pipelines", "Azure Monitor", "CloudWatch", "Datadog", "RBAC", "Data Governance"],
  },
  {
    category: "Analytics & BI",
    skills: ["Power BI", "Tableau", "Advanced SQL Analytics", "Predictive Analytics", "Dashboard Development", "KPI Reporting", "Exploratory Data Analysis"],
  },
];

const TechStack = () => {
  return (
    <section className="techstack-section">
      <div className="techstack-container">
        <h2>
          SKILLS <span>&</span> TECH STACK
        </h2>
        <p className="techstack-sub">
          4 years engineering data platforms across Azure and AWS
        </p>
        <div className="techstack-grid">
          {skillGroups.map((group) => (
            <div className="techstack-group" key={group.category}>
              <h4>{group.category}</h4>
              <div className="techstack-pills">
                {group.skills.map((skill) => (
                  <span className="techstack-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
