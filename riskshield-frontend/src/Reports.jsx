import { useState } from "react";
import "./reports.css";

const reports = [
  {
    name: "Weekly Security Overview",
    type: "Security Report",
    date: "Oct 13, 2025",
    profiles: 128,
    threats: 23,
    risk: "High",
  },
  {
    name: "Threat Analysis Report",
    type: "Threat Analysis",
    date: "Oct 12, 2025",
    profiles: 84,
    threats: 17,
    risk: "Medium",
  },
  {
    name: "Profile Risk Assessment",
    type: "Risk Assessment",
    date: "Oct 11, 2025",
    profiles: 56,
    threats: 8,
    risk: "Low",
  },
  {
    name: "Monthly Digital Risk Report",
    type: "Monthly Report",
    date: "Oct 01, 2025",
    profiles: 342,
    threats: 64,
    risk: "High",
  },
];

function Reports() {
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div className="reports-page">

      {/* HEADER */}
      <div className="reports-header">
        <div>
          <div className="reports-label">SECURITY INTELLIGENCE</div>

          <h1>
            Security <span>Reports</span>
          </h1>

          <p>
            Generate, review and analyze your digital risk intelligence reports.
          </p>
        </div>

        <button className="generate-btn">
          ＋ Generate Report
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="report-stats">

        <div className="report-stat blue">
          <span>▤</span>
          <div>
            <small>Total Reports</small>
            <strong>24</strong>
            <p>+12% this month</p>
          </div>
        </div>

        <div className="report-stat red">
          <span>⚠</span>
          <div>
            <small>Threat Reports</small>
            <strong>8</strong>
            <p>Requires attention</p>
          </div>
        </div>

        <div className="report-stat green">
          <span>✓</span>
          <div>
            <small>Resolved Reports</small>
            <strong>16</strong>
            <p>67% resolved</p>
          </div>
        </div>

        <div className="report-stat purple">
          <span>◈</span>
          <div>
            <small>Profiles Analyzed</small>
            <strong>610</strong>
            <p>Across all reports</p>
          </div>
        </div>

      </div>

      {/* REPORT CONTENT */}
      <div className="reports-layout">

        {/* REPORT LIST */}
        <section className="reports-list panel-report">

          <div className="report-title">
            <div>
              <h2>Recent Reports</h2>
              <p>Your latest generated security reports</p>
            </div>

            <select defaultValue="All Reports">
              <option>All Reports</option>
              <option>Security Report</option>
              <option>Threat Analysis</option>
              <option>Risk Assessment</option>
            </select>
          </div>

          <div className="report-table-head">
            <span>REPORT</span>
            <span>TYPE</span>
            <span>DATE</span>
            <span>PROFILES</span>
            <span>RISK</span>
            <span>ACTION</span>
          </div>

          {reports.map((report) => (
            <div className="report-row" key={report.name}>

              <div className="report-name">
                <div className="report-file">▤</div>
                <div>
                  <strong>{report.name}</strong>
                  <small>{report.threats} threats detected</small>
                </div>
              </div>

              <span className="report-type">
                {report.type}
              </span>

              <span>{report.date}</span>

              <strong>{report.profiles}</strong>

              <span>
                <b className={`report-risk ${report.risk.toLowerCase()}`}>
                  {report.risk}
                </b>
              </span>

              <button
                className="view-report"
                onClick={() => setSelectedReport(report)}
              >
                View →
              </button>

            </div>
          ))}

        </section>

        {/* RIGHT SIDE */}
        <aside className="report-side">

          <div className="panel-report report-chart">

            <h2>Risk Summary</h2>
            <p>Risk distribution across reports</p>

            <div className="report-donut">
              <div>
                <strong>128</strong>
                <small>Scans</small>
              </div>
            </div>

            <div className="summary-item">
              <span><i className="dot-red" /> High Risk</span>
              <strong>8</strong>
            </div>

            <div className="summary-item">
              <span><i className="dot-yellow" /> Medium Risk</span>
              <strong>24</strong>
            </div>

            <div className="summary-item">
              <span><i className="dot-green" /> Low Risk</span>
              <strong>96</strong>
            </div>

          </div>

          <div className="report-ai-card">

            <div className="report-ai-icon">
              ◈
            </div>

            <h2>AI Report Intelligence</h2>

            <p>
              Automatically analyze threat patterns and generate
              actionable security insights.
            </p>

            <button>
              Generate AI Report →
            </button>

          </div>

        </aside>

      </div>

      {/* REPORT DETAILS */}
      {selectedReport && (
        <div className="report-modal">

          <div className="report-modal-box">

            <button
              className="close-report"
              onClick={() => setSelectedReport(null)}
            >
              ×
            </button>

            <div className="modal-icon">▤</div>

            <h2>{selectedReport.name}</h2>

            <p>{selectedReport.type}</p>

            <div className="modal-details">

              <div>
                <small>Date</small>
                <strong>{selectedReport.date}</strong>
              </div>

              <div>
                <small>Profiles</small>
                <strong>{selectedReport.profiles}</strong>
              </div>

              <div>
                <small>Threats</small>
                <strong>{selectedReport.threats}</strong>
              </div>

              <div>
                <small>Risk Level</small>
                <strong>{selectedReport.risk}</strong>
              </div>

            </div>

            <button className="download-report">
              ↓ Download Report
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Reports;