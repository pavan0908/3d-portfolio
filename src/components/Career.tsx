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

          {/* Providence Health */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Providence Health</h5>
              </div>
              <h3>Dec 2025&ndash;Present</h3>
            </div>
            <p>
              Engineered Azure Data Factory and Databricks healthcare ingestion pipelines accelerating claims visibility by 30%. Developed PySpark transformation workflows in Azure Synapse, integrated Azure Event Hub and Spark Structured Streaming for real-time patient monitoring, optimized Delta Lake partitioning, and built secure data movement solutions with Azure Key Vault. Enhanced observability through Azure Monitor dashboards and enforced data governance with lineage tracking and RBAC.
            </p>
          </div>

          {/* Wells Fargo */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Wells Fargo</h5>
              </div>
              <h3>Jan 2025&ndash;Nov 2025</h3>
            </div>
            <p>
              Architected AWS Glue, Lambda, and S3 pipelines for secure financial reporting. Engineered PySpark and Spark SQL workflows on EMR improving transaction processing efficiency by 30%. Integrated Kafka streaming with Spark Structured Streaming for near real-time fraud monitoring. Optimized Amazon Redshift performance and implemented CI/CD automation using Jenkins, Terraform, and GitHub Actions improving release reliability by 20%.
            </p>
          </div>

          {/* Target */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Target</h5>
              </div>
              <h3>Apr 2021&ndash;Dec 2023</h3>
            </div>
            <p>
              Engineered interactive Power BI dashboards and SQL analytics frameworks improving retail sales visibility by 30%. Streamlined automated reporting workflows using SSIS and Python scripting. Leveraged SQL and Tableau for customer purchasing trends and inventory forecasting. Optimized complex SQL queries improving dashboard refresh efficiency by 20%.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
