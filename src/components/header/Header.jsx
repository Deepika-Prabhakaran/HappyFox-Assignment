import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { IconButton} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <Link to="/">
            <div className="logo-placeholder">
              <img src="//assets.www.happyfox.com/v2/images/zendesk-alternative/hf-mini.png" width="25px" alt="" />
            </div>
          </Link>
        </div>
        <div className="app-info">
          <h1 className="app-title">HappyFox Organize</h1>
        </div>
      </div>
      
      <div className="header-right">
        <nav className="header-nav">
          <Link to="/chart" className="nav-link">
            Organization Chart
          </Link>
        </nav>
        
        <div className="header-controls">
          <IconButton className="control-btn">
            <NotificationsIcon />
          </IconButton>
          <div className="user-avatar">
            <span>U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
