import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { FaListAlt, FaSearch, FaSitemap, FaExchangeAlt, FaUserShield, FaSyncAlt, FaBrain, FaFilter, FaCheckCircle, FaBan, FaLayerGroup, FaReact } from 'react-icons/fa';
import { SiCss3, SiReactrouter, SiMui, SiReact } from 'react-icons/si';
import { LucideRocket } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <section className="hero">
        <div className="hero-left">
          <h1>Interactive Employee Organization Chart</h1>
          <p>
            A modern visual tool to explore, filter, and restructure teams with a dynamic drag-and-drop interface — built for growing organizations.
          </p>
          <button className="org-chart-btn" onClick={() => navigate('/chart')}>
            View Organization Chart
          </button>
        </div>
        <div className="hero-right">
          <img src="/Hero Image.png" alt="Org Chart Visual" />
        </div>
      </section>

      <section className="features">
        <h2 style={{ fontWeight: 400 }}>Key Functionalities</h2>
        <div className="features-grid">
          <div className="feature-card red">
            <span className="feature-icon"><FaListAlt /></span>
            <div className="feature-title">Employee List View</div>
            <div className="feature-desc">Displays employee name, designation, and team pulled from a mocked API.</div>
          </div>
          <div className="feature-card green">
            <span className="feature-icon"><FaSearch /></span>
            <div className="feature-title">Search & Filter</div>
            <div className="feature-desc">Search across name/designation/team or filter by specific teams with live result updates.</div>
          </div>
          <div className="feature-card blue">
            <span className="feature-icon"><FaSitemap /></span>
            <div className="feature-title">Org Hierarchy Chart</div>
            <div className="feature-desc">Displays a tree chart built from Manager ID relationships, with drag-and-drop reordering.</div>
          </div>
          <div className="feature-card orange">
            <span className="feature-icon"><FaExchangeAlt /></span>
            <div className="feature-title">Drag & Drop Reassignment</div>
            <div className="feature-desc">Reassign an employee by dragging them under a new manager updated via mock API.</div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2 style={{ fontWeight: 400 }}>Technology Stack</h2>
        <div className="tech-slider">
          <div className="slider-track">
            <div className="tech-item">
              <div className="tech-icon"><FaReact /></div>
              <div className="tech-name">React.js</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><SiReactrouter /></div>
              <div className="tech-name">React Router DOM</div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon"><SiMui /></div>
              <div className="tech-name">Material UI</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><LucideRocket size={32} color="#fb6406" /></div>
              <div className="tech-name">Lucide React</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><SiReact /></div>
              <div className="tech-name">React Icons</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><SiCss3 /></div>
              <div className="tech-name">CSS3</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FaReact /></div>
              <div className="tech-name">React.js</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><SiReactrouter /></div>
              <div className="tech-name">React Router DOM</div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon"><SiMui /></div>
              <div className="tech-name">Material UI</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><LucideRocket size={32} color="#fb6406" /></div>
              <div className="tech-name">Lucide React</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><SiReact /></div>
              <div className="tech-name">React Icons</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><SiCss3 /></div>
              <div className="tech-name">CSS3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="test-cases">
        <h2 style={{ fontWeight: 400 }}> Critical Test Cases</h2>
        <div className="test-cases-grid">
          <div className="test-case-card">
            <div className="test-case-icon"><FaUserShield /></div>
            <div className="test-case-title">CEO cannot be placed under a subordinate.</div>
          </div>
          <div className="test-case-card">
            <div className="test-case-icon"><FaSyncAlt /></div>
            <div className="test-case-title">Employee cannot be assigned under themselves.</div>
          </div>
          <div className="test-case-card">
            <div className="test-case-icon"><FaBrain /></div>
            <div className="test-case-title">Reassigning to the same manager triggers no update.</div>
          </div>
          <div className="test-case-card">
            <div className="test-case-icon"><FaFilter /></div>
            <div className="test-case-title">Search supports case-insensitive and partial match.</div>
          </div>
          <div className="test-case-card">
            <div className="test-case-icon"><FaSitemap /></div>
            <div className="test-case-title">Filtering updates both list and chart views.</div>
          </div>
          <div className="test-case-card">
            <div className="test-case-icon"><FaCheckCircle /></div>
            <div className="test-case-title">Drag-and-drop updates data and re-renders chart.</div>
          </div>
          <div className="test-case-card">
            <div className="test-case-icon"><FaBan /></div>
            <div className="test-case-title">Circular reference prevention on drop logic.</div>
          </div>
          <div className="test-case-card">
            <div className="test-case-icon"><FaLayerGroup /></div>
            <div className="test-case-title">Same-level reporting hierarchy renders correctly</div>
          </div>
        </div>
        <p style={{ fontSize: "0.95rem", color: "#777", marginTop: "2rem" }}>
        </p>
      </section>

      <section className="footer project-purpose-section">
        <div className="purpose-heading">
          <div className="purpose-main">Great teams aren’t just built</div>
          <div className="purpose-bold">they’re visualized, structured, and empowered.</div>
        </div>
        <p className="purpose-desc">
          This project was developed as part of the evaluation process for HappyFox. It showcases how frontend architecture, API simulation, and user-centric design can come together to solve real-world challenges.
        </p>
        <p className="purpose-desc">
          With intuitive features like filtering and drag-and-drop functionality, the Happy Organize Chart visualizer is crafted to simplify and enhance team management.
        </p>
        <p className="purpose-desc" style={{ marginBottom: 0 }}>
           <span className="highlight">Happy and looking forward to contribute to HappyFox</span>.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
