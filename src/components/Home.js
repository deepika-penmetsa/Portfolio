import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import profileImage from '../data/profile.png';
import darkProfileImage from '../data/profile_bw.png';
import { SiJavascript, SiReact, SiPython, SiDjango, SiHtml5, SiCss3, SiTypescript } from 'react-icons/si';
import { FaDatabase, FaGithub, FaLinkedin , FaAws} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Home = ({ resumeData }) => {
  const themeContext = useContext(ThemeContext);
  const isDarkTheme = themeContext.name === 'dark';
  
  // Select skills to display
  const displaySkills = {
    React: <SiReact />,
    Python: <SiPython />,
    Django: <SiDjango />,
    SQL: <FaDatabase />,
    AWS: <FaAws />
  };

  return (
    <HomeContainer>
      <div className="container">
        <HeroContent>
          <ProfileImageContainer>
            <ProfileImage 
              src={isDarkTheme ? darkProfileImage : profileImage} 
              alt={resumeData.personal.name} 
            />
            <ProfileImageBorder />
          </ProfileImageContainer>
          
          <HeroText>
            <Greeting>Hello, I'm</Greeting>
            <Name>{resumeData.personal.name}</Name>
            <Title>Full Stack Developer</Title>
            
            <TechSection>
              
              <SkillsContainer>
                {Object.entries(displaySkills).map(([skill, icon], index) => (
                  
                  <SkillBadge 
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                  >
                    <SkillIcon>{icon}</SkillIcon>
                    <SkillName>{skill}</SkillName>
                  </SkillBadge>
                  
                ))}
              </SkillsContainer>
            </TechSection>
          </HeroText>
        </HeroContent>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 60px 0 100px;
  
  @media (max-width: 768px) {
    padding-bottom: 120px;
  }
  
  @media (max-width: 480px) {
    padding-bottom: 140px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.name === 'dark' 
      ? 'radial-gradient(circle at 10% 20%, rgba(0, 122, 204, 0.1) 0%, rgba(0, 0, 0, 0) 80%)'
      : 'radial-gradient(circle at 10% 20%, rgba(3, 102, 214, 0.1) 0%, rgba(255, 255, 255, 0) 80%)'
    };
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

const HeroText = styled.div`
  flex: 1;
`;

const Greeting = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.primary};
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: ${props => props.theme.name === 'dark'
    ? 'linear-gradient(to right, #00FF00, #00AA00)'
    : 'linear-gradient(to right, #0366D6, #E36209)'
  };
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.syntax.variable};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TechSection = styled.div`
  margin-top: 2rem;
`;

const TechSectionHeader = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const TechTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.theme.primary};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '>';
    color: ${props => props.theme.primary};
    margin-right: 0.5rem;
    font-weight: bold;
    font-family: monospace;
  }
`;

const TechDivider = styled.div`
  height: 1px;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.primary},
    ${props => props.theme.primary + '50'},
    transparent
  );
  width: 100%;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SkillBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${props => props.theme.name === 'dark'
    ? 'rgba(0, 170, 0, 0.1)'
    : 'rgba(3, 102, 214, 0.08)'
  };
  color: ${props => props.theme.syntax.variable};
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.name === 'dark'
      ? 'rgba(0, 170, 0, 0.15)'
      : 'rgba(3, 102, 214, 0.12)'
    };
  }
`;

const SkillIcon = styled.div`
  color: ${props => props.theme.primary};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 20px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.card.background};
  color: ${props => props.theme.foreground};
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  
  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  position: relative;
  z-index: 1;
`;

const ProfileImageBorder = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 10px;
  z-index: 0;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.6;
  transition: opacity 0.3s;
  z-index: 10;
  
  &:hover {
    opacity: 1;
  }
  
  span {
    margin-top: 8px;
  }
  
  @media (max-width: 768px) {
    bottom: 30px;
  }
  
  @media (max-width: 480px) {
    bottom: 15px;
    font-size: 0.8rem;
  }
`;

const MouseIcon = styled.div`
  width: 30px;
  height: 50px;
  border: 2px solid ${props => props.theme.foreground};
  border-radius: 15px;
  position: relative;
  
  .wheel {
    width: 4px;
    height: 8px;
    background-color: ${props => props.theme.foreground};
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    animation: scroll 1.5s infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(20px);
      opacity: 0;
    }
  }
  
  @media (max-width: 480px) {
    width: 24px;
    height: 40px;
    border-radius: 12px;
    
    .wheel {
      width: 3px;
      height: 6px;
      top: 8px;
    }
  }
`;

export default Home; 