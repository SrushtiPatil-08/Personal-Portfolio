import React, { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export default function SelectedWorks() {
  const [revealRef, revealStyle] = useScrollReveal();
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    { 
      id: '01', 
      title: 'PrintOngo Website', 
      platform: 'E-Commerce Framework & Dynamic Customization Modules', 
      color: '#3b66f5', // Added missing comma
      pathlink: 'https://github.com/SrushtiPatil-08/PrintOnGo.git'
    },
    { 
      id: '02', 
      title: 'Lumiere Store Website', 
      platform: 'Responsive Web Design & Complex Layout Grid Implementation', 
      color: '#22c55e', // Added missing comma
      pathlink: 'https://lumiere-store-sepia.vercel.app/'
    }
  ];

  return (
    <div ref={revealRef} style={revealStyle(styles.container)}>
      <div style={styles.header}>
        <h3 style={styles.heading}>Production Work</h3>
        <span style={styles.countText}>({projects.length} Core Case Studies)</span>
      </div>

      <div style={styles.projectStripGrid}>
        {projects.map((proj) => {
          const active = hoveredId === proj.id;
          return (
            <div
              key={proj.id}
              style={{
                ...styles.projectStrip,
                backgroundColor: active ? '#ffffff' : '#0f172a', 
                border: active ? '1px solid #ffffff' : '1px solid rgba(255,255,255,0.15)',
                transform: active ? 'translateY(-4px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredId(proj.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={styles.leftRow}>
                <span style={{
                  ...styles.index, 
                  color: active ? '#3b66f5' : '#8ba7ff' 
                }}>
                  {proj.id}
                </span>
                <div>
                  <h4 style={{...styles.projTitle, color: active ? '#0f172a' : '#ffffff'}}>{proj.title}</h4>
                  <p style={{...styles.projPlatform, color: active ? '#475569' : '#cbd5e1'}}>{proj.platform}</p>
                </div>
              </div>
              
              {/* Changed from <div> to <a> and linked using proj.pathlink correctly */}
              <a 
                href={proj.pathlink}
                target="_blank"
                rel="noreferrer"
                style={{
                  ...styles.viewLabel,
                  opacity: active ? 1 : 0.8,
                  backgroundColor: active ? '#3b66f5' : 'rgba(255,255,255,0.1)',
                  color: active ? '#ffffff' : '#ffffff',
                  transform: active ? 'translateX(0)' : 'translateX(-5px)'
                }}
              >
                View Case ↗
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: { 
    width: '100%', 
    maxWidth: '1200px', 
    boxSizing: 'border-box', 
    padding: '40px 10px' 
  },
  header: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'baseline', 
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '10px'
  },
  heading: { 
    fontSize: 'clamp(28px, 5vw, 36px)', // Adapts text down smoothly on mobile screens
    fontWeight: '800', 
    margin: 0, 
    color: '#ffffff' 
  },
  countText: { 
    fontSize: '14px', 
    color: '#8ba7ff', 
    fontWeight: '600' 
  },
  projectStripGrid: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '16px',
    width: '100%'
  },
  projectStrip: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 20px', // Fluid defensive vertical/horizontal mobile padding configuration
    borderRadius: '24px',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    flexWrap: 'wrap', // Drops button neatly under text on small viewports
    gap: '20px'
  },
  leftRow: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '20px',
    flex: '1',
    minWidth: '260px' // Guarantees title layout structure doesn't compress text into vertical segments
  },
  index: { 
    fontSize: '18px', 
    fontWeight: '800', 
    transition: 'color 0.3s' 
  },
  projTitle: { 
    fontSize: 'clamp(20px, 4vw, 24px)', // Fluid typography scaling sizing variables
    fontWeight: '800', 
    margin: 0, 
    transition: 'color 0.3s', 
    letterSpacing: '-0.5px' 
  },
  projPlatform: { 
    fontSize: '13px', 
    margin: '6px 0 0 0', 
    fontWeight: '500', 
    lineHeight: '1.4',
    transition: 'color 0.3s' 
  },
  viewLabel: { 
    fontSize: '13px', 
    fontWeight: '600', 
    padding: '10px 20px', 
    borderRadius: '30px', 
    textDecoration: 'none', // Strips away native blue link lines
    display: 'inline-block',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease' 
  }
};