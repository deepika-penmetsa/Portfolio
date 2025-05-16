import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaMoon , FaSun} from "react-icons/fa";

const Navbar = ({ activeSection, setActiveSection, currentTheme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

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

  useEffect(() => {
    // Handle clicks outside the menu to close it
    const handleClickOutside = (event) => {
      if (menuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          !event.target.closest('.menu-toggle')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

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
      // Don't auto-close on mouse leave for better mobile UX
      // setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer $scrolled={scrolled} ref={navRef}>
      <NavbarContent>
        <LeftSection>
          <Logo onClick={() => handleNavClick('home')}>
            <FullName><span>&lt;</span>Deepika<span>/&gt;</span></FullName>
            <Initials><span>&lt;</span>DP<span>/&gt;</span></Initials>
          </Logo>
          
          <NavLinks 
            open={menuOpen}
            ref={menuRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem 
              $isActive={activeSection === 'home'} 
              onClick={() => handleNavClick('home')}
            >
              Home
            </NavItem>
            <NavItem 
              $isActive={activeSection === 'about'} 
              onClick={() => handleNavClick('about')}
            >
              About
            </NavItem>
            <NavItem 
              $isActive={activeSection === 'experience'} 
              onClick={() => handleNavClick('experience')}
            >
              Experience
            </NavItem>
            <NavItem 
              $isActive={activeSection === 'projects'} 
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </NavItem>
            <NavItem 
              $isActive={activeSection === 'contact'} 
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </NavItem>
          </NavLinks>
        </LeftSection>
        
        <RightSection>
          <SocialLinks>
            <SocialLink href="mailto:deepikapenmetsa05@gmail.com" aria-label="Email">
              <Icon>
                <FaEnvelope size={20} />
              </Icon>
            </SocialLink>
            <SocialLink href="https://github.com/deepika-penmetsa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon>
                <FaGithub size={20} />
              </Icon>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/deepika-penmetsa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon>
                <FaLinkedin size={20} />
              </Icon>
            </SocialLink>
            <SocialIconButton 
              onClick={toggleTheme} 
              className="no-style"
              aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <Icon>
                {currentTheme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
              </Icon>
            </SocialIconButton>
          </SocialLinks>
          
          <MenuToggle 
            onClick={toggleMenu}
            className="menu-toggle"
            onMouseEnter={handleMouseEnter}
            $open={menuOpen}
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
  background-color: ${props => props.$scrolled 
    ? props.theme.navbar.background 
    : 'transparent'};
  box-shadow: ${props => props.$scrolled 
    ? '0 1px 10px rgba(0,0,0,0.1)' 
    : 'none'};
  transition: background-color 0.3s, box-shadow 0.3s;
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex: 1;
  }
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
    font-size: 1.3rem;
  }
`;

const FullName = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Initials = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    display: flex;
    margin-left: auto;
    margin-right: 15px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const SocialIconButton = styled.button`
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    ${Icon} {
      transform: translateY(-3px);
    }
    background: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  
  &:focus {
    outline: none !important;
    background: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  
  &:active {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background: none !important;
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
    transform: ${props => props.$isActive ? 'scaleX(1)' : 'scaleX(0)'};
    transform-origin: left;
    transition: transform 0.3s;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  color: ${props => props.$isActive ? props.theme.navbar?.activeForeground || props.theme.foreground : props.theme.navbar?.foreground || props.theme.foreground};
  cursor: pointer;
  transition: color 0.3s;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.8rem 2rem;
    width: 100%;
    text-align: center;
    position: relative;
    border-left: 3px solid transparent;
    border-left-color: ${props => props.$isActive ? props.theme.primary : 'transparent'};
    background-color: ${props => props.$isActive ? 'rgba(0, 0, 0, 0.05)' : 'transparent'};
    transition: background-color 0.3s, border-left-color 0.3s;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      border-left-color: ${props => props.theme.primary};
    }
    
    &::after {
      display: none;
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
    background-color: ${props => props.theme.primary};
    border-radius: 3px;
    transition: transform 0.3s, opacity 0.3s;
  }
  
  span:first-child {
    transform: ${props => props.$open ? 'rotate(45deg) translate(5px, 6px)' : 'none'};
  }
  
  span:nth-child(2) {
    opacity: ${props => props.$open ? 0 : 1};
  }
  
  span:last-child {
    transform: ${props => props.$open ? 'rotate(-45deg) translate(5px, -6px)' : 'none'};
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Navbar; 