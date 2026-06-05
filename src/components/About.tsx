import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Data Engineer with hands-on experience building enterprise-scale
          cloud data platforms using Azure Data Factory, Databricks, PySpark,
          Snowflake, AWS Glue, Lambda, S3, and Spark. I specialize in data
          ingestion, transformation, modeling, streaming, orchestration, and
          CI/CD automation to deliver trusted, analytics-ready datasets.
        </p>
        <p className="para">
          I have supported cloud modernization initiatives in healthcare and
          banking, improved reporting throughput, optimized distributed Spark
          workloads, built metadata-driven ETL frameworks, and strengthened data
          quality, governance, and observability across production environments.
        </p>
      </div>
    </div>
  );
};

export default About;
