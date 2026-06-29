import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <div className="login-root">
      {/* Left Panel */}
      <div className="login-left">
        <div className="login-left-inner">
          {/* Logo */}
          <Link to="/" className="login-logo">
            <div className="login-logo-icon">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" />
                <circle cx="8" cy="8" r="2.5" fill="white" />
              </svg>
            </div>
            <span className="login-logo-name">Folio</span>
          </Link>

          {/* Form Card */}
          <div className="login-card">
            <div className="login-card-header">
              <h1 className="login-title">Welcome back</h1>
              <p className="login-subtitle">
                Sign in to your account to continue
              </p>
            </div>

            {/* Social Login */}
            <div className="login-socials">
              <button className="social-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                  <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1a1a1a">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
            </div>

            <div className="login-divider">
              <span>or continue with email</span>
            </div>

            {/* Form */}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <div className="input-wrap">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="#AAA" strokeWidth="1.4"/>
                    <path d="M1 5.5l7 4.5 7-4.5" stroke="#AAA" strokeWidth="1.4"/>
                  </svg>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-label-row">
                  <label className="form-label">Password</label>
                  <a href="#" className="forgot-link">Forgot password?</a>
                </div>
                <div className="input-wrap">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="#AAA" strokeWidth="1.4"/>
                    <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="#AAA" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="show-pass-btn"
                    onClick={() => setShowPass((p) => !p)}
                  >
                    {showPass ? (
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M4.3 4.4C2.9 5.3 1.8 6.5 1 8c1.5 3 4 5 7 5 1.3 0 2.5-.4 3.6-1M7 3.1C7.3 3 7.7 3 8 3c3 0 5.5 2 7 5-.4.8-.9 1.5-1.5 2.1" stroke="#AAA" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path d="M1 8c1.5-3 4-5 7-5s5.5 2 7 5c-1.5 3-4 5-7 5s-5.5-2-7-5z" stroke="#AAA" strokeWidth="1.4"/>
                        <circle cx="8" cy="8" r="2" stroke="#AAA" strokeWidth="1.4"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className={`login-submit-btn${loading ? " loading" : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner" />
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            <p className="login-signup-text">
              Don't have an account?{" "}
              <a href="#" className="login-signup-link">Create one free</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="login-right">
        <div className="login-right-inner">
          <div className="login-showcase">
            <div className="showcase-label">
              <span className="showcase-dot" />
              Trending this week
            </div>
            {[
              { accent: "#6366F1", color: "#F0F4FF", title: "Brand Identity System", author: "Aryan Mehta", likes: "3.4k" },
              { accent: "#EC4899", color: "#FFF0F4", title: "Mobile App UI Kit", author: "Priya Sharma", likes: "2.9k" },
              { accent: "#10B981", color: "#F0FFF4", title: "Dashboard Design", author: "Rahul Verma", likes: "4.1k" },
            ].map((shot, i) => (
              <div className="showcase-card" key={i} style={{ "--delay": `${i * 0.1}s` }}>
                <div className="showcase-thumb" style={{ background: shot.color }}>
                  <svg width="80" height="60" viewBox="0 0 120 100" fill="none">
                    <rect x="10" y="20" width="60" height="60" rx="8" fill={shot.accent} opacity="0.15" />
                    <rect x="30" y="10" width="80" height="70" rx="12" fill={shot.accent} opacity="0.2" />
                    <rect x="20" y="30" width="50" height="40" rx="8" fill={shot.accent} opacity="0.8" />
                    <circle cx="85" cy="25" r="18" fill={shot.accent} opacity="0.6" />
                  </svg>
                </div>
                <div className="showcase-info">
                  <div className="showcase-title">{shot.title}</div>
                  <div className="showcase-author">{shot.author}</div>
                </div>
                <div className="showcase-likes">
                  <svg width="12" height="12" viewBox="0 0 13 13" fill="#EC4899">
                    <path d="M6.5 11S1 7.5 1 4.5a2.5 2.5 0 0 1 5.5-1A2.5 2.5 0 0 1 12 4.5C12 7.5 6.5 11 6.5 11z" stroke="#EC4899" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                  {shot.likes}
                </div>
              </div>
            ))}
          </div>

          <blockquote className="login-quote">
            <p>"Folio helped me land my dream job at a top design studio within 3 weeks."</p>
            <footer>
              <div className="quote-avatar" style={{ background: "#6366F1" }}>SK</div>
              <div>
                <div className="quote-name">Sneha Kapoor</div>
                <div className="quote-role">UI Designer · Hired via Folio</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;