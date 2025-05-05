import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaInfo } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';

const PROJECT_IMAGE_PLACEHOLDER = "https://via.placeholder.com/600x400";

const Projects = ({ resumeData }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const openProjectModal = (project) => {
    setSelectedProject(project);
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsContainer>
      <div className="container">
        <SectionHeader>
          <SectionTitle>My Projects</SectionTitle>
          <SectionSubtitle>Recent Work</SectionSubtitle>
        </SectionHeader>
        
        <ProjectsWrapper>
          {resumeData.projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImageContainer>
                <ProjectImage src={PROJECT_IMAGE_PLACEHOLDER} alt={project.name} />
              </ProjectImageContainer>
              
              <ProjectContent>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescription>
                  {project.description && project.description[0]}
                </ProjectDescription>
                
                <ProjectTags>
                  {/* Use tech stack from data if available */}
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <ProjectTag key={techIndex}>{tech}</ProjectTag>
                  ))}
                </ProjectTags>
                
                <ProjectLinks>
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
                  
                  <ProjectDetailsLink onClick={() => openProjectModal(project)}>
                    <FaInfo size={18} />
                    <span>Details</span>
                  </ProjectDetailsLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      )}
    </ProjectsContainer>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{project.name}</ModalTitle>
          <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        </ModalHeader>
        
        <ModalImage src={PROJECT_IMAGE_PLACEHOLDER} alt={project.name} />
        
        <ModalBody>
          {project.description && (
            <ModalSection>
              <ModalSectionTitle>Overview</ModalSectionTitle>
              <ModalDescription>
                {project.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </ModalDescription>
            </ModalSection>
          )}
          
          {project.technologies && (
            <ModalSection>
              <ModalSectionTitle>Technologies</ModalSectionTitle>
              <ModalTags>
                {project.technologies.map((tech, index) => (
                  <ProjectTag key={index}>{tech}</ProjectTag>
                ))}
              </ModalTags>
            </ModalSection>
          )}
          
          <ModalSection>
            <ModalSectionTitle>Links</ModalSectionTitle>
            <ModalLinks>
              {project.links && project.links.github && (
                <ModalLink 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub size={22} />
                  GitHub Repository
                </ModalLink>
              )}
              
              {project.links && project.links.live && (
                <ModalLink 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-primary="true"
                >
                  <RiExternalLinkLine size={22} />
                  Live Demo
                </ModalLink>
              )}
            </ModalLinks>
          </ModalSection>
        </ModalBody>
      </ModalContent>
    </ModalBackdrop>
  );
};

const ProjectsContainer = styled.div`
  padding: 80px 0;
  background-color: ${props => 
    props.theme.name === 'dark' 
      ? props.theme.background 
      : props.theme.section.background};
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

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.primary};
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: ${props => props.theme.foreground};
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.foreground};
  opacity: 0.9;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
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
    transform: translateY(-2px);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ProjectDetailsLink = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.card.background};
  color: ${props => props.theme.foreground};
  border: 1px solid ${props => props.theme.border};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.card.hoverBackground};
    transform: translateY(-2px);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.border};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const ModalTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.foreground};
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.foreground};
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.3s;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const ModalSection = styled.div`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ModalSectionTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: ${props => props.theme.syntax.variable};
`;

const ModalDescription = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  color: ${props => props.theme.foreground};
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ModalTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ModalLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 1rem;
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
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export default Projects; 