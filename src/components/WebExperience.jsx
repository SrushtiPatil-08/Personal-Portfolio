import React, { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export default function WebExperience() {
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
      <h3 style={styles.cardTitle}>Web Experience</h3>
      <p style={styles.cardDesc}>Optimizing performance benchmarks and cross-device display metrics.</p>
      
      <div style={styles.thumbnailRow}>
        <div style={{...styles.miniThumb, height: isHovered ? '95%' : '85%'}}><div style={styles.miniScreenBar}></div></div>
        <div style={{...styles.miniThumb, flex: 1.4, height: isHovered ? '100%' : '95%'}}><div style={styles.miniScreenBar}></div></div>
        <div style={{...styles.miniThumb, height: isHovered ? '90%' : '80%'}}><div style={styles.miniScreenBar}></div></div>
      </div>
    </div>
  );
}

const styles = {
  gridCard: { backgroundColor: '#fff', borderRadius: '28px', padding: '30px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' },
  cardTitle: { fontSize: '24px', fontWeight: '700', color: '#111', margin: '0 0 10px 0' },
  cardDesc: { fontSize: '14px', color: '#445', margin: 0 },
  thumbnailRow: { display: 'flex', gap: '10px', marginTop: 'auto', alignItems: 'end', height: '110px' },
  miniThumb: { backgroundColor: '#eef2ff', borderRadius: '12px 12px 0 0', flex: 1, border: '1px solid #dae3ff', borderBottom: 'none', padding: '8px', boxSizing: 'border-box', transition: 'height 0.4s ease' },
  miniScreenBar: { height: '4px', backgroundColor: '#3b66f5', borderRadius: '2px', width: '60%' }
};