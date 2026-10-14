import { useState } from "react";
import "./alerts.css";

const alertsData = [
  {
    date: "13 Oct 2025\n10:24 AM",
    severity: "High",
    type: "Suspicious Login",
    profile: "@john_doe",
    platform: "Twitter",
    status: "Open",
  },
  {
    date: "13 Oct 2025\n10:02 AM",
    severity: "Medium",
    type: "Multiple Accounts\nDetected",
    profile: "@tech_user99",
    platform: "Instagram",
    status: "Investigating",
  },
  {
    date: "12 Oct 2025\n06:32 PM",
    severity: "High",
    type: "Fake Followers\nDetected",
    profile: "@marketingpro",
    platform: "Twitter",
    status: "Open",
  },
  {
    date: "12 Oct 2025\n04:15 PM",
    severity: "Medium",
    type: "Unusual Activity\nPattern",
    profile: "@user123",
    platform: "Instagram",
    status: "Resolved",
  },
  {
    date: "11 Oct 2025\n11:20 AM",
    severity: "Low",
    type: "Profile Information\nMismatch",
    profile: "@creative_girl",
    platform: "Facebook",
    status: "Resolved",
  },
  {
    date: "11 Oct 2025\n09:05 AM",
    severity: "High",
    type: "Phishing Link\nDetected",
    profile: "https://bit.ly/xYz...",
    platform: "Web",
    status: "Open",
  },
  {
    date: "11 Oct 2025\n07:18 PM",
    severity: "Medium",
    type: "Suspicious Location\nLogin",
    profile: "@silent_ninja",
    platform: "Twitter",
    status: "Investigating",
  },
  {
    date: "10 Oct 2025\n04:12 PM",
    severity: "Low",
    type: "Bot-like Behavior",
    profile: "@user456",
    platform: "Instagram",
    status: "Resolved",
  },
];

