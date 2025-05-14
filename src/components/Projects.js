import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ resumeData }) => {
  const sliderRef = useRef(null);

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  // Function to convert bullet points into a single paragraph
  const formatDescription = (descriptions) => {
    if (!descriptions || descriptions.length === 0) return '';
    return descriptions.join(' ');
  };

  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <SectionHeader>
          <SectionTitle>My Projects</SectionTitle>
          <SectionSubtitle>Recent Work</SectionSubtitle>
        </SectionHeader>
        
        <ProjectsSliderContainer>
          <NavButton 
            className="prev" 
            onClick={prevSlide} 
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </NavButton>
          
          <NavButton 
            className="next" 
            onClick={nextSlide} 
            aria-label="Next project"
          >
            <FaChevronRight />
          </NavButton>
          
          <ProjectsSliderWrapper>
            <Slider ref={sliderRef} {...settings}>
              {resumeData.projects.map((project, index) => (
                <ProjectCardWrapper key={index}>
                  <ProjectCard>
                    <ProjectImageContainer>
                      <ProjectImage src={project.image} alt={project.name} />
                      
                      <MiddleSection>
                        <ProjectTitle>{project.name.toLowerCase()}</ProjectTitle>
                        <ProjectDescription>
                          {formatDescription(project.description)}
                        </ProjectDescription>
                      </MiddleSection>
                      
                      <BottomSection>
                        <ActionButtonsContainer>
                          {project.links && project.links.github && (
                            <ActionButton 
                              href={project.links.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <FaGithub size={18} />
                            </ActionButton>
                          )}
                          {project.links && project.links.live && (
                            <ActionButton 
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              primary="true"
                            >
                              <RiExternalLinkLine size={18} />
                            </ActionButton>
                          )}
                        </ActionButtonsContainer>
                        <TechLabel>
                          {project.technologies && project.technologies.length > 0 
                            ? project.technologies.join(', ').toUpperCase()
                            : 'REACT JS, JAVASCRIPT'}
                        </TechLabel>
                      </BottomSection>
                    </ProjectImageContainer>
                  </ProjectCard>
                </ProjectCardWrapper>
              ))}
            </Slider>
          </ProjectsSliderWrapper>
        </ProjectsSliderContainer>
      </div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  position: relative;
  padding: 80px 0 120px;
  background-color: ${props => props.theme.background || '#0a192f'};
  
  @media (max-width: 768px) {
    padding: 60px 0 100px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0 80px;
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
      ? 'linear-gradient(to right, #00FF00, rgba(0, 255, 0, 0.1))'
      : 'linear-gradient(to right, #0366D6, rgba(3, 102, 214, 0.1))'};
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${props => props.theme.name === 'dark' 
    ? '#00FF00' 
    : props.theme.syntax?.function || '#0366D6'};
  margin-bottom: 0.8rem;
  position: relative;
  display: inline-block;
  text-shadow: ${props => props.theme.name === 'dark' 
    ? '0 0 10px rgba(0, 255, 0, 0.3)' 
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
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${props => props.theme.name === 'dark' 
    ? '0 20px 50px rgba(0, 100, 0, 0.2), 0 0 30px rgba(0, 255, 0, 0.1)' 
    : '0 20px 50px rgba(0, 0, 0, 0.2), 0 0 30px rgba(3, 102, 214, 0.1)'};
  transition: box-shadow 0.3s ease;

  .prev {
    left: 20px;
  }
  
  .next {
    right: 20px;
  }
  
  @media (max-width: 1100px) {
    margin: 0 40px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
    margin: 0 20px;
  }
`;

const ProjectsSliderWrapper = styled.div`
  height: 100%;
  
  .slick-slider, .slick-list, .slick-track {
    height: 100%;
  }
  
  .slick-slide > div {
    height: 100%;
  }
  
  .slick-dots {
    bottom: 20px;
    z-index: 10;
    
    li button:before {
      color: white;
      opacity: 0.5;
      font-size: 10px;
    }
    
    li.slick-active button:before {
      color: ${props => props.theme.name === 'dark' ? '#00FF00' : 'white'};
      opacity: 1;
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 100, 0, 0.7)' 
    : 'rgba(3, 102, 214, 0.7)'};
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.7;
  
  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
    background-color: ${props => props.theme.name === 'dark' 
      ? 'rgba(0, 170, 0, 0.8)' 
      : 'rgba(3, 102, 214, 0.8)'};
    box-shadow: 0 0 15px ${props => props.theme.name === 'dark' 
      ? 'rgba(0, 255, 0, 0.5)' 
      : 'rgba(3, 102, 214, 0.5)'};
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ProjectCardWrapper = styled.div`
  height: 100%;
`;

const ProjectCard = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.name === 'dark' 
      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.5) 100%)'
      : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)'};
    z-index: 2;
    pointer-events: none;
    border-radius: 16px;
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 1;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  filter: ${props => props.theme.name === 'dark' ? 'brightness(0.6)' : 'brightness(0.7)'};
  transition: filter 0.5s ease;
  
  ${ProjectCard}:hover & {
    filter: ${props => props.theme.name === 'dark' ? 'brightness(0.7)' : 'brightness(0.8)'};
  }
`;

const MiddleSection = styled.div`
  position: relative;
  z-index: 3;
  padding: 0 40px;
  margin: auto 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  backdrop-filter: blur(2px);
`;

const ProjectTitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  opacity: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

const ProjectDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto 30px;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  opacity: 0.9;
  transform: translateY(0);
  transition: opacity 0.5s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
    overflow-y: auto;
    padding: 0 10px;
    
    /* Custom scrollbar for small screens */
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
  }
`;

const BottomSection = styled.div`
  position: relative;
  z-index: 3;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  background: ${props => props.theme.name === 'dark'
    ? 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)'
    : 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)'
  };
  opacity: 0.9;
  transform: translateY(0);
  transition: opacity 0.5s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 10px;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background-color: ${props => props.theme.name === 'dark'
      ? 'rgba(0, 170, 0, 0.9)'
      : 'rgba(3, 102, 214, 0.9)'};
    color: white;
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

const TechLabel = styled.div`
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  color: white;
  padding: 6px 16px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-weight: 600;
  border-radius: 20px;
  background: ${props => props.theme.name === 'dark'
    ? 'rgba(0, 100, 0, 0.8)'
    : 'rgba(3, 102, 214, 0.8)'
  };
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export default Projects;