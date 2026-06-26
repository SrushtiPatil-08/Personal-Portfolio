import React, { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export default function Development() {
  const [isHovered, setIsHovered] = useState(false);
  const [revealRef, revealStyle] = useScrollReveal();

  return (
    <div 
      ref={revealRef}
      style={revealStyle({
        ...styles.gridCard,
        transform: isHovered ? 'scale(1.015)' : 'scale(1)'
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={styles.cardTitle}>Development</h3>
      <p style={styles.cardDesc}>Writing clean, functional components backed by version control best practices.</p>
      
      <div style={styles.techOrbitContainer}>
        <div style={styles.orbitArch}></div>
        {/* Node representing Git */}
        <div style={{...styles.orbitNode, left: '10%', bottom: '10%', backgroundColor: '#F05032', transform: isHovered ? 'scale(1.2)' : 'none'}}>Git</div>
        {/* Node representing NPM / Package ecosystem */}
        <div style={{...styles.orbitNode, left: '25%', bottom: '35%', backgroundColor: '#CB3837', transform: isHovered ? 'scale(1.2)' : 'none'}}>npm</div>
        {/* Node representing React Hooks / Component Logic */}
        <div style={{...styles.orbitNode, left: '50%', bottom: '50%', transform: isHovered ? 'translateX(-50%) scale(1.2)' : 'translateX(-50%)', backgroundColor: '#61DAFB', color: '#222'}}>JS</div>
      </div>
    </div>
  );
}

const styles = {
  gridCard: { backgroundColor: '#fff', borderRadius: '28px', padding: '30px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' },
  cardTitle: { fontSize: '24px', fontWeight: '700', color: '#111', margin: '0 0 10px 0' },
  cardDesc: { fontSize: '14px', color: '#445', margin: 0 },
  techOrbitContainer: { position: 'relative', flex: 1, marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'end' },
  orbitArch: { position: 'absolute', bottom: '-10px', width: '90%', height: '120px', border: '2px dashed #cbd5e1', borderRadius: '120px 120px 0 0' },
  orbitNode: { position: 'absolute', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 'bold', transition: 'transform 0.3s ease' }
};