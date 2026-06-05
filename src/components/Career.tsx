import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Providence Health</h5>
              </div>
              <h3>2022–NOW</h3>
            </div>
            <p>
              Built Azure Data Factory and Databricks healthcare ingestion
              pipelines, developed PySpark workflows in Azure Synapse, integrated
              Event Hub and streaming pipelines, optimized Delta Lake performance,
              and improved observability and governance for healthcare analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Wells Fargo</h5>
              </div>
              <h3>2019–2022</h3>
            </div>
            <p>
              Designed AWS Glue, Lambda, and S3 pipelines, created PySpark and
              Spark SQL workflows on EMR, integrated Kafka streaming for fraud
              and risk monitoring, tuned Redshift performance, and automated
              CI/CD with Jenkins, Terraform, and GitHub Actions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Target</h5>
              </div>
              <h3>2016–2019</h3>
            </div>
            <p>
              Built Power BI dashboards, automated reporting with SSIS and
              Python, optimized SQL queries, and designed curated analytical
              datasets to improve retail analytics and operational
              decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
