import { useState } from "react";
import "./threat-scanner.css";

const API_URL = "http://127.0.0.1:8001";

export default function ThreatScanner() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const scanProfile = async () => {
    if (!username.trim()) {
      setError("Please enter a username or profile URL.");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const cleanUsername = username
        .trim()
        .replace(/^@/, "")
        .split("/")
        .filter(Boolean)
        .pop();

      const response = await fetch(`${API_URL}/scan-profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: cleanUsername,
          bio: "",
          followers: 0,
          following: 0,
          verified: false,
          account_age_days: 0,
          profile: username.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Backend scan failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(
        "Unable to connect to the AI risk engine. Make sure your backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scanner-page">

      {/* HEADER */}
      <div className="scanner-header">

        <div className="scanner-title">
          <div className="scanner-title-icon">◎</div>

          <div>
            <h1>Threat Scanner</h1>
            <p>
              Scan any online profile, account or identity to detect
              potential risks, suspicious activity and digital threats.
            </p>
          </div>
        </div>

        <div className="ai-analysis">
          <div className="ai-shield">AI</div>

          <div>
            <strong>AI-Powered Analysis</strong>
            <span>Detect • Analyze • Protect</span>
          </div>
        </div>

      </div>


      {/* SCAN SECTION */}
      <div className="scanner-grid">

        <div className="scan-box">

          <div className="scan-tabs">
            <button className="active-tab">
              👤 Profile Scan
            </button>

            <button>
              🔗 URL Scan
            </button>

            <button>
              @ Username Scan
            </button>

            <button>
              ▣ Bulk Scan
            </button>
          </div>

          <div className="scan-input-section">

            <label>
              Enter Profile URL / Username / Handle
            </label>

            <div className="scan-input-row">

              <div className="scanner-input">

                <span>🔗</span>

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      scanProfile();
                    }
                  }}
                  placeholder="e.g. https://twitter.com/john_doe or @john_doe"
                />

              </div>

              <button
                className="scan-button"
                onClick={scanProfile}
                disabled={loading}
              >
                {loading ? "Scanning..." : "◎ Scan Now →"}
              </button>

            </div>

            <div className="quick-examples">

              <span>Quick Examples:</span>

              <button onClick={() => setUsername("@elonmusk")}>
                @elonmusk
              </button>

              <button
                onClick={() =>
                  setUsername("https://instagram.com/example")
                }
              >
                instagram.com/example
              </button>

              <button onClick={() => setUsername("@user123")}>
                @user123
              </button>

            </div>

          </div>

        </div>


        {/* WHAT WE ANALYZE */}
        <div className="analysis-box">

          <h3>What We Analyze?</h3>

          <div className="analysis-item">
            <div className="analysis-icon red">◉</div>

            <div>
              <strong>Fake & Suspicious Accounts</strong>
              <span>Detect impersonation and bot activity</span>
            </div>
          </div>

          <div className="analysis-item">
            <div className="analysis-icon purple">◉</div>

            <div>
              <strong>Behavioral Analysis</strong>
              <span>Find unusual patterns and anomalies</span>
            </div>
          </div>

          <div className="analysis-item">
            <div className="analysis-icon yellow">◉</div>

            <div>
              <strong>Social Engineering Risks</strong>
              <span>Identify phishing and fraud indicators</span>
            </div>
          </div>

          <div className="analysis-item">
            <div className="analysis-icon green">◉</div>

            <div>
              <strong>Reputation & Exposure</strong>
              <span>Check for leaks and digital exposure</span>
            </div>
          </div>

        </div>

      </div>


      {/* RESULTS */}
      <div className="results-grid">

        {/* SCAN RESULTS */}
        <div className="results-box">

          <div className="box-heading">
            <span>◎</span>
            <h2>Scan Results</h2>
          </div>

          {!result && !loading && (

            <div className="empty-result">

              <div className="scanner-animation">
                ⌕
              </div>

              <h3>No scan results yet</h3>

              <p>
                Enter a profile URL or username above and click
                Scan Now to see the detailed AI analysis.
              </p>

              <div className="tip">
                💡 Tip: For best results, use public profiles and valid usernames.
              </div>

            </div>

          )}


          {loading && (

            <div className="empty-result">

              <div className="loading-circle">
                ◎
              </div>

              <h3>Analyzing Profile...</h3>

              <p>
                AI engine is checking profile risk indicators.
              </p>

            </div>

          )}


          {result && (

            <div className="result-card">

              <div className="profile-result">

                <div className="profile-avatar">
                  {result.username?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <div>
                  <h3>
                    @{result.username || "profile"}
                  </h3>

                  <p>
                    AI risk analysis completed
                  </p>
                </div>

                <span
                  className={`risk-pill ${
                    result.risk_level?.toLowerCase()
                  }`}
                >
                  {result.risk_level} RISK
                </span>

              </div>

              <div className="risk-score">

                <div className="score-circle">
                  <strong>{result.risk_score}</strong>
                  <span>Risk Score</span>
                </div>

                <div className="score-info">

                  <h3>Risk Assessment</h3>

                  <p>
                    {result.recommendation}
                  </p>

                  <div className="result-reasons">

                    {result.reasons?.map((reason, index) => (
                      <div key={index}>
                        <span>•</span>
                        {reason}
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          )}

          {error && (
            <div className="scanner-error">
              ⚠ {error}
            </div>
          )}

        </div>


        {/* EXAMPLE RESULT */}
        <div className="example-result">

          <div className="box-heading">
            <span>◉</span>
            <h2>Example Scan Result</h2>
          </div>

          <div className="example-profile">

            <div className="example-avatar">
              J
            </div>

            <div>
              <strong>@john_doe</strong>
              <small>Scanned profile · AI analysis</small>
            </div>

            <span className="high-risk">
              High Risk
            </span>

          </div>


          <div className="example-risk">

            <div className="example-score">
              <strong>78</strong>
              <span>Risk Score</span>
            </div>

            <div className="breakdown">

              <h4>Risk Breakdown</h4>

              <div>
                <i className="red-dot" />
                Fake Followers
                <b>32%</b>
              </div>

              <div>
                <i className="yellow-dot" />
                Suspicious Activity
                <b>24%</b>
              </div>

              <div>
                <i className="blue-dot" />
                Inactive Account
                <b>18%</b>
              </div>

              <div>
                <i className="purple-dot" />
                Other Indicators
                <b>26%</b>
              </div>

            </div>

          </div>


          <div className="findings-grid">

            <div className="findings">

              <h4>⚠ Key Findings</h4>

              <p>• Unusual follower spike detected</p>
              <p>• Multiple accounts from same device</p>
              <p>• Suspicious activity pattern</p>
              <p>• Potential fake engagement</p>

            </div>

            <div className="recommendations">

              <h4>✓ Recommended Actions</h4>

              <p>✓ Monitor for suspicious activity</p>
              <p>✓ Verify identity and profile details</p>
              <p>✓ Check linked accounts</p>
              <p>✓ Consider additional verification</p>

            </div>

          </div>

          <button className="report-button">
            ▣ View Full Report →
          </button>

        </div>

      </div>

    </div>
  );
}