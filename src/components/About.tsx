import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am <strong>Pavan Mukkamala</strong>, a Senior Data Engineer with over
          <strong> 10 years of IT experience</strong>, including 9+ years in the
          United States. I specialize in designing and building enterprise-scale
          data platforms, ETL/ELT pipelines, cloud-native architectures, and
          real-time streaming solutions across Azure, AWS, Databricks, PySpark,
          Snowflake, and Kafka.
        </p>
        <p className="para">
          I have delivered high-impact data engineering solutions in healthcare
          and banking domains — improving data pipeline performance, enforcing
          data governance, and enabling analytics-ready datasets for business
          decision-making. I am currently based in
          <strong> Overland Park, KS</strong> and hold a
          <strong> Master&apos;s in Big Data Analytics &amp; Information Technology</strong>
          {" "}from the University of Central Missouri and an
          <strong> AWS Certified Solutions Architect (Associate)</strong> certification.
        </p>
      </div>
    </div>
  );
};

export default About;
