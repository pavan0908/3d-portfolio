import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
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
              <h3>Dec 2025 &ndash; Present</h3>
            </div>
            <ul className="career-bullets">
              <li>Engineered Azure Data Factory and Databricks healthcare ingestion pipelines, accelerating claims visibility by 30% across enterprise analytical reporting environments.</li>
              <li>Developed PySpark transformation workflows within Azure Synapse, standardizing clinical datasets while strengthening healthcare analytics consistency and regulatory compliance.</li>
              <li>Automated metadata-driven Azure ingestion orchestration frameworks, reducing manual operational dependencies throughout healthcare integration workflows.</li>
              <li>Integrated Azure Event Hub and Spark Structured Streaming pipelines supporting proactive patient monitoring and real-time operational intelligence capabilities.</li>
              <li>Optimized Delta Lake partitioning strategies within Databricks, improving enterprise query responsiveness by 20% for large-scale analytical dashboard workloads.</li>
              <li>Built secure healthcare data movement solutions leveraging Azure Key Vault and managed identities, strengthening protected enterprise integration environments.</li>
              <li>Enhanced enterprise observability through Azure Monitor dashboards and automated pipeline alerting, minimizing production disruptions using proactive monitoring frameworks.</li>
              <li>Implemented advanced SQL optimization strategies within Azure Synapse dedicated pools, strengthening reporting performance across healthcare workloads.</li>
              <li>Supported governance initiatives enforcing data lineage tracking, role-based security controls, and enterprise retention policies aligned with healthcare regulations.</li>
              <li>Coordinated Agile sprint activities alongside Azure DevOps deployment automation, supporting scalable healthcare modernization initiatives across enterprise environments.</li>
            </ul>
          </div>

          {/* Wells Fargo */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Wells Fargo</h5>
              </div>
              <h3>Jan 2025 &ndash; Nov 2025</h3>
            </div>
            <ul className="career-bullets">
              <li>Architected AWS Glue, Lambda, and S3 pipelines supporting secure financial reporting operations and scalable downstream analytical consumption across enterprise banking platforms.</li>
              <li>Engineered PySpark and Spark SQL workflows on EMR clusters improving transaction processing efficiency by 30% while strengthening enterprise reporting reliability.</li>
              <li>Automated multi-source ingestion frameworks using AWS Step Functions and metadata-driven orchestration simplifying onboarding across distributed engineering environments.</li>
              <li>Integrated Kafka streaming pipelines with Spark Structured Streaming supporting near real-time fraud monitoring and proactive enterprise banking risk detection.</li>
              <li>Optimized Amazon Redshift warehouse performance using query tuning, workload management, and distribution strategies enhancing analytical responsiveness.</li>
              <li>Implemented CI/CD deployment automation using Jenkins, Terraform, and GitHub Actions improving release reliability by 20% across cloud-native delivery environments.</li>
              <li>Designed scalable dimensional data models supporting regulatory reporting, operational dashboards, customer transaction analytics, and compliance-focused reporting.</li>
              <li>Strengthened governance through automated reconciliation routines, SQL validation frameworks, anomaly detection techniques, and reusable Python ETL components.</li>
            </ul>
          </div>

          {/* Target */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Target</h5>
              </div>
              <h3>Apr 2021 &ndash; Dec 2023</h3>
            </div>
            <ul className="career-bullets">
              <li>Engineered interactive Power BI dashboards and SQL analytics frameworks improving retail sales visibility by 30% across merchandising, inventory management, and operational planning.</li>
              <li>Streamlined automated reporting workflows using SSIS and Python scripting to reduce spreadsheet dependencies and accelerate recurring enterprise data preparation activities.</li>
              <li>Leveraged SQL and Tableau analyses interpreting customer purchasing trends alongside inventory datasets supporting forecasting accuracy and merchandising optimization strategies.</li>
              <li>Optimized complex SQL queries and reporting datasets improving dashboard refresh efficiency by 20% while strengthening operational analytical responsiveness for executives.</li>
              <li>Integrated structured and semi-structured retail datasets from enterprise systems into centralized environments enabling unified analytical visibility throughout workflows.</li>
              <li>Automated Python and SQL reconciliation routines improving reporting consistency while minimizing downstream discrepancies throughout enterprise retail validation processes.</li>
              <li>Designed dimensional reporting structures and curated analytical datasets supporting executive dashboards, customer segmentation analysis, and enterprise monitoring initiatives.</li>
              <li>Facilitated cloud migration readiness by documenting legacy reporting dependencies and standardizing transformation logic supporting modernization initiatives.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
