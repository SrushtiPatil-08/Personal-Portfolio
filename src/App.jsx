import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import { AboutIntro } from './components/AboutIntro.jsx';
import SelectedWorks from './components/SelectedWorks.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import BrandIdentity from './components/BrandIdentity.jsx';
import UiUxDesign from './components/UiUxDesign.jsx';
import ContactCta from './components/ContactCta.jsx';
import WebExperience from './components/WebExperience.jsx';
import Development from './components/Development.jsx';
import Skills from './components/Skills.jsx';


function FullLandingPage() {
  return (
    <>
      {/* 1. HOME / ABOUT AREA */}
      <div id="home" style={styles.scrollAnchorOffset}>
        <div style={styles.heroCard}>
          <Hero />
          <AboutIntro />
        </div>
      </div>

      {/* 2. SERVICES AREA */}
      <div id="services" style={styles.scrollAnchorOffset}>
        <div style={styles.servicesGrid}>
          <BrandIdentity />
          <UiUxDesign />
          <ContactCta />
          <WebExperience />
          <Development />
        </div>
      </div>

      {/* 3. WORKS AREA */}
      <div id="works" style={styles.scrollAnchorOffset}>
        <SelectedWorks />
      </div>


      {/* 4. EXPERIENCE AREA */}
      <Experience />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.pageContainer}>
        <Navbar />

        <div style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<FullLandingPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: '#0a2569',
    backgroundImage: 'linear-gradient(135deg, #051949 0%, #0c2b7a 100%)',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%',
    // Fixed: Removed overflowX: 'hidden' to let position: sticky work perfectly
  },
  mainContent: {
    width: '100%',
    maxWidth: '1200px',
    padding: '100px 20px 40px 20px', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '80px',
    boxSizing: 'border-box',
    flex: '1 0 auto'
  },
  scrollAnchorOffset: {
    width: '100%',
    scrollMarginTop: '110px', 
    boxSizing: 'border-box'
  },
  heroCard: {
    backgroundColor: '#e2e6ea',
    width: '100%',
    borderRadius: '36px',
    padding: '40px 40px 60px 40px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  servicesGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '24px', 
    width: '100%' 
  }
};