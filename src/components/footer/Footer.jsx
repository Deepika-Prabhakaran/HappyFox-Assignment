import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-grid">
      <div className="footer-logo">
        <img
          src="//assets.www.happyfox.com/v2/images/zendesk-alternative/hf-mini.png"
          width="35px"
          alt="HappyFox Logo"
        />
      </div>

      <div className="footer-section">
        <h4>Features</h4>
        <ul>
          <li>Org Chart Viewer</li>
          <li>Search & Filter</li>
          <li>Drag & Drop</li>
          <li>Team Management</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Use Cases</h4>
        <ul>
          <li>Team Restructuring</li>
          <li>Hierarchy Planning</li>
          <li>Real-Time Reassignments</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>Email: deepikaprabhakaran54@gmail.com</li>
          <li>Phone: +91 90032 74501</li>
          <li>Location: India (Remote)</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
