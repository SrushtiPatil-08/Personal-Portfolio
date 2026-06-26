import React, { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export default function Experience() {
  const [revealRef, revealStyle] = useScrollReveal();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const steps = [
    { 
      year: 'Advanced Core', 
      role: 'Full-Stack Integration & Optimization', 
      company: 'Key Learning: System Architecture',
      tags: ['RESTful APIs', 'Performance Tuning', 'State Synchronization', 'Error Handling']
    },
    { 
      year: 'Core Frontend', 
      role: 'Component Architecture & State Management', 
      company: 'Key Learning: Scalable UI Production',
      tags: ['React Hooks', 'Context API', 'Reusable UI Kits', 'Modular CSS']
    },
    { 
      year: 'Foundations', 
      role: 'UI/UX Translation & Project Onboarding', 
      company: 'Key Learning: Figma-to-Code Workflow',
      tags: ['Responsive Design', 'Semantic HTML', 'Version Control', 'Design Systems']
    },
  ];

  return (
    /* Added id="experience" and styles.wrapper here so the Navbar link knows exactly where to scroll */
    <div id="experience" style={styles.wrapper}>
      {/* Injecting CSS inside a style tag to cleanly handle desktop pinning vs mobile stack */}
      <style>{`
        .experience-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 850px) {
          .experience-grid {
            grid-template-columns: 1fr 1.4fr !important; /* Forces the columns so the screen pins */
            gap: 60px;
          }
        }
      `}</style>

      <div ref={revealRef} className="experience-grid" style={revealStyle(styles.container)}>
        
        {/* Left Column: Heading Block (Pins until right cards finish scrolling) */}
        <div style={styles.headingBlock}>
          <div style={styles.badge}>SKILL ACQUISITION</div>
          <h2 style={styles.title}>Learning<br />Outcomes</h2>
          <p style={styles.subtitle}>
            A breakdown of technical capabilities, engineering philosophies, and tools mastered throughout the development cycle.
          </p>
          
          <div style={styles.sideMetric}>
            <span style={styles.metricNumber}>100%</span>
            <span style={styles.metricText}>Practical Application</span>
          </div>
        </div>

        {/* Right Column: Cards */}
        <div style={styles.timelineList}>
          {steps.map((item, idx) => {
            const isSelected = hoveredIdx === idx;
            return (
              <div 
                key={idx}
                style={{
                  ...styles.timeCard,
                  backgroundColor: isSelected ? '#ffffff' : '#0f172a',
                  border: isSelected ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.15)',
                  transform: isSelected ? 'translateY(-6px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div style={styles.cardHeader}>
                  <span style={{
                    ...styles.yearTag, 
                    color: isSelected ? '#3b66f5' : '#ffffff',
                    backgroundColor: isSelected ? '#eef2ff' : '#3b66f5'
                  }}>
                    {item.year}
                  </span>
                  <div style={{
                    ...styles.arrowCircle, 
                    backgroundColor: isSelected ? '#0f172a' : 'rgba(255,255,255,0.1)',
                    color: '#ffffff',
                    transform: isSelected ? 'rotate(-45deg)' : 'none'
                  }}>
                    →
                  </div>
                </div>

                <div>
                  <h4 style={{...styles.role, color: isSelected ? '#0f172a' : '#ffffff'}}>{item.role}</h4>
                  <p style={{...styles.company, color: isSelected ? '#475569' : '#cbd5e1'}}>{item.company}</p>
                </div>

                <div style={styles.tagWrapper}>
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{
                        ...styles.miniTag,
                        backgroundColor: isSelected ? '#f1f5f9' : 'rgba(255,255,255,0.08)',
                        color: isSelected ? '#475569' : '#ffffff',
                        border: isSelected ? 'none' : '1px solid rgba(255,255,255,0.1)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 16px', 
    boxSizing: 'border-box',
    scrollMarginTop: '110px' // Added: Prevents the fixed navbar from cutting off your section header when it scrolls down
  },
  container: { 
    width: '100%', 
    maxWidth: '1200px', 
    boxSizing: 'border-box', 
    padding: '40px 0', 
    alignItems: 'start',
    position: 'relative', 
  },
  headingBlock: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    position: 'sticky',   
    top: '140px',          
    height: 'fit-content',
    margin: '0 0 20px 0'
  },
  badge: { backgroundColor: '#3b66f5', color: '#ffffff', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', marginBottom: '16px' },
  title: { fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: '800', color: 'white', margin: '0 0 20px 0', lineHeight: '1.1', letterSpacing: '-1px' },
  subtitle: { fontSize: '15px', color: '#6c99d0', lineHeight: '1.6', margin: '0 0 32px 0', maxWidth: '100%' },
  sideMetric: { display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.15)', padding: '16px 24px', borderRadius: '20px', width: '100%', boxSizing: 'border-box' },
  metricNumber: { fontSize: '28px', fontWeight: '800', color: '#22c55e' },
  metricText: { fontSize: '13px', color: '#ffffff', fontWeight: '600', lineHeight: '1.3' },
  timelineList: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '32px', 
    width: '100%',
  },
  timeCard: { borderRadius: '24px', padding: 'clamp(24px, 4vw, 35px)', boxSizing: 'border-box', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex', flexDirection: 'column', gap: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' },
  cardHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  yearTag: { fontSize: '12px', padding: '6px 14px', borderRadius: '30px', fontWeight: '700', transition: 'all 0.3s' },
  arrowCircle: { width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', transition: 'all 0.4s ease' },
  role: { margin: 0, fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '800', transition: 'color 0.3s', lineHeight: '1.2' },
  company: { margin: '6px 0 0 0', fontSize: '15px', fontWeight: '600', transition: 'color 0.3s' },
  tagWrapper: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  miniTag: { padding: '6px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }
};