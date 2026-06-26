import React, { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export default function BrandIdentity() {
  const [isHovered, setIsHovered] = useState(false);
  const [revealRef, revealStyle] = useScrollReveal();

  return (
    <div 
      ref={revealRef}
      style={revealStyle({
        ...styles.gradientCard,
        transform: isHovered ? 'scale(1.015)' : 'scale(1)',
        boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.12)' : 'none'
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={styles.cardTitle}>Brand Identity</h3>
      <p style={styles.cardDesc}>Translating design systems and visual assets into cohesive UI layouts.</p>
      
      <div style={styles.scatterCloud}>
        <span style={{...styles.cloudTag, top: '10%', left: '20%', transform: isHovered ? 'translateY(-5px)' : 'none'}}>Typography</span>
        <span style={{...styles.cloudTag, top: '15%', right: '15%', transform: isHovered ? 'rotate(10deg) translate(5px)' : 'rotate(15deg)'}}>Color Theory</span>
        <span style={{...styles.cloudTag, top: '45%', left: '35%', transform: isHovered ? 'scale(1.05)' : 'none'}}>Asset Delivery</span>
        <span style={{...styles.cloudTag, bottom: '15%', left: '10%'}}>Figma Systems</span>
        <span style={{...styles.cloudTag, bottom: '20%', right: '10%'}}>UI Consistency</span>
      </div>
    </div>
  );
}

const styles = {
  gradientCard: { background: 'linear-gradient(180deg, #8ba7ff 0%, #dae3ff 100%)', borderRadius: '28px', padding: '30px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column' },
  cardTitle: { fontSize: '24px', fontWeight: '700', color: '#111', margin: '0 0 10px 0' },
  cardDesc: { fontSize: '14px', color: '#445', lineHeight: '1.4', margin: 0 },
  scatterCloud: { position: 'relative', flex: 1, marginTop: '20px' },
  cloudTag: { position: 'absolute', backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(5px)', padding: '6px 14px', borderRadius: '15px', fontSize: '11px', color: '#222', fontWeight: '600', border: '1px solid rgba(255,255,255,0.5)', transition: 'transform 0.4s ease' }
};