import { useState, useEffect } from "react";
import "./LandingPage.css";
import Header from "../components/navbar";

const shots = [
  { id: 1, title: "Brand Identity System", author: "Aryan Mehta", likes: 3421, color: "#F0F4FF", accent: "#6366F1", tag: "Branding" },
  { id: 2, title: "Mobile App UI Kit", author: "Priya Sharma", likes: 2890, color: "#FFF0F4", accent: "#EC4899", tag: "Mobile" },
  { id: 3, title: "Dashboard Design", author: "Rahul Verma", likes: 4102, color: "#F0FFF4", accent: "#10B981", tag: "Web" },
  { id: 4, title: "Logo Animation", author: "Sneha Kapoor", likes: 1987, color: "#FFFBF0", accent: "#F59E0B", tag: "Motion" },
  { id: 5, title: "E-commerce Redesign", author: "Karan Singh", likes: 5230, color: "#F5F0FF", accent: "#8B5CF6", tag: "Web" },
  { id: 6, title: "Icon Pack — 200+", author: "Nisha Patel", likes: 3744, color: "#F0FAFF", accent: "#0EA5E9", tag: "Icons" },
];

const tags = ["All", "Web", "Mobile", "Branding", "Motion", "Icons", "Illustration"];
const navLinks = ["Explore", "Hire a Designer", "Blog", "Pricing"];

function LandingPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [liked, setLiked] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLike = (id) =>
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  const filtered =
    activeTag === "All" ? shots : shots.filter((s) => s.tag === activeTag);

  return (
    <div>
      <Header />
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Now with AI-powered design discovery
        </div>

        <h1 className="hero-title">
          Where designers{" "}
          <em>share</em>
          <br />their best work
        </h1>

        <p className="hero-subtitle">
          Discover, connect, and get hired. The world's leading community for creative professionals.
        </p>

        <div className="search-container">
          <div className="search-wrap">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="7" cy="7" r="4.5" stroke="#AAA" strokeWidth="1.5" />
              <path d="M10.5 10.5L13 13" stroke="#AAA" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              placeholder="Search designers, shots, tags..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button className="cta-btn cta-btn--xs" style={{ flexShrink: 0 }}>Search</button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="avatar-stat">
            <div className="avatar-stack">
              {["#6366F1", "#EC4899", "#10B981", "#F59E0B"].map((c, i) => (
                <div key={i} className="avatar" style={{ background: c }}>
                  {["A", "P", "R", "S"][i]}
                </div>
              ))}
            </div>
            <span className="avatar-stat-text">
              Joined by <strong>50K+</strong> designers
            </span>
          </div>

          <div className="hero-stats-divider hide-mobile" />

          <div className="hero-stat hide-mobile">
            <div className="hero-stat-value">2.4M+</div>
            <div className="hero-stat-label">Shots uploaded</div>
          </div>

          <div className="hero-stats-divider hide-mobile" />

          <div className="hero-stat hide-mobile">
            <div className="hero-stat-value">180+</div>
            <div className="hero-stat-label">Countries</div>
          </div>
        </div>
      </section>

      {/* ── SHOTS GRID ── */}
      <section className="shots-section">
        <div className="shots-filters">
          {tags.map((t) => (
            <button
              key={t}
              className={`tag-pill${activeTag === t ? " active" : ""}`}
              onClick={() => setActiveTag(t)}
            >
              {t}
            </button>
          ))}
          <div className="shots-spacer" />
          <select className="sort-select">
            <option>Popular</option>
            <option>Latest</option>
            <option>Following</option>
          </select>
        </div>

        <div className="shot-grid">
          {filtered.map((shot) => (
            <div key={shot.id} className="shot-card">
              <div className="shot-img" style={{ background: shot.color }}>
                <div className="shot-img-inner">
                  <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                    <rect x="10" y="20" width="60" height="60" rx="8" fill={shot.accent} opacity="0.15" />
                    <rect x="30" y="10" width="80" height="70" rx="12" fill={shot.accent} opacity="0.2" />
                    <rect x="20" y="30" width="50" height="40" rx="8" fill={shot.accent} opacity="0.8" />
                    <circle cx="85" cy="25" r="18" fill={shot.accent} opacity="0.6" />
                    <rect x="60" y="55" width="45" height="6" rx="3" fill={shot.accent} opacity="0.4" />
                    <rect x="60" y="67" width="30" height="4" rx="2" fill={shot.accent} opacity="0.25" />
                  </svg>
                </div>
                <div className="shot-overlay" />
                <div className="shot-tag-badge">{shot.tag}</div>
              </div>

              <div className="shot-footer">
                <div className="shot-author">
                  <div
                    className="shot-avatar"
                    style={{ background: shot.accent }}
                  >
                    {shot.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="shot-title">{shot.title}</div>
                    <div className="shot-author-name">{shot.author}</div>
                  </div>
                </div>

                <button
                  className={`like-btn${liked[shot.id] ? " liked" : ""}`}
                  onClick={() => toggleLike(shot.id)}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill={liked[shot.id] ? "#EC4899" : "none"}
                  >
                    <path
                      d="M6.5 11S1 7.5 1 4.5a2.5 2.5 0 0 1 5.5-1A2.5 2.5 0 0 1 12 4.5C12 7.5 6.5 11 6.5 11z"
                      stroke={liked[shot.id] ? "#EC4899" : "currentColor"}
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {shot.likes + (liked[shot.id] ? 1 : 0)}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more">
          <button className="outline-btn">Load more shots</button>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2 className="cta-banner-title">
            Ready to show your <em>work?</em>
          </h2>
          <p className="cta-banner-subtitle">
            Join thousands of designers building their portfolio and getting hired on Folio.
          </p>
          <div className="cta-banner-actions">
            <button className="cta-btn cta-btn--light">Create free account</button>
            <button className="outline-btn outline-btn--dark">View showcase</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" />
                <circle cx="8" cy="8" r="2.5" fill="white" />
              </svg>
            </div>
            <span className="footer-logo-name">Folio</span>
          </div>

          <div className="footer-copy">© 2025 Folio, Inc. All rights reserved.</div>

          <div className="footer-links">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;