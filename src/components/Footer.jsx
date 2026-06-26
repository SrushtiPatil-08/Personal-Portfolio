import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.contentContainer}>
        <div style={styles.row}>
          <span style={styles.copy}>&copy; 2026 Portfon Studio. All rights reserved.</span>
          <div style={styles.socials}>
            <a href="https://github.com/SrushtiPatil-08" style={styles.link}>Github</a>
            <a href="https://www.linkedin.com/in/srushti-patil-126a03419/" style={styles.link}>LinkedIn</a>
            <a href="#twitter" style={styles.link}>Twitter</a>
            {/* Added contact number as a clickable tel link */}
            <a href="tel:+917798967379" style={styles.link}>+91 77989 67379</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { 
    width: '100%',
    backgroundColor: '#000000',
    padding: '40px 0',
    boxSizing: 'border-box',
    marginTop: '60px'
  },
  contentContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    boxSizing: 'border-box'
  },
  row: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
    gap: '20px' 
  },
  copy: { 
    color: '#94a3b8', 
    fontSize: '15px', 
    fontWeight: '500' 
  },
  socials: { 
    display: 'flex', 
    gap: '24px' 
  },
  link: { 
    color: '#ffffff', 
    textDecoration: 'none', 
    fontWeight: '600', 
    fontSize: '15px', 
    transition: 'opacity 0.2s ease' 
  }
};