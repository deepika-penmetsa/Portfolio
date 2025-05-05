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
    slidesToShow: resumeData.projects.length > 2 ? 2 : 1,
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

  return (
    <ProjectsContainer>
      <div className="container">
        <SectionHeader>
          <SectionTitle>My Projects</SectionTitle>
          <SectionSubtitle>Recent Work</SectionSubtitle>
        </SectionHeader>
        
        <ProjectsSliderContainer>
          {resumeData.projects.length > 1 && (
            <>
              <CarouselButton 
                onClick={prevSlide} 
                className="prev-button"
                aria-label="Previous project"
              >
                <FaChevronLeft />
              </CarouselButton>
              
              <CarouselButton 
                onClick={nextSlide} 
                className="next-button"
                aria-label="Next project"
              >
                <FaChevronRight />
              </CarouselButton>
            </>
          )}
          
          <ProjectsSliderWrapper>
            <Slider ref={sliderRef} {...settings}>
              {resumeData.projects.map((project, index) => (
                <ProjectCardWrapper key={index}>
                  <ProjectCard>
                    <ProjectImageContainer>
                      <ProjectImage src={project.image} alt={project.name} />
                      <ProjectOverlay>
                        <ProjectLinks className="overlay-links">
                          {project.links && project.links.github && (
                            <OverlayLink 
                              href={project.links.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              title="View code on GitHub"
                            >
                              <FaGithub size={20} />
                            </OverlayLink>
                          )}
                          
                          {project.links && project.links.live && (
                            <OverlayLink 
                              href={project.links.live} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              title="View live demo"
                              data-primary="true"
                            >
                              <RiExternalLinkLine size={20} />
                            </OverlayLink>
                          )}
                        </ProjectLinks>
                      </ProjectOverlay>
                    </ProjectImageContainer>
                    
                    <ProjectContent>
                      <ProjectTitle>{project.name}</ProjectTitle>
                      
                      <ProjectTags>
                        {project.technologies && project.technologies.map((tech, techIndex) => (
                          <ProjectTag key={techIndex}>{tech}</ProjectTag>
                        ))}
                      </ProjectTags>
                      
                      <ProjectDescription>
                        {project.description && project.description.map((desc, descIndex) => (
                          <p key={descIndex}>{desc}</p>
                        ))}
                      </ProjectDescription>
                      
                      <ProjectLinks className="footer-links">
                        {project.links && project.links.github && (
                          <ProjectLink 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="View code on GitHub"
                          >
                            <FaGithub size={18} />
                            <span>Code</span>
                          </ProjectLink>
                        )}
                        
                        {project.links && project.links.live && (
                          <ProjectLink 
                            href={project.links.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="View live demo"
                            data-primary="true"
                          >
                            <RiExternalLinkLine size={18} />
                            <span>Demo</span>
                          </ProjectLink>
                        )}
                      </ProjectLinks>
                    </ProjectContent>
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
  padding: 80px 0 120px;
  background-color: ${props => 
    props.theme.name === 'dark' 
      ? props.theme.background 
      : props.theme.section.background};
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.syntax.function};
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.foreground};
  opacity: 0.8;
`;

const ProjectsSliderContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
  
  .prev-button {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
  }
  
  .next-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
  }
  
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  
  @media (max-width: 480px) {
    padding: 0 40px;
  }
`;

const ProjectsSliderWrapper = styled.div`
  margin: 0 auto;
  
  .slick-track {
    display: flex !important;
  }
  
  .slick-slide {
    height: inherit !important;
    padding: 10px;
    
    & > div {
      height: 100%;
    }
  }
  
  .slick-dots {
    bottom: -40px;
    
    li button:before {
      color: ${props => props.theme.primary};
      opacity: 0.5;
      font-size: 10px;
    }
    
    li.slick-active button:before {
      color: ${props => props.theme.primary};
      opacity: 1;
    }
  }
`;

const CarouselButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.card.background};
  color: ${props => props.theme.foreground};
  border: 1px solid ${props => props.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const ProjectCardWrapper = styled.div`
  height: 100%;
`;

const ProjectCard = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.primary};
    
    img {
      transform: scale(1.05);
    }
    
    .overlay-links {
      opacity: 1;
    }
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
  transition: all 0.3s ease;
  z-index: 10;
`;

const ProjectContent = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: ${props => props.theme.foreground};
`;

const ProjectDescription = styled.div`
  font-size: 0.95rem;
  color: ${props => props.theme.foreground};
  opacity: 0.9;
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const ProjectTag = styled.span`
  font-size: 0.8rem;
  padding: 4px 10px;
  border-radius: 15px;
  background-color: ${props => 
    props.theme.name === 'dark'
      ? 'rgba(86, 156, 214, 0.15)'
      : 'rgba(3, 102, 214, 0.1)'
  };
  color: ${props => props.theme.syntax.variable};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
  
  &.overlay-links {
    display: none;
    
    @media (max-width: 480px) {
      gap: 10px;
    }
  }
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: ${props => 
    props['data-primary']
      ? props.theme.primary
      : props.theme.card.background};
  color: ${props => 
    props['data-primary']
      ? 'white'
      : props.theme.foreground};
  border: 1px solid ${props => 
    props['data-primary']
      ? props.theme.primary
      : props.theme.border};
  
  &:hover {
    background-color: ${props => 
      props['data-primary']
        ? props.theme.secondary
        : props.theme.card.hoverBackground};
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const OverlayLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${props => props.theme.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transform: translateY(-2px);
  }
  
  &[data-primary="true"] {
    background-color: ${props => props.theme.primary};
    color: white;
  }
  
  &[data-primary="true"]:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

export default Projects; 