import React from "react";
import "./PageStyles.css";

function HomePage() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">CivicConnect</div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Connect Citizens and Politicians for Better Governance</h1>
        <p>A simple, transparent, and responsive platform to improve civic engagement.</p>

        <div className="hero-buttons">
          <a className="btn primary" href="/login?role=citizen">Citizen Login</a>
          <a className="btn primary" href="/login?role=politician">Politician Login</a>
          <a className="btn primary" href="/login?role=moderator">Moderator Login</a>
          <a className="btn primary" href="/login?role=admin">Admin Login</a>
        </div>
      </section>

      <section className="container">
        <h2>Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>📢 Report Issues</h3>
            <p>Citizens can report issues with location & photos.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Transparency</h3>
            <p>Track issue progress from Submitted → Resolved.</p>
          </div>

          <div className="feature-card">
            <h3>💬 Feedback</h3>
            <p>Give feedback directly to elected representatives.</p>
          </div>

          <div className="feature-card">
            <h3>🔔 Politician Updates</h3>
            <p>Get announcements and development updates.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
