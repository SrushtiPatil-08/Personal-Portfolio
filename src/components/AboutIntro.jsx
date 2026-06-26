import React from 'react';
import { useScrollReveal } from './useScrollReveal';

export function AboutIntro() {
  const [revealRef, revealStyle] = useScrollReveal();

  return (
    <div ref={revealRef} style={revealStyle(styles.container)}>
      <div style={styles.content}>
        <div style={styles.badge}>ABOUT ME</div>
        <h3 style={styles.heading}>Bridging Design & Development</h3>
        <p style={styles.text}>
          I am a frontend developer and UI/UX designer focused on building functional, visually striking web applications. Throughout my work on platforms like <strong>PrintOngo</strong> and the <strong>Lumiere Store</strong>, I have specialized in transforming design systems into responsive, clean codebases while ensuring exceptional user experiences.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
    boxSizing: 'border-box'
  },
  content: {
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px'
  },
  badge: {
    backgroundColor: '#3b66f5',
    color: '#ffffff',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px'
  },
  heading: {
    fontSize: '36px',
    fontWeight: '800',
    color: 'black',
    margin: 0,
    lineHeight: '1.2'
  },
  text: {
    fontSize: '16px',
    color: 'black',
    lineHeight: '1.7',
    margin: 0
  }
};