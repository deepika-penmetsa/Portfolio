import React from 'react';
import styled from 'styled-components';
import profileImage from '../data/profile.png';


const Home = ({ resumeData }) => {
  return (
    <HomeContainer>
      <div className="container">
        <HeroContent>
          <ProfileImageContainer>
            <ProfileImage src={profileImage} alt="Deepika Penmetsa" />
            <ProfileImageBorder />
          </ProfileImageContainer>
          
          <HeroText>
            <Greeting>Hello, I'm</Greeting>
            <Name>{resumeData.personal.name}</Name>
            <Title>Full Stack Developer</Title>
            <Summary>{resumeData.summary}</Summary>
            
            <HeroButtons>
              <PrimaryButton 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </PrimaryButton>
              <SecondaryButton 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </SecondaryButton>
            </HeroButtons>
            
            <SocialLinks>
              <SocialLink href={`https://www.linkedin.com/in/deepika-penmetsa-59a8911b1/`} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://github.com/Deepika130599" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </SocialLink>
              <SocialLink href={`mailto:deepika.penmetsa321@gmail.com`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </HeroText>
        </HeroContent>
      </div>
      <ScrollIndicator>
        <MouseIcon>
          <div className="wheel"></div>
        </MouseIcon>
        <span>Scroll Down</span>
      </ScrollIndicator>
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

const Summary = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
`;

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primary};
  color: white;
  border: 2px solid ${props => props.theme.primary};
  
  &:hover {
    background-color: transparent;
    color: ${props => props.theme.primary};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.foreground};
  border: 2px solid ${props => props.theme.border};
  
  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
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