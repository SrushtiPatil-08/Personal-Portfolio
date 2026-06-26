import React, { useState } from 'react';
import srushtiAvatar from '../assets/Srushti.jpeg';

export default function Hero() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.heroContent}>
      {/* CSS Keyframes injected inline */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-10px) rotate(-13deg); }
          100% { transform: translateY(0px) rotate(-15deg); }
        }
        @keyframes floatFast {
          0% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-14px) rotate(15deg); }
          100% { transform: translateY(0px) rotate(12deg); }
        }
      `}</style>

      <div style={styles.bgText}>DESIGNER</div>

      {/* Main Copy Elements */}
      <div style={styles.heroLeft}>
        <p style={styles.heroSub}>Hey, I'm Srushti.</p>
        <h1 style={styles.heroTitle}>Product, UI/UX &<br />Brand Design</h1>
      </div>

      {/* Interactive Avatar Base Frame */}
      <div style={styles.avatarContainer}>
        <div style={styles.blueArch}></div>
        <img 
          src={srushtiAvatar}
          alt="Arion Headshot" 
          style={styles.avatarImg}
        />
        
        {/* Floating elements running distinct keyframe speeds */}
        <div style={{...styles.floatingTag, ...styles.tagLeft}}>Full Stack</div>
        <div style={{...styles.floatingTag, ...styles.tagRight}}>Web design</div>
      </div>

      {/* Metric Cards Column */}
      <div style={styles.heroRight}>
        <div 
          style={{
            ...styles.statCard, 
            transform: hoveredCard === 'stat1' ? 'translateY(-6px)' : 'translateY(0)',
            boxShadow: hoveredCard === 'stat1' ? '0 15px 35px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.02)'
          }}
          onMouseEnter={() => setHoveredCard('stat1')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div>
            <p style={styles.statLabel}>Core Expertise</p>
            <p style={styles.statSub}>UI/Ux & Web Development</p>
          </div>
          <span style={styles.statNumber}>DUAL</span>
        </div>
        
        <div 
          style={{
            ...styles.statCard, 
            transform: hoveredCard === 'stat2' ? 'translateY(-6px)' : 'translateY(0)',
            boxShadow: hoveredCard === 'stat2' ? '0 15px 35px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.02)'
          }}
          onMouseEnter={() => setHoveredCard('stat2')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div>
            <p style={styles.statLabel}>Responsive Builds</p>
            <p style={styles.statSub}>Tailored Layout Systems</p>
          </div>
          <span style={styles.statNumber}>100%</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroContent: { display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', alignItems: 'end', position: 'relative', minHeight: '400px' },
  bgText: { position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', fontSize: '140px', fontWeight: '900', color: 'rgba(0,0,0,0.03)', letterSpacing: '4px', whiteSpace: 'nowrap', width: '100%', textAlign: 'center', userSelect: 'none', zIndex: 1 },
  heroLeft: { zIndex: 2 },
  heroSub: { fontSize: '16px', color: '#555', marginBottom: '12px', fontWeight: '500' },
  heroTitle: { fontSize: '44px', fontWeight: '800', lineHeight: '1.15', color: '#111', margin: 0, letterSpacing: '-1px' },
  avatarContainer: { 
    position: 'relative', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'end', 
    height: '100%', 
    zIndex: 3 
  },
  blueArch: { 
    position: 'absolute', 
    bottom: 0, 
    width: '300px',
    height: '360px',
    backgroundColor: '#5275ec', 
    borderRadius: '150px 150px 0 0', 
    zIndex: 1 
  },
  avatarImg: { 
    width: '300px', 
    height: '360px', 
    objectFit: 'cover', 
    objectPosition: 'center 23%', // Adjusted slightly further down to avoid cropping your portrait context
    borderRadius: '150px 150px 0 0', 
    zIndex: 2, 
    mixBlendMode: 'multiply' 
  },
  floatingTag: { 
    position: 'absolute', 
    backgroundColor: '#fff', 
    padding: '10px 22px', 
    borderRadius: '24px', 
    fontSize: '13px', 
    fontWeight: '600', 
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)', 
    zIndex: 4,
    color: '#111'
  },
  tagLeft: {
    top: '38%',
    left: '-15%',
    animation: 'floatSlow 4s ease-in-out infinite'
  },
  tagRight: {
    top: '18%',
    right: '-10%',
    animation: 'floatFast 3.5s ease-in-out infinite'
  },
  heroRight: { display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'end', alignItems: 'flex-end', zIndex: 2 },
  statCard: { backgroundColor: '#fff', borderRadius: '20px', padding: '22px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '250px', boxSizing: 'border-box', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'pointer' },
  statLabel: { margin: 0, fontSize: '14px', fontWeight: '700', color: '#111' },
  statSub: { margin: '4px 0 0 0', fontSize: '12px', color: '#777', fontWeight: '500' },
  statNumber: { fontSize: '32px', fontWeight: '800', color: '#111' }
};