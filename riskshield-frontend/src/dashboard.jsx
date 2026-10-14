import { useState } from "react";
import "./dashboard.css";

import ThreatScanner from "./ThreatScanner.jsx";
import Alerts from "./Alerts.jsx";
import Investigation from "./Investigation.jsx";
import Reports from "./Reports.jsx";
import Settings from "./Settings.jsx";

const stats = [
  {
    title: "Total Scans",
    value: "128",
    change: "+12% from last week",
    icon: "🛡️",
    type: "blue",
  },
  {
    title: "High Risk Profiles",
    value: "8",
    change: "+3% from last week",
    icon: "⚠️",
    type: "red",
  },
  {
    title: "Medium Risk Profiles",
    value: "24",
    change: "+5% from last week",
    icon: "⚠️",
    type: "yellow",
  },
  {
    title: "Low Risk Profiles",
    value: "96",
    change: "+10% from last week",
    icon: "✓",
    type: "green",
  },
];

const activities = [
  ["🛡️", "Profile scanned - john_doe", "Low Risk · 2 mins ago", "low"],
  ["⚠️", "Threat detected - suspicious_user", "High Risk · 15 mins ago", "high"],
  ["⚠️", "Profile scanned - marketing_influencer", "Medium Risk · 32 mins ago", "medium"],
  ["📄", "Report generated - Oct 12, 2025", "Info · 1 hour ago", "info"],
  ["🛡️", "Profile scanned - tech_ghost", "Low Risk · 2 hours ago", "low"],
];

const alerts = [
  ["⚠️", "Suspicious login activity detected", "High · 10 mins ago", "high"],
  ["⚠️", "Unusual follower spike", "Medium · 28 mins ago", "medium"],
  ["⚠️", "Multiple accounts from same device", "Medium · 1 hour ago", "medium"],
  ["🛡️", "New threat indicator found", "Low · 2 hours ago", "low"],
];

const scans = [
  ["john_doe123", "Low", "Oct 13, 10:12 AM"],
  ["creative_girl", "Medium", "Oct 13, 09:45 AM"],
  ["tech_user99", "High", "Oct 13, 08:32 AM"],
  ["marketingpro", "Medium", "Oct 13, 07:18 AM"],
  ["silent_ninja", "Low", "Oct 13, 05:50 AM"],
];

function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  const menu = [
    ["⌂", "Dashboard"],
    ["⌕", "Threat Scanner"],
    ["♧", "Alerts"],
    ["◎", "Investigations"],
    ["▤", "Reports"],
    ["⚙", "Settings"],
  ];

  // -----------------------------
  // PAGE CONTENT
  // -----------------------------

  const renderPage = () => {
    if (activePage === "Threat Scanner") {
      return <ThreatScanner />;
    }

    if (activePage === "Alerts") {
      return <Alerts />;
    }

    if (activePage === "Investigations") {
      return <Investigation />;
    }

    if (activePage === "Reports") {
      return <Reports />;
    }

    if (activePage === "Settings") {
      return <Settings />;
    }

    // Default = Dashboard
    return (
      <>
        {/* HEADER */}
        <header className="header">
          <div>
            <h1>
              Good Morning, <span>Sushma 👋</span>
            </h1>

            <p>
              Here's your security overview for today.
              Stay safe, stay ahead!
            </p>
          </div>

          <div className="date-box">
            <span>▣</span>

            <div>
              <small>Monday, 13 October 2025</small>
              <strong>10:24 AM</strong>
            </div>
          </div>
        </header>

        {/* STATS */}
        <section className="stats">
          {stats.map((item) => (
            <div
              className={`stat-card ${item.type}`}
              key={item.title}
            >
              <div className="stat-top">
                <span>{item.icon}</span>
                <small>{item.title}</small>
              </div>

              <h2>{item.value}</h2>

              <p>↗ {item.change}</p>

              <div className="mini-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          ))}
        </section>

        {/* MIDDLE */}
        <section className="middle-grid">

          {/* RISK TREND */}
          <div className="panel threat-chart">

            <div className="panel-title">
              <div>
                <h3>◈ Risk Trend Overview</h3>
                <p>
                  Overall risk level trend over the last 7 days
                </p>
              </div>

              <button>Last 7 Days⌄</button>
            </div>

            <div className="graph">

              <div className="y-axis">
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>

              <div className="graph-area">

                <div className="grid-lines">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <svg viewBox="0 0 700 220">

                  <polyline
                    points="0,135 110,105 220,125 330,90 440,55 550,78 700,92"
                    fill="none"
                    stroke="#00e5b0"
                    strokeWidth="3"
                  />

                  <polyline
                    points="0,155 110,130 220,145 330,125 440,95 550,110 700,125"
                    fill="none"
                    stroke="#ffb000"
                    strokeWidth="3"
                  />

                  <polyline
                    points="0,185 110,170 220,178 330,165 440,145 550,158 700,165"
                    fill="none"
                    stroke="#ff3d6e"
                    strokeWidth="3"
                  />

                </svg>

                <div className="days">
                  <span>Oct 7</span>
                  <span>Oct 8</span>
                  <span>Oct 9</span>
                  <span>Oct 10</span>
                  <span>Oct 11</span>
                  <span>Oct 12</span>
                  <span>Oct 13</span>
                </div>

              </div>
            </div>

            <div className="legend">
              <span className="red-dot">◆ High Risk</span>
              <span className="yellow-dot">◆ Medium Risk</span>
              <span className="green-dot">◆ Low Risk</span>
            </div>

          </div>

          {/* RISK DISTRIBUTION */}
          <div className="panel distribution">

            <h3>◉ Risk Distribution</h3>

            <p>Profile risk level breakdown</p>

            <div className="donut">
              <div>
                <strong>128</strong>
                <small>Total Scans</small>
              </div>
            </div>

            <div className="risk-list">

              <div>
                <span className="dot red" />
                High Risk
                <b>8</b>
                <small>6%</small>
              </div>

              <div>
                <span className="dot yellow" />
                Medium Risk
                <b>24</b>
                <small>19%</small>
              </div>

              <div>
                <span className="dot green" />
                Low Risk
                <b>96</b>
                <small>75%</small>
              </div>

            </div>

          </div>

        </section>

        {/* BOTTOM */}
        <section className="bottom-grid">

          {/* THREAT INDICATORS */}
          <div className="panel indicators">

            <h3>◉ Top Threat Indicators</h3>

            <p>Most common risk factors</p>

            {[
              ["Fake Followers", 32, "25%", "red"],
              ["Suspicious Activity", 24, "19%", "yellow"],
              ["Inactive Account", 18, "14%", "blue"],
              ["High Engagement", 12, "9%", "purple"],
              ["Other Indicators", 42, "33%", "gray"],
            ].map((item) => (

              <div className="indicator" key={item[0]}>

                <div>
                  <span>{item[0]}</span>
                  <b>{item[1]}</b>
                  <small>{item[2]}</small>
                </div>

                <div className="bar">
                  <i
                    className={item[3]}
                    style={{ width: item[2] }}
                  />
                </div>

              </div>

            ))}

          </div>

          {/* RECENT SCANS */}
          <div className="panel recent-scans">

            <div className="panel-title">

              <div>
                <h3>◷ Recent Scans</h3>
              </div>

              <button>View all</button>

            </div>

            <div className="table-head">
              <span>PROFILE / USERNAME</span>
              <span>RISK LEVEL</span>
              <span>DATE</span>
            </div>

            {scans.map((scan) => (

              <div
                className="scan-row"
                key={scan[0]}
              >

                <span>◉ {scan[0]}</span>

                <span>
                  <b
                    className={`risk-badge ${scan[1].toLowerCase()}`}
                  >
                    {scan[1]}
                  </b>
                </span>

                <span>{scan[2]}</span>

              </div>

            ))}

          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column">

            {/* RECENT ACTIVITY */}
            <div className="panel activity">

              <div className="panel-title">
                <h3>◉ Recent Activity</h3>

                <button>View all</button>
              </div>

              {activities.map((item, index) => (

                <div
                  className="activity-item"
                  key={index}
                >

                  <span
                    className={`activity-icon ${item[3]}`}
                  >
                    {item[0]}
                  </span>

                  <div>
                    <strong>{item[1]}</strong>
                    <small>{item[2]}</small>
                  </div>

                  <b>›</b>

                </div>

              ))}

            </div>

            {/* ALERTS */}
            <div className="panel alerts">

              <div className="panel-title">

                <h3>⚠ Latest Alerts</h3>

                <button
                  onClick={() => setActivePage("Alerts")}
                >
                  View all
                </button>

              </div>

              {alerts.map((item, index) => (

                <div
                  className="activity-item"
                  key={index}
                >

                  <span
                    className={`activity-icon ${item[3]}`}
                  >
                    {item[0]}
                  </span>

                  <div>
                    <strong>{item[1]}</strong>
                    <small>{item[2]}</small>
                  </div>

                  <b>›</b>

                </div>

              ))}

            </div>

            {/* AI CTA */}
            <div className="ai-cta">

              <div className="big-shield">
                ♢
              </div>

              <div>
                <h3>AI-Powered Threat Detection</h3>

                <p>
                  Advanced machine learning models
                  for real-time risk analysis and protection.
                </p>
              </div>

              <button
                onClick={() =>
                  setActivePage("Threat Scanner")
                }
              >
                Start New Scan →
              </button>

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <footer>
          <span>
            ThreatLens AI © 2025 |
            Digital Risk Protection Platform
          </span>

          <span>
            Safer People | Safer Brands | A Safer Tomorrow
          </span>
        </footer>
      </>
    );
  };

  return (
    <div className="dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        {/* LOGO */}
        <div className="logo">

          <div className="logo-shield">
            ⬡
          </div>

          <div>
            <h2>
              ThreatLens <span>AI</span>
            </h2>

            <p>
              DIGITAL RISK PROTECTION
            </p>
          </div>

        </div>

        {/* MENU */}
        <nav>

          {menu.map(([icon, name]) => (

            <button
              key={name}
              className={
                activePage === name
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() => setActivePage(name)}
            >

              <span className="nav-icon">
                {icon}
              </span>

              <span>
                {name}
              </span>

              {name === "Alerts" && (
                <b className="alert-number">
                  3
                </b>
              )}

            </button>

          ))}

        </nav>

        {/* SIDEBAR BOTTOM */}
        <div className="sidebar-bottom">

          <div className="ai-card">

            <div className="ai-icon">
              ♙
            </div>

            <h3>
              Smarter Security
              <br />
              with AI
            </h3>

            <p>
              Detect. Analyze. Protect.
              <br />
              All in one platform.
            </p>

            <div className="wave" />

          </div>

          <div className="user">

            <div className="avatar">
              S
            </div>

            <div>
              <strong>
                Sushma
              </strong>

              <small>
                Security Admin
              </small>
            </div>

            <span>
              •••
            </span>

          </div>

        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="main">

        {/* BACK BUTTON FOR OTHER PAGES */}

        {activePage !== "Dashboard" && (
          <div
            style={{
              padding: "15px 25px 0",
            }}
          >

            <button
              onClick={() => setActivePage("Dashboard")}
              style={{
                background: "#151b2e",
                color: "#ffffff",
                border: "1px solid #2c3855",
                padding: "10px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              ← Back to Dashboard
            </button>

          </div>
        )}

        {renderPage()}

      </main>

    </div>
  );
}

export default Dashboard;