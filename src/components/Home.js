import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import profileImage from '../data/profile.png';
import darkProfileImage from '../data/profile_bw.png';
import { SiReact, SiPython, SiDjango} from 'react-icons/si';
import { FaDatabase, FaAws} from 'react-icons/fa';
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
  width: 100%;
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
    z-index: -1;
  }
  
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  max-width: 1200px;
  width: 100%;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

const HeroText = styled.div`
  flex: 1;
  max-width: 600px;
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
  background: ${props => props.theme.primary};
  background: ${props => 
    props.theme.name === 'dark'
    ? `linear-gradient(to right, ${props.theme.primary}, ${props.theme.success})`
    : `linear-gradient(to right, ${props.theme.primary}, ${props.theme.accent})`
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
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  width: 90px;
  
  
  color: ${props => props.theme.syntax.variable};
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: ${props => 
      props.theme.name === 'dark'
      ? `rgba(0, 227, 170, 0.15)`
      : `rgba(3, 102, 214, 0.12)`
    };
  }
`;

const SkillIcon = styled.div`
  color: ${props => props.theme.primary};
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  
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

export default Home; 