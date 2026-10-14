import { useState } from "react";
import "./Investigation.css";

const investigations = [
  {
    id: "INV-1024",
    title: "Suspicious Login Activity",
    profile: "@john_doe",
    source: "Twitter",
    risk: "High",
    score: 78,
    status: "Open",
    time: "10 mins ago",
  },
  {
    id: "INV-1023",
    title: "Multiple Account Detection",
    profile: "@tech_user99",
    source: "Instagram",
    risk: "Medium",
    score: 64,
    status: "Investigating",
    time: "32 mins ago",
  },
  {
    id: "INV-1022",
    title: "Fake Followers Pattern",
    profile: "@marketingpro",
    source: "Twitter",
    risk: "High",
    score: 82,
    status: "Open",
    time: "1 hour ago",
  },
  {
    id: "INV-1021",
    title: "Unusual Activity Pattern",
    profile: "@user123",
    source: "Instagram",
    risk: "Medium",
    score: 51,
    status: "Resolved",
    time: "2 hours ago",
  },
  {
    id: "INV-1020",
    title: "Profile Information Mismatch",
    profile: "@creative_girl",
    source: "Facebook",
    risk: "Low",
    score: 28,
    status: "Resolved",
    time: "3 hours ago",
  },
];

export default function Investigation() {
  const [selected, setSelected] = useState(investigations[0]);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? investigations
      : investigations.filter((item) => item.risk === filter);

  return (
    <div className="investigation-page">

      {/* HEADER */}
      <div className="investigation-header">
        <div>
          <div className="investigation-title">
            <span className="investigation-icon">◎</span>

            <div>
              <h1>Investigations</h1>
              <p>
                Investigate suspicious profiles, analyze threats and
                track security incidents.
              </p>
            </div>
          </div>
        </div>

        <div className="investigation-live">
          <span></span>
          LIVE MONITORING
          <small>System operational</small>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="investigation-stats">

        <div className="investigation-stat blue">
          <span>◎</span>
          <div>
            <small>Total Investigations</small>
            <strong>24</strong>
            <p>↗ 12% this week</p>
          </div>
        </div>

        <div className="investigation-stat red">
          <span>⚠</span>
          <div>
            <small>High Risk Cases</small>
            <strong>8</strong>
            <p>Requires attention</p>
          </div>
        </div>

        <div className="investigation-stat yellow">
          <span>◈</span>
          <div>
            <small>Under Investigation</small>
            <strong>6</strong>
            <p>Currently active</p>
          </div>
        </div>

        <div className="investigation-stat green">
          <span>✓</span>
          <div>
            <small>Resolved Cases</small>
            <strong>10</strong>
            <p>↑ 18% this month</p>
          </div>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="investigation-grid">

        {/* CASE LIST */}
        <section className="investigation-panel case-panel">

          <div className="panel-header">
            <div>
              <h2>Active Investigations</h2>
              <p>Review and investigate detected threats</p>
            </div>

            <button className="new-investigation">
              + New Investigation
            </button>
          </div>

          {/* FILTERS */}
          <div className="investigation-filters">

            {["All", "High", "Medium", "Low"].map((item) => (
              <button
                key={item}
                className={filter === item ? "filter-active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}

            <input
              placeholder="Search investigations..."
            />

          </div>

          {/* TABLE */}
          <div className="investigation-table">

            <div className="investigation-table-head">
              <span>CASE</span>
              <span>PROFILE</span>
              <span>RISK</span>
              <span>SCORE</span>
              <span>STATUS</span>
              <span>TIME</span>
            </div>

            {filtered.map((item) => (

              <button
                className={
                  selected.id === item.id
                    ? "investigation-row selected-case"
                    : "investigation-row"
                }
                key={item.id}
                onClick={() => setSelected(item)}
              >

                <span>
                  <strong>{item.id}</strong>
                  <small>{item.title}</small>
                </span>

                <span className="profile-cell">
                  <div className="profile-avatar">
                    {item.profile.charAt(1).toUpperCase()}
                  </div>

                  <div>
                    <strong>{item.profile}</strong>
                    <small>{item.source}</small>
                  </div>
                </span>

                <span>
                  <b className={`risk-pill ${item.risk.toLowerCase()}`}>
                    {item.risk}
                  </b>
                </span>

                <span className="score">
                  {item.score}
                  <small>/100</small>
                </span>

                <span>
                  <b
                    className={`status-pill ${item.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.status}
                  </b>
                </span>

                <span className="time-cell">
                  {item.time}
                </span>

              </button>

            ))}

          </div>

        </section>

        {/* INVESTIGATION DETAILS */}
        <section className="investigation-panel details-panel">

          <div className="details-header">
            <div>
              <small>INVESTIGATION CASE</small>
              <h2>{selected.id}</h2>
            </div>

            <span className={`risk-pill ${selected.risk.toLowerCase()}`}>
              {selected.risk} Risk
            </span>
          </div>

          <div className="target-profile">

            <div className="large-avatar">
              {selected.profile.charAt(1).toUpperCase()}
            </div>

            <div>
              <h3>{selected.profile}</h3>
              <p>{selected.source} · Public Profile</p>
            </div>

            <button>View Profile</button>

          </div>

          {/* RISK SCORE */}
          <div className="risk-score-card">

            <div className="score-circle">
              <div>
                <strong>{selected.score}</strong>
                <small>/100</small>
              </div>
            </div>

            <div>
              <small>OVERALL RISK SCORE</small>
              <h3>
                {selected.risk === "High"
                  ? "High Risk Detected"
                  : selected.risk === "Medium"
                  ? "Moderate Risk"
                  : "Low Risk"}
              </h3>

              <p>
                AI analysis identified multiple risk
                indicators associated with this profile.
              </p>
            </div>

          </div>

          {/* FINDINGS */}
          <div className="findings">

            <h3>Key Findings</h3>

            <div className="finding danger">
              <span>●</span>
              <div>
                <strong>Suspicious Activity</strong>
                <p>Unusual account activity detected.</p>
              </div>
            </div>

            <div className="finding warning">
              <span>●</span>
              <div>
                <strong>Follower Pattern</strong>
                <p>Abnormal follower behaviour identified.</p>
              </div>
            </div>

            <div className="finding safe">
              <span>✓</span>
              <div>
                <strong>Profile Monitoring</strong>
                <p>Continuous monitoring is active.</p>
              </div>
            </div>

          </div>

          {/* TIMELINE */}
          <div className="timeline">

            <h3>Investigation Timeline</h3>

            <div className="timeline-item">
              <span></span>
              <div>
                <strong>Threat detected</strong>
                <small>10 minutes ago</small>
              </div>
            </div>

            <div className="timeline-item">
              <span></span>
              <div>
                <strong>AI risk analysis completed</strong>
                <small>9 minutes ago</small>
              </div>
            </div>

            <div className="timeline-item">
              <span></span>
              <div>
                <strong>Investigation opened</strong>
                <small>8 minutes ago</small>
              </div>
            </div>

          </div>

          {/* ACTIONS */}
          <div className="investigation-actions">

            <button className="resolve-button">
              ✓ Mark as Resolved
            </button>

            <button className="report-button">
              ▤ Generate Report
            </button>

          </div>

        </section>

      </div>

    </div>
  );
}