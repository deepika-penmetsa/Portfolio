import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ activeSection, setActiveSection, currentTheme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <NavbarContainer data-scrolled={scrolled}>
      <NavbarContent>
        <Logo onClick={() => handleNavClick('home')}>
          <span>&lt;</span>Deepika<span>/&gt;</span>
        </Logo>
        
        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </MenuToggle>
        
        <NavLinks open={menuOpen}>
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
          <ThemeToggleItem>
            <ThemeToggleButton onClick={toggleTheme}>
              {currentTheme === 'dark' ? <FiSun size={22} /> : <FiMoon size={22} />}
            </ThemeToggleButton>
          </ThemeToggleItem>
        </NavLinks>
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

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  color: ${props => props.theme.syntax.function};
  
  span {
    color: ${props => props.theme.primary};
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
  
  color: ${props => props['data-active'] ? props.theme.navbar.activeForeground : props.theme.navbar.foreground};
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
    background-color: ${props => props.theme.navbar.foreground};
    border-radius: 3px;
    transition: transform 0.3s, opacity 0.3s;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const ThemeToggleItem = styled.li`
  margin: 0 0.5rem;
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.5rem 2rem;
    width: 100%;
    text-align: center;
  }
`;

const ThemeToggleButton = styled.button`
  background: ${props => props.theme.name === 'dark' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(3, 102, 214, 0.1)'};
  border: 1px solid ${props => props.theme.name === 'dark' ? '#00AA00' : props.theme.primary};
  color: ${props => props.theme.navbar.foreground};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.name === 'dark' ? 'rgba(0, 255, 0, 0.2)' : 'rgba(3, 102, 214, 0.2)'};
    color: ${props => props.theme.name === 'dark' ? '#00FF00' : props.theme.primary};
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
  }
  
  svg {
    width: 22px;
    height: 22px;
  }
`;

export default Navbar; 