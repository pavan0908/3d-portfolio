import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Data Engineer with 4 years of experience building enterprise-scale
          cloud data platforms using Azure Data Factory, Databricks, PySpark,
          Snowflake, AWS Glue, Lambda, S3, and Spark. I specialize in data
          ingestion, transformation, modeling, streaming, orchestration, and
          CI/CD automation to deliver trusted, analytics-ready datasets.
        </p>
        <p className="para">
          I have supported cloud modernization initiatives in healthcare and
          banking, improved reporting throughput by 30%, optimized distributed
          Spark workloads using Delta Lake techniques, and built metadata-driven
          ETL frameworks. I design dimensional data models supporting scalable
          analytics, regulatory reporting, and data governance with lineage
          traceability across enterprise platforms.
        </p>
        <p className="para">
          I hold a Master of Big Data Analytics and Information Technology from
          the University of Central Missouri and am AWS Certified Solutions
          Architect (Associate).
        </p>
      </div>
    </div>
  );
};

export default About;
