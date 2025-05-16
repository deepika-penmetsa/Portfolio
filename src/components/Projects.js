import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Projects = ({ resumeData }) => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    dotsClass: "slick-dots custom-dots",
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          dots: true,
          swipe: true,
          touchMove: true
        }
      }
    ]
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionHeader>
          <SectionTitle>My Projects</SectionTitle>
          <SectionSubtitle>Recent Work</SectionSubtitle>
        </SectionHeader>
        
        <ProjectsSliderContainer>
          <ProjectsSliderWrapper>
            <Slider ref={sliderRef} {...settings}>
              {resumeData.projects.map((project, index) => (
                <ProjectCardWrapper key={index}>
                  <ProjectCard>
                    <ProjectHeader>
                      <ProjectLogoWrapper>
                        <ProjectLogo src={project.image} alt={project.name} />
                      </ProjectLogoWrapper>
                      <ProjectInfo>
                        <TitleRow>
                          <ProjectTitle>{project.name}</ProjectTitle>
                          <ProjectDate>{project.date}</ProjectDate>
                        </TitleRow>
                        <ProjectDescription>
                          {project.description || ""}
                        </ProjectDescription>
                      </ProjectInfo>
                    </ProjectHeader>
                    
                    <ProjectContent>
                      <CommandSection>
                        <CommandPrompt>$ cat features.txt</CommandPrompt>
                        <FeaturesSection>
                          {Array.isArray(project.highlights) && project.highlights.map((feature, idx) => (
                            <FeatureItem key={idx}>
                              <FeatureIcon>›</FeatureIcon>
                              <FeatureText>{feature}</FeatureText>
                            </FeatureItem>
                          ))}
                          
                          {/* If no highlights are provided, use detailedDescription */}
                          {(!project.highlights || !Array.isArray(project.highlights) || project.highlights.length === 0) && 
                            Array.isArray(project.detailedDescription) && 
                            project.detailedDescription.slice(0, 4).map((desc, idx) => (
                              <FeatureItem key={idx}>
                                <FeatureIcon>›</FeatureIcon>
                                <FeatureText>{desc}</FeatureText>
                              </FeatureItem>
                            ))
                          }
                        </FeaturesSection>
                      </CommandSection>
                      
                      <CommandSection>
                        <CommandPrompt>$ ls tech-stack/</CommandPrompt>
                        <TechStackContainer>
                          {project.technologies && project.technologies.map((tech, idx) => (
                            <TechBadge key={idx}>{tech}</TechBadge>
                          ))}
                        </TechStackContainer>
                      </CommandSection>
                      
                      <CommandSection>
                        <CommandPrompt>$ ls links/</CommandPrompt>
                        <LinksContainer>
                          {project.links && project.links.github && (
                            <LinkButton 
                              href={project.links.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <FaGithub size={18} />
                              <span>GitHub</span>
                            </LinkButton>
                          )}
                          {project.links && project.links.live && (
                            <LinkButton 
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              $primary
                            >
                              <RiExternalLinkLine size={18} />
                              <span>Live Demo</span>
                            </LinkButton>
                          )}
                        </LinksContainer>
                      </CommandSection>
                    </ProjectContent>
                  </ProjectCard>
                </ProjectCardWrapper>
              ))}
            </Slider>
            
            <NavButtonsContainer>
              <NavButton 
                onClick={prevSlide} 
                aria-label="Previous project"
              >
                <FaChevronLeft color="currentColor" />
              </NavButton>
              
              <NavButton 
                onClick={nextSlide} 
                aria-label="Next project"
              >
                <FaChevronRight color="currentColor" />
              </NavButton>
            </NavButtonsContainer>
          </ProjectsSliderWrapper>
        </ProjectsSliderContainer>
      </div>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  position: relative;
  padding: 80px 0;
  background-color: ${props => props.theme.background};
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${props => props.theme.name === 'dark'
      ? 'linear-gradient(to right, #00e3aa, rgba(0, 227, 170, 0.1))'
      : 'linear-gradient(to right, #0366D6, rgba(3, 102, 214, 0.1))'};
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
    
    &::after {
      width: 80px;
      bottom: -15px;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
    
    &::after {
      width: 60px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${props => props.theme.name === 'dark' 
    ? props.theme.accent 
    : props.theme.syntax?.function || '#0366D6'};
  margin-bottom: 0.8rem;
  position: relative;
  display: inline-block;
  text-shadow: ${props => props.theme.name === 'dark' 
    ? '0 0 10px rgba(0, 227, 170, 0.3)' 
    : '0 0 10px rgba(3, 102, 214, 0.3)'};
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.name === 'dark'
    ? 'rgba(255, 255, 255, 0.9)'
    : props.theme.foreground || 'rgba(36, 41, 46, 0.9)'};
  opacity: 0.9;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ProjectsSliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 1100px) {
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    max-width: 98%;
  }
`;

const ProjectsSliderWrapper = styled.div`
  position: relative;
  margin-bottom: 70px;
  
  .slick-slider, .slick-list, .slick-track {
    height: 100%;
  }
  
  .slick-slide > div {
    height: 100%;
  }
  
  .slick-track {
    display: flex !important;
  }
  
  .slick-slide {
    height: inherit !important;
    display: flex !important;
  }
  
  .slick-slide > div {
    width: 100%;
  }
  
  .slick-active {
    z-index: 10;
  }
  
  .slick-dots.custom-dots {
    bottom: -40px;
    width: 100%;
    max-width: 200px;
    left: 50%;
    transform: translateX(-50%);
    display: flex !important;
    justify-content: center;
    padding: 0;
    margin: 0;
    
    li {
      margin: 0 4px;
      width: 10px;
      height: 10px;
      
      button {
        width: 10px;
        height: 10px;
        padding: 0;
        
        &:before {
          color: transparent;
          opacity: 1;
          width: 10px;
          height: 10px;
          font-size: 0;
          background-color: ${props => props.theme.name === 'dark' ? 'rgba(0, 227, 170, 0.3)' : 'rgba(3, 102, 214, 0.3)'};
          border-radius: 50%;
          transition: all 0.3s ease;
        }
      }
      
      &.slick-active button:before {
        background-color: ${props => props.theme.name === 'dark' ? props.theme.accent : '#0366D6'};
        transform: scale(1.2);
      }
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
    
    .slick-dots.custom-dots {
      max-width: 180px;
      bottom: -35px;
      
      li {
        margin: 0 3px;
      }
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 50px;
    
    .slick-dots.custom-dots {
      max-width: 150px;
      bottom: -30px;
      
      li {
        margin: 0 2px;
      }
    }
  }
`;

const NavButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  pointer-events: none;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: transparent !important;
  color: ${props => props.theme.name === 'dark' ? props.theme.accent : '#000000'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
  
  &:hover {
    transform: scale(1.15);
    background: transparent !important;
  }
  
  svg {
    width: 35px;
    height: 35px;
    fill: ${props => props.theme.name === 'dark' ? props.theme.accent : '#0366D6'};
    color: inherit;
    filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.3));
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

const ProjectCardWrapper = styled.div`
  padding: 10px;
`;

const ProjectCard = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  min-height: 600px;
  
  @media (max-width: 768px) {
    min-height: 550px;
  }
  
  @media (max-width: 480px) {
    min-height: 500px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 25px 30px;
  gap: 25px;
  border-bottom: 1px solid ${props => props.theme.border};
  
  @media (max-width: 768px) {
    padding: 20px 25px;
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px 20px;
    gap: 15px;
    flex-direction: column;
  }
`;

const ProjectLogoWrapper = styled.div`
  flex-shrink: 0;
`;

const ProjectLogo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid ${props => props.theme.border};
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.theme.name === 'dark' 
    ? props.theme.accent 
    : props.theme.syntax?.function || '#0366D6'};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ProjectDate = styled.span`
  font-size: 1rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: ${props => props.theme.name === 'dark' ? 'rgba(0, 227, 170, 0.7)' : 'rgba(3, 102, 214, 0.7)'};
  margin-left: 12px;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 3px 8px;
  border-radius: 4px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-left: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-left: 8px;
    padding: 2px 6px;
  }
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.foreground};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ProjectContent = styled.div`
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  @media (max-width: 768px) {
    padding: 20px 25px;
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px 20px;
    gap: 15px;
  }
`;

const CommandSection = styled.div``;

const CommandPrompt = styled.div`
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: ${props => props.theme.accent};
  font-size: 1rem;
  margin-bottom: 10px;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
`;

const FeaturesSection = styled.div``;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

const FeatureIcon = styled.span`
  color: ${props => props.theme.accent};
  font-size: 1.5rem;
  line-height: 1;
  margin-right: 10px;
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-right: 8px;
  }
`;

const FeatureText = styled.span`
  color: ${props => props.theme.foreground};
  font-size: 1rem;
  line-height: 1.5;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const TechBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  background-color: ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 227, 170, 0.15)' 
    : 'rgba(3, 102, 214, 0.1)'};
  color: ${props => props.theme.name === 'dark' ? props.theme.accent : '#0366D6'};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 227, 170, 0.3)' 
    : 'rgba(3, 102, 214, 0.3)'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.name === 'dark' 
      ? 'rgba(0, 227, 170, 0.25)' 
      : 'rgba(3, 102, 214, 0.2)'};
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    padding: 4px 12px;
    font-size: 0.8rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  text-decoration: none;
  background-color: ${props => props.$primary 
    ? (props.theme.name === 'dark' ? props.theme.accent : '#0366D6') 
    : (props.theme.name === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(246, 248, 250, 0.8)')};
  color: ${props => props.$primary ? '#FFFFFF' : props.theme.foreground};
  border: 1px solid ${props => props.$primary 
    ? 'transparent' 
    : props.theme.border};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.$primary 
      ? (props.theme.name === 'dark' ? 'rgba(0, 227, 170, 0.8)' : '#0366D6') 
      : (props.theme.name === 'dark' ? 'rgba(30, 30, 30, 0.7)' : 'rgba(246, 248, 250, 0.9)')};
    color: ${props => props.$primary ? '#FFFFFF' : props.theme.foreground};
      }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
`;

export default Projects;