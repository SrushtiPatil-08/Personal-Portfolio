import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null); // Track which specific navigation item is hovered

  const navItems = [
    { label: 'Home', path: '/#home' },
    { label: 'About', path: '/#about' }, 
    { label: 'Services', path: '/#services' },
    { label: 'Works', path: '/#works' }
  ];

  return (
    <nav style={styles.navbar}>
      {/* Logo Group */}
      <NavHashLink to="/#home" style={{ ...styles.logoRow, cursor: 'pointer', textDecoration: 'none' }}>
        <div style={styles.logoIcon}></div>
        <span style={styles.logoText}>Srushti Patil</span>
      </NavHashLink>

      {/* Interactive Navigation Menu */}
      <div style={styles.navLinks}>
        {navItems.map((item) => {
          const isCurrentHovered = hoveredLink === item.label;
          
          return (
            <NavHashLink
              smooth
              key={item.label}
              to={item.path}
              onMouseEnter={() => setHoveredLink(item.label)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                ...styles.navLink,
                color: isCurrentHovered ? '#111111' : '#666666',
                fontWeight: isCurrentHovered ? '600' : '500',
                backgroundColor: isCurrentHovered ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
              }}
            >
              {item.label}
            </NavHashLink>
          );
        })}
      </div>

      {/* Premium Contact Button */}
      <NavHashLink 
        smooth
        to="/#experience" // Targets the experience section container
        style={{
          ...styles.btnPrimary,
          transform: isBtnHovered ? 'scale(1.04)' : 'scale(1)',
          backgroundColor: isBtnHovered ? '#2552e2' : '#111111',
          boxShadow: isBtnHovered ? '0 10px 25px rgba(37, 82, 226, 0.3)' : 'none',
          textDecoration: 'none'
        }}
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
      >
        <span style={styles.btnText}>Get In Touch</span>
        <div style={{
          ...styles.btnArrow, 
          backgroundColor: '#ffffff',
          color: '#111111',
          transform: isBtnHovered ? 'rotate(-45deg)' : 'none',
        }}>
          →
        </div>
      </NavHashLink>
    </nav>
  );
}

const styles = {
  navbar: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
    gap: '12px',
    position: 'fixed', 
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    padding: '12px 20px', 
    boxSizing: 'border-box',
    zIndex: 1000, 
    backgroundColor: 'rgba(226, 230, 234, 0.9)', 
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
  },
  logoRow: { display: 'flex', alignItems: 'center', gap: '8px' },
  logoIcon: { backgroundColor: '#3b66f5', width: '32px', height: '32px', borderRadius: '8px' },
  logoText: { fontWeight: '700', fontSize: '20px', color: '#111' },
  navLinks: { 
    display: 'flex', 
    gap: '4px', 
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    padding: '4px', 
    borderRadius: '30px', 
    overflowX: 'auto', 
    maxWidth: '100%'
  },
  navLink: { 
    border: 'none',
    textDecoration: 'none',
    fontFamily: 'inherit',
    fontSize: '13px', 
    padding: '6px 12px',
    borderRadius: '20px',
    whiteSpace: 'nowrap',
    transition: 'all 0.25s ease-in-out' 
  },
  btnPrimary: { 
    backgroundColor: '#111', 
    color: '#fff', 
    border: 'none', 
    borderRadius: '30px', 
    padding: '6px 6px 6px 24px', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '16px', 
    fontSize: '13px', 
    fontWeight: '600', 
    cursor: 'pointer', 
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' 
  },
  btnText: { letterSpacing: '-0.2px' },
  btnArrow: { 
    width: '34px', 
    height: '34px', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '16px', 
    fontWeight: 'bold', 
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' 
  }
};