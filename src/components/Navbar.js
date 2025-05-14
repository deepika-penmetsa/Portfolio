import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope, FaPencilAlt } from 'react-icons/fa';

const Navbar = ({ activeSection, setActiveSection, currentTheme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  return (
    <NavbarContainer data-scrolled={scrolled} ref={navRef}>
      <NavbarContent>
        <LeftSection>
          <Logo onClick={() => handleNavClick('home')}>
            <span>&lt;</span>Deepika<span>/&gt;</span>
          </Logo>
          
          <NavLinks 
            open={menuOpen}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem 
              data-active={activeSection === 'home'} 
              onClick={() => handleNavClick('home')}
            >
              Home
            </NavItem>
            <NavItem 
              data-active={activeSection === 'about'} 
              onClick={() => handleNavClick('about')}
            >
              About
            </NavItem>
            <NavItem 
              data-active={activeSection === 'projects'} 
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </NavItem>
            <NavItem 
              data-active={activeSection === 'contact'} 
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </NavItem>
          </NavLinks>
        </LeftSection>
        
        <RightSection>
          <SocialLinks>
            <SocialLink href="mailto:deepika.penmetsa321@gmail.com" aria-label="Email">
              <Icon>
                <FaEnvelope />
              </Icon>
            </SocialLink>
            <SocialLink href="https://github.com/deepika-penmetsa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon>
                <FaGithub />
              </Icon>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/deepika-penmetsa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon>
                <FaLinkedin />
              </Icon>
            </SocialLink>
          </SocialLinks>
          
          <ThemeToggleButton onClick={toggleTheme} aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {currentTheme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </ThemeToggleButton>
          
          <MenuToggle 
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={handleMouseEnter}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuToggle>
        </RightSection>
      </NavbarContent>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${props => props['data-scrolled'] 
    ? props.theme.navbar.background 
    : 'transparent'};
  box-shadow: ${props => props['data-scrolled'] 
    ? '0 1px 10px rgba(0,0,0,0.1)' 
    : 'none'};
  transition: background-color 0.3s, box-shadow 0.3s;
  backdrop-filter: ${props => props['data-scrolled'] ? 'blur(10px)' : 'none'};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  color: ${props => props.theme.syntax?.function || props.theme.foreground};
  margin-right: 2rem;
  
  span {
    color: ${props => props.theme.primary};
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Icon = styled.div`
  display: flex;
  color: ${props => props.theme.primary};
  font-size: 1.25rem;
  transition: all 0.3s ease;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    ${Icon} {
      transform: translateY(-3px);
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${props => props.theme.navbar.background};
    padding: 1rem 0;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${props => props.open ? 1 : 0};
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    transition: transform 0.3s, opacity 0.3s, visibility 0.3s;
    z-index: -1;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background-color: ${props => props.theme.primary};
    transform: ${props => props['data-active'] ? 'scaleX(1)' : 'scaleX(0)'};
    transform-origin: left;
    transition: transform 0.3s;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  color: ${props => props['data-active'] ? props.theme.navbar?.activeForeground || props.theme.foreground : props.theme.navbar?.foreground || props.theme.foreground};
  cursor: pointer;
  transition: color 0.3s;
  font-weight: ${props => props['data-active'] ? '600' : '400'};
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.5rem 2rem;
    width: 100%;
    text-align: center;
    
    &::after {
      bottom: 0;
      height: 100%;
      width: 3px;
      right: auto;
      transform: ${props => props['data-active'] ? 'scaleY(1)' : 'scaleY(0)'};
    }
  }
`;

const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  
  span {
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.navbar?.foreground || props.theme.foreground};
    border-radius: 3px;
    transition: transform 0.3s, opacity 0.3s;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    transform: scale(1.1);
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.navbar?.foreground || props.theme.foreground};
  }
  
  &:focus {
    outline: none;
  }
`;

export default Navbar; 