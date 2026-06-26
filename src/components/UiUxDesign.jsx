import React, { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export default function UiUxDesign() {
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
      <h3 style={styles.cardTitle}>UI/UX Design</h3>
      <p style={styles.cardDesc}>Designing responsive user journeys and structured digital store layouts.</p>
      
      <div style={styles.mockupContainer}>
        <div style={{
          ...styles.phoneMockup,
          transform: isHovered ? 'rotate(-6deg) translateY(-5px)' : 'rotate(-10deg)'
        }}>
          <div style={styles.phoneScreen}>
            <div style={styles.phoneAppIcon}>✓</div>
            <p style={styles.phoneText}>Responsive<br/>Web Layouts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  gridCard: { backgroundColor: '#fff', borderRadius: '28px', padding: '30px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' },
  cardTitle: { fontSize: '24px', fontWeight: '700', color: '#111', margin: '0 0 10px 0' },
  cardDesc: { fontSize: '14px', color: '#445', margin: 0 },
  mockupContainer: { position: 'relative', backgroundColor: '#eef2ff', borderRadius: '18px', flex: 1, marginTop: '20px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  phoneMockup: { backgroundColor: '#111', width: '180px', height: '100px', borderRadius: '12px', padding: '6px', boxShadow: '0 15px 30px rgba(0,0,0,0.15)', transition: 'transform 0.4s ease' },
  phoneScreen: { backgroundColor: '#fff', height: '100%', borderRadius: '8px', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  phoneAppIcon: { backgroundColor: '#3b66f5', color: '#fff', width: '18px', height: '18px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' },
  phoneText: { fontSize: '10px', fontWeight: '700', margin: 0, lineHeight: '1.2' }
};