function Alerts() {
  const [filter, setFilter] = useState("All Alerts");
  const [selectedAlert, setSelectedAlert] = useState(alertsData[0]);

  const filteredAlerts =
    filter === "All Alerts"
      ? alertsData
      : alertsData.filter((alert) => alert.severity === filter);

  return (
    <div className="alerts-page">

      {/* HEADER */}
      <header className="alerts-header">
        <div className="alerts-title">
          <div className="alerts-title-icon">♧</div>

          <div>
            <h1>Threat Alerts</h1>
            <p>
              Monitor suspicious activities, high-risk profiles and
              potential threats in real-time.
            </p>
          </div>
        </div>

        <div className="live-box">
          <span className="live-dot"></span>

          <div>
            <strong>Live Monitoring</strong>
            <small>Last updated: 13 Oct 2025 · 10:24 AM</small>
          </div>
        </div>
      </header>

      {/* SUMMARY CARDS */}
      <section className="alert-summary">

        <div className="alert-card red">
          <div className="summary-icon">⚠</div>

          <div>
            <span>Total Alerts</span>
            <strong>23</strong>
            <small className="up">↗ 12%</small>
            <p>vs. last 7 days</p>
          </div>
        </div>

        <div className="alert-card danger">
          <div className="summary-icon">⚠</div>

          <div>
            <span>High Severity</span>
            <strong>8</strong>
            <small className="up">↗ 33%</small>
            <p>Requires immediate attention</p>
          </div>
        </div>

        <div className="alert-card yellow">
          <div className="summary-icon">⚠</div>

          <div>
            <span>Medium Severity</span>
            <strong>9</strong>
            <small className="up">↗ 6%</small>
            <p>Under investigation</p>
          </div>
        </div>

        <div className="alert-card green">
          <div className="summary-icon">♢</div>

          <div>
            <span>Low Severity</span>
            <strong>6</strong>
            <small className="down">↘ 14%</small>
            <p>Monitored</p>
          </div>
        </div>

        {/* DONUT */}
        <div className="severity-card">

          <h3>Alerts by Severity</h3>

          <div className="severity-content">

            <div className="severity-donut">
              <div>
                <strong>23</strong>
                <span>Total</span>
              </div>
            </div>

            <div className="severity-list">

              <div>
                <i className="dot high"></i>
                <span>High</span>
                <b>8 (35%)</b>
              </div>

              <div>
                <i className="dot medium"></i>
                <span>Medium</span>
                <b>9 (39%)</b>
              </div>

              <div>
                <i className="dot low"></i>
                <span>Low</span>
                <b>6 (26%)</b>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="alerts-main">

        {/* TABLE */}
        <div className="alerts-table-panel">

          {/* FILTERS */}
          <div className="alert-filters">

            <div className="filter-buttons">

              {["All Alerts", "High", "Medium", "Low"].map((item) => (
                <button
                  key={item}
                  className={filter === item ? "filter active" : "filter"}
                  onClick={() => setFilter(item)}
                >
                  {item === "High" && "⚠ "}
                  {item === "Medium" && "⚠ "}
                  {item === "Low" && "♢ "}
                  {item}
                </button>
              ))}

            </div>

            <div className="filter-right">

              <select>
                <option>All Sources</option>
                <option>Twitter</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Web</option>
              </select>

              <select>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Today</option>
              </select>

              <button className="clear-btn">
                Clear Filters
              </button>

            </div>

          </div>

          {/* TABLE HEADER */}
          <div className="alert-table">

            <div className="table-header">
              <span>□</span>
              <span>TIME & DATE</span>
              <span>SEVERITY</span>
              <span>ALERT TYPE</span>
              <span>PROFILE / SOURCE</span>
              <span>STATUS</span>
              <span>ACTIONS</span>
            </div>

            {filteredAlerts.map((alert, index) => (

              <div
                className="table-row"
                key={index}
                onClick={() => setSelectedAlert(alert)}
              >

                <span className="checkbox">□</span>

                <span className="date">
                  {alert.date.split("\n").map((line, i) => (
                    <ReactLine key={i}>{line}</ReactLine>
                  ))}
                </span>

                <span>
                  <b className={`severity-pill ${alert.severity.toLowerCase()}`}>
                    ● {alert.severity}
                  </b>
                </span>

                <span className="alert-type">
                  ◉ {alert.type}
                </span>

                <span className="profile">
                  ◉ {alert.profile}
                  <small>{alert.platform}</small>
                </span>

                <span>
                  <b className={`status ${alert.status.toLowerCase()}`}>
                    ● {alert.status}
                  </b>
                </span>

                <span className="actions">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAlert(alert);
                    }}
                  >
                    ◉
                  </button>

                  <button>⋮</button>
                </span>

              </div>

            ))}

          </div>

          {/* PAGINATION */}
          <div className="pagination">

            <span>Showing 1–8 of 23 alerts</span>

            <div>
              <button>‹</button>
              <button className="page-active">1</button>
              <button>2</button>
              <button>3</button>
              <button>›</button>
            </div>

          </div>

        </div>

        {/* DETAILS PANEL */}
        <aside className="alert-details">

          <div className="details-header">
            <h3>Alert Details</h3>
            <button>×</button>
          </div>

          <div className="detail-alert-title">

            <div className="detail-warning">⚠</div>

            <div>
              <h3>{selectedAlert.type.replace("\n", " ")}</h3>

              <p>
                Detected on {selectedAlert.date.replace("\n", " · ")}
              </p>
            </div>

            <span
              className={`severity-pill ${selectedAlert.severity.toLowerCase()}`}
            >
              ● {selectedAlert.severity}
            </span>

          </div>

          {/* PROFILE */}
          <div className="detail-profile">

            <div className="profile-avatar">S</div>

            <div>
              <strong>{selectedAlert.profile}</strong>
              <span>{selectedAlert.platform}</span>
            </div>

            <button>View Profile</button>

          </div>

          {/* RISK */}
          <div className="risk-box">

            <div>
              <span>Risk Score</span>
              <strong>78 <small>/100</small></strong>
            </div>

            <b className="high-risk">High Risk</b>

          </div>

          {/* DETAILS */}
          <div className="detail-section">

            <h4>Details</h4>

            <div className="detail-line">
              <span>Login Location</span>
              <b>New York, USA</b>
            </div>

            <div className="detail-line">
              <span>Device</span>
              <b>Unknown Device</b>
            </div>

            <div className="detail-line">
              <span>IP Address</span>
              <b>192.168.1.45</b>
            </div>

            <div className="detail-line">
              <span>Activity</span>
              <b>Login attempt (failed)</b>
            </div>

          </div>

          {/* REASON */}
          <div className="detail-section">

            <h4>Reason</h4>

            <ul>
              <li>Unusual login location</li>
              <li>Device not recognized</li>
              <li>Multiple failed login attempts</li>
            </ul>

          </div>

          {/* RECOMMENDATION */}
          <div className="recommendation">

            <h4>✓ Recommended Actions</h4>

            <p>✓ Verify the account ownership</p>
            <p>✓ Enable two-factor authentication</p>
            <p>✓ Monitor for further suspicious activity</p>

          </div>

          {/* BUTTONS */}
          <div className="detail-buttons">

            <button className="resolve">
              ✓ Mark as Resolved
            </button>

            <button className="investigate">
              ⌕ Investigate
            </button>

          </div>

        </aside>

      </section>

      <footer className="alerts-footer">
        <span>ThreatLens AI © 2025 | Digital Risk Protection Platform</span>
        <span>Safer People | Safer Brands | A Safer Tomorrow</span>
      </footer>

    </div>
  );
}

/* Small helper component */
function ReactLine({ children }) {
  return <div>{children}</div>;
}

export default Alerts;