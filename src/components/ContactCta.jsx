import React, { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export default function ContactCta() {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // Local state to display content inside the component
  const [revealRef, revealStyle] = useScrollReveal();

  const handleActionClick = (e) => {
    e.preventDefault();
    setShowDetails(!showDetails); // Toggles view internally without page redirection
  };

  return (
    <div 
      ref={revealRef}
      style={revealStyle({
        ...styles.lightBlueCard,
        transform: isHovered ? 'scale(1.01)' : 'scale(1)'
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.handsImageContainer}>
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" 
          alt="Collaboration Hands" 
          style={{...styles.handsImg, transform: isHovered ? 'scale(1.05)' : 'scale(1)'}}
        />
      </div>

      <div>
        <div style={styles.badgeLabel}>Production Ready Codebase</div>
        <h2 style={styles.ctaHeading}>Let's Build Together</h2>
        <p style={styles.ctaDesc}>
          Applying learned development workflows to build robust, interactive production projects.
        </p>

        {/* Conditionally rendered internal detail box */}
        {showDetails && (
          <div style={styles.internalDrawer}>
            <p style={styles.drawerText}><strong>GitHub Workspace:</strong>https://github.com/SrushtiPatil-08</p>
            <p style={styles.drawerText}><strong>Live Deployments:</strong> PrintOngo & Lumiere Store Modules</p>
          </div>
        )}

        <button 
          onClick={handleActionClick}
          style={{...styles.btnPrimary, backgroundColor: isHovered ? '#3b66f5' : '#111'}}
        >
          <span>{showDetails ? 'Hide Details' : 'View Project Highlights'}</span>
          <div style={{
            ...styles.btnArrow,
            transform: showDetails ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.3s'
          }}>→</div>
        </button>
      </div>
    </div>
  );
}

const styles = {
  lightBlueCard: { background: 'linear-gradient(180deg, #b0c6ff 0%, #f4f7ff 100%)', borderRadius: '28px', padding: '30px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', gridRow: 'span 2', minHeight: '584px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' },
  handsImageContainer: { height: '240px', borderRadius: '20px', overflow: 'hidden', marginBottom: '20px' },
  handsImg: { width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'luminosity', opacity: 0.8, transition: 'transform 0.6s ease' },
  badgeLabel: { display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.6)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', marginBottom: '15px', color: '#111' },
  ctaHeading: { fontSize: '32px', fontWeight: '800', color: '#111', margin: '0 0 8px 0' },
  ctaDesc: { fontSize: '14px', color: '#445', margin: 0, lineHeight: '1.4' },
  internalDrawer: { backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '15px', borderRadius: '16px', marginTop: '15px', border: '1px solid rgba(255, 255, 255, 0.5)', animation: 'fadeIn 0.3s ease' },
  drawerText: { margin: '4px 0', fontSize: '13px', color: '#222' },
  btnPrimary: { backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '30px', padding: '6px 6px 6px 20px', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', width: '100%', marginTop: '20px', justifyContent: 'space-between', transition: 'background-color 0.3s' },
  btnArrow: { backgroundColor: '#fff', color: '#111', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 'bold' }
};