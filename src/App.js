import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { vscodeTheme, vscodeLightTheme } from './styles/themes';
import resumeData from './data/resumeData';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all sections
      const sections = document.querySelectorAll('section');
      
      // Find the current section
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set the active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? vscodeTheme : vscodeLightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          currentTheme={currentTheme}
          toggleTheme={toggleTheme}
        />
        <MainContent>
          <section id="home">
            <Home resumeData={resumeData} />
          </section>
          <section id="about">
            <About resumeData={resumeData} />
          </section>
          <section id="projects">
            <Projects resumeData={resumeData} />
          </section>
          <section id="contact">
            <Contact resumeData={resumeData} />
          </section>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 60px; /* Space for fixed navbar */
  scroll-behavior: smooth;
  overflow-y: auto;
  
  section {
    min-height: 100vh;
    padding: 60px 20px;
    scroll-margin-top: 60px;
  }
`;

export default App;
