import { useState } from "react";
import "./loginpage.css";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    onLogin();
  }

  return (
    <div className="login-page">

      {/* Background effects */}
      <div className="bg-glow glow-one"></div>
      <div className="bg-glow glow-two"></div>
      <div className="grid-background"></div>

      <div className="login-container">

        {/* LEFT SIDE */}
        <section className="login-left">

          <div className="brand">
            <div className="brand-shield">◈</div>

            <div>
              <h2>
                ThreatLens <span>AI</span>
              </h2>
              <p>DIGITAL RISK PROTECTION PLATFORM</p>
            </div>
          </div>

          <div className="hero-content">

            <div className="small-line">
              ─ Smarter Detection. Safer Tomorrow.
            </div>

            <h1>
              AI-Powered Threat
              <br />
              Intelligence for a
              <br />
              <span>Safer Digital World</span>
            </h1>

            <p className="hero-description">
              Detect. Analyze. Protect. ThreatLens AI helps you identify
              and mitigate digital risks before they become threats.
            </p>

            <div className="feature-row">

              <div className="feature">
                <div className="feature-icon">◉</div>
                <div>
                  <strong>Real-time</strong>
                  <span>Threat Detection</span>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">✦</div>
                <div>
                  <strong>AI-Powered</strong>
                  <span>Risk Analysis</span>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">↗</div>
                <div>
                  <strong>Actionable</strong>
                  <span>Insights</span>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">♙</div>
                <div>
                  <strong>Stronger</strong>
                  <span>Security Posture</span>
                </div>
              </div>

            </div>

            {/* Security illustration */}
            <div className="security-visual">

              <div className="visual-card card-one">
                <span>THREAT LEVEL</span>
                <strong>LOW</strong>
              </div>

              <div className="visual-card card-two">
                <span>RISK ANALYSIS</span>
                <strong>98%</strong>
              </div>

              <div className="shield-large">
                <div className="shield-symbol">🔒</div>
              </div>

              <div className="visual-card card-three">
                <span>PROTECTION</span>
                <strong>ACTIVE</strong>
              </div>

            </div>

          </div>

          <div className="left-footer">
            THREATLENS AI &nbsp; — &nbsp; DIGITAL RISK PROTECTION PLATFORM
          </div>

        </section>

        {/* RIGHT SIDE */}
        <section className="login-right">

          <div className="login-card">

            <div className="login-logo">
              <div className="login-shield">◈</div>
              <h2>
                ThreatLens <span>AI</span>
              </h2>
            </div>

            <h1>Welcome Back</h1>

            <p className="login-subtitle">
              Sign in to your account to continue
            </p>

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <label>Email Address</label>

              <div className="input-box">
                <span>✉</span>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* PASSWORD */}
              <label>Password</label>

              <div className="input-box">
                <span>♙</span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "◉" : "◌"}
                </button>
              </div>

              {/* OPTIONS */}
              <div className="login-options">

                <label className="remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="forgot"
                  onClick={() => alert("Password reset feature coming soon.")}
                >
                  Forgot password?
                </button>

              </div>

              {/* ERROR */}
              {error && (
                <div className="login-error">
                  {error}
                </div>
              )}

              {/* SIGN IN */}
              <button type="submit" className="signin-button">
                <span>→</span>
                Sign In
              </button>

              {/* DIVIDER */}
              <div className="divider">
                <span></span>
                <p>OR</p>
                <span></span>
              </div>

              {/* GOOGLE */}
              <button
                type="button"
                className="google-button"
                onClick={() => alert("Google login will be connected later.")}
              >
                <strong>G</strong>
                Continue with Google
              </button>

              <p className="signup-text">
                Don't have an account?
                <button
                  type="button"
                  onClick={() => alert("Sign up page coming soon.")}
                >
                  Sign Up
                </button>
              </p>

            </form>

          </div>

        </section>

      </div>

    </div>
  );
}

export default LoginPage;