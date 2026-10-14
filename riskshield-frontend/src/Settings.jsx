import { useState } from "react";
import "./settings.css";

export default function Settings() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [threatAlerts, setThreatAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="settings-page">

      <div className="settings-header">
        <div>
          <div className="settings-label">SYSTEM CONFIGURATION</div>
          <h1>Settings <span>⚙</span></h1>
          <p>Manage your ThreatLens AI security preferences.</p>
        </div>
      </div>

      <div className="settings-grid">

        {/* SECURITY */}
        <section className="settings-card">
          <div className="settings-card-title">
            <div className="settings-icon blue">🛡️</div>
            <div>
              <h2>Security Preferences</h2>
              <p>Configure your security monitoring settings.</p>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>Threat Alerts</strong>
              <small>Receive alerts when high-risk activity is detected.</small>
            </div>

            <button
              className={`toggle ${threatAlerts ? "on" : ""}`}
              onClick={() => setThreatAlerts(!threatAlerts)}
            >
              <span />
            </button>
          </div>

          <div className="setting-row">
            <div>
              <strong>Email Notifications</strong>
              <small>Receive important security reports by email.</small>
            </div>

            <button
              className={`toggle ${emailAlerts ? "on" : ""}`}
              onClick={() => setEmailAlerts(!emailAlerts)}
            >
              <span />
            </button>
          </div>

          <div className="setting-row">
            <div>
              <strong>Automatic Monitoring</strong>
              <small>Continuously monitor configured profiles.</small>
            </div>

            <span className="active-status">
              ● Active
            </span>
          </div>
        </section>

        {/* APPEARANCE */}
        <section className="settings-card">
          <div className="settings-card-title">
            <div className="settings-icon purple">◐</div>
            <div>
              <h2>Appearance</h2>
              <p>Customize your dashboard experience.</p>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>Dark Mode</strong>
              <small>Use the dark interface for security operations.</small>
            </div>

            <button
              className={`toggle ${darkMode ? "on" : ""}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span />
            </button>
          </div>

          <div className="theme-preview">
            <div className="preview-window">
              <div />
              <div />
              <div />
            </div>

            <div>
              <strong>ThreatLens Dark</strong>
              <small>Recommended for security monitoring</small>
            </div>
          </div>
        </section>

        {/* ACCOUNT */}
        <section className="settings-card">
          <div className="settings-card-title">
            <div className="settings-icon green">👤</div>
            <div>
              <h2>Account</h2>
              <p>Your administrator account information.</p>
            </div>
          </div>

          <div className="account-box">
            <div className="settings-avatar">S</div>

            <div>
              <strong>Sushma</strong>
              <span>Security Administrator</span>
              <small>ThreatLens AI Workspace</small>
            </div>
          </div>

          <div className="account-info">
            <div>
              <small>ROLE</small>
              <strong>Administrator</strong>
            </div>

            <div>
              <small>STATUS</small>
              <strong className="online">● Active</strong>
            </div>
          </div>
        </section>

        {/* AI ENGINE */}
        <section className="settings-card ai-settings">
          <div className="settings-card-title">
            <div className="settings-icon cyan">✦</div>
            <div>
              <h2>AI Threat Engine</h2>
              <p>ThreatLens intelligent analysis system.</p>
            </div>
          </div>

          <div className="engine-status">
            <div className="engine-dot" />

            <div>
              <strong>AI Engine Online</strong>
              <small>All detection systems operational</small>
            </div>

            <span>ONLINE</span>
          </div>

          <div className="engine-metrics">
            <div>
              <strong>99.8%</strong>
              <small>Detection uptime</small>
            </div>

            <div>
              <strong>24/7</strong>
              <small>Monitoring</small>
            </div>

            <div>
              <strong>AI</strong>
              <small>Risk analysis</small>
            </div>
          </div>
        </section>

      </div>

      <div className="settings-footer">
        <span>ThreatLens AI © 2026</span>
        <span>● All systems operational</span>
      </div>

    </div>
  );
}