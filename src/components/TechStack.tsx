import "./styles/TechStack.css";

type SkillGroup = {
  category: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Cloud Platforms",
    skills: ["Microsoft Azure", "AWS", "Google Cloud (GCP)", "Snowflake"],
  },
  {
    category: "Data Pipelines & ETL",
    skills: ["Azure Data Factory", "AWS Glue", "Matillion", "Talend", "Airflow", "dbt"],
  },
  {
    category: "Big Data & Processing",
    skills: ["Apache Spark", "PySpark", "Databricks", "Hadoop", "Hive", "HDFS"],
  },
  {
    category: "Streaming & Messaging",
    skills: ["Apache Kafka", "Azure Event Hubs", "AWS Kinesis", "Spark Streaming"],
  },
  {
    category: "Databases & Warehousing",
    skills: ["Snowflake", "Azure Synapse", "Redshift", "BigQuery", "Delta Lake", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Programming & Scripting",
    skills: ["Python", "SQL", "PySpark", "Bash", "Scala"],
  },
  {
    category: "BI & Analytics",
    skills: ["Power BI", "Tableau", "Looker", "Azure Purview"],
  },
  {
    category: "DevOps & Infrastructure",
    skills: ["Terraform", "Docker", "Kubernetes", "Azure DevOps", "GitHub Actions", "CI/CD"],
  },
];

const TechStack = () => {
  return (
    <section className="techstack-section" id="techstack">
      <div className="techstack-wrapper">
        <h2 className="techstack-heading">
          <span className="ts-accent">SKILLS</span> &amp; TECH STACK
        </h2>
        <p className="techstack-sub">
          10+ years engineering data platforms across Azure, AWS, and GCP
        </p>
        <div className="techstack-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h4 className="skill-category">{group.category}</h4>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
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
