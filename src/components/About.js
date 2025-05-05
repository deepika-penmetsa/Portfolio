import React from 'react';
import styled from 'styled-components';
import { 
  FaJs, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt,
  FaCode
} from 'react-icons/fa';
import { SiTypescript, SiRedux } from 'react-icons/si';

const About = ({ resumeData }) => {
const personalInfo = [
    "Frontend Developer specializing in React & TypeScript, crafting interfaces that are both beautiful and functional",
    "Built AI-powered UI components at Ignitarium and high-performance web apps at Sony, with a focus on user experience",
    "Passionate about clean code, intuitive design, and solving real-world problems through technology",
    "When not coding: hiking trails, reading tech blogs, or getting lost in a good thriller novel"
];

  const techIcons = {
    'JavaScript': <FaJs size={22} />,
    'TypeScript': <SiTypescript size={22} />,
    'HTML': <FaHtml5 size={22} />,
    'CSS': <FaCss3Alt size={22} />,
    'React': <FaReact size={22} />,
    'Node.js': <FaNodeJs size={22} />,
    'Redux': <SiRedux size={22} />,
    'Git': <FaGitAlt size={22} />,
  };

  return (
    <AboutContainer>
      <div className="container">
        <SectionHeader>
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>My Journey & Expertise</SectionSubtitle>
        </SectionHeader>
        
        <AboutContent>
          <div>
            <AboutText>
              <p>{resumeData.summary}</p>
              {personalInfo.map((info, index) => (
                <p key={index}>{info}</p>
              ))}
            </AboutText>
            
            <SkillsContainer>
              <SkillsTitle>Technical Expertise</SkillsTitle>
              <SkillsContent>
                {resumeData.skills.languages.map((skill, index) => (
                  <SkillBadge key={`lang-${index}`}>
                    <SkillIcon>{techIcons[skill] || <FaCode size={22} />}</SkillIcon>
                    {skill}
                  </SkillBadge>
                ))}
                {resumeData.skills.frameworks.map((skill, index) => (
                  <SkillBadge key={`framework-${index}`}>
                    <SkillIcon>{techIcons[skill] || <FaCode size={22} />}</SkillIcon>
                    {skill}
                  </SkillBadge>
                ))}
              </SkillsContent>
            </SkillsContainer>
            
            <InterestsContainer>
              <InterestsTitle>Professional Interests</InterestsTitle>
              <InterestsList>
                <InterestItem>Frontend Development</InterestItem>
                <InterestItem>User Experience Design</InterestItem>
                <InterestItem>System Architecture</InterestItem>
                <InterestItem>Data Visualization</InterestItem>
                <InterestItem>API Design</InterestItem>
                <InterestItem>Performance Optimization</InterestItem>
              </InterestsList>
            </InterestsContainer>
          </div>
          
          <ExperienceContainer>
            <ExperienceTitle>Professional Experience</ExperienceTitle>
            <Timeline>
              {resumeData.experience.map((exp, index) => (
                <TimelineItem key={index}>
                  <TimelineDot />
                  <TimelineContent>
                    <TimelineTitle>
                      {exp.title} @ {exp.company}
                    </TimelineTitle>
                    <TimelineDate>{exp.period}</TimelineDate>
                    <TimelineDescription>
                      <ul>
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>
                    </TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </ExperienceContainer>
        </AboutContent>
        
        <EducationContainer>
          <EducationTitle>Education & Certifications</EducationTitle>
          <EducationContent>
            {resumeData.education.map((edu, index) => (
              <EducationItem key={index}>
                <EducationDegree>{edu.degree}</EducationDegree>
                <EducationSchool>{edu.institution}</EducationSchool>
                <EducationPeriod>{edu.period}</EducationPeriod>
                {edu.gpa && <EducationDetail>GPA: {edu.gpa}</EducationDetail>}
              </EducationItem>
            ))}
          </EducationContent>
        </EducationContainer>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 80px 0;
  background-color: ${props => props.theme.section.background};
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutText = styled.div`
  margin-bottom: 30px;
  line-height: 1.7;
  
  p {
    margin-bottom: 1rem;
  }
`;

const SkillsContainer = styled.div`
  margin-bottom: 30px;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.syntax.variable};
`;

const SkillsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillBadge = styled.span`
  background-color: ${props => props.theme.card.background};
  color: ${props => props.theme.foreground};
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    border-color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

const SkillIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }
`;

const ExperienceContainer = styled.div``;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.syntax.variable};
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background-color: ${props => props.theme.border};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 30px;
  padding-left: 60px;
  
  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 0;
  left: 13px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  z-index: 1;
`;

const TimelineContent = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: ${props => props.theme.foreground};
`;

const TimelineDate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.syntax.comment};
  margin-bottom: 15px;
`;

const TimelineDescription = styled.div`
  ul {
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
`;

const EducationContainer = styled.div`
  margin-top: 60px;
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: ${props => props.theme.syntax.variable};
`;

const EducationContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const EducationItem = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
  max-width: 350px;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.primary};
  }
`;

const EducationDegree = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: ${props => props.theme.foreground};
`;

const EducationSchool = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${props => props.theme.syntax.function};
`;

const EducationPeriod = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.syntax.comment};
  margin-bottom: 12px;
`;

const EducationDetail = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.foreground};
`;

const InterestsContainer = styled.div`
  margin-bottom: 30px;
`;

const InterestsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.syntax.variable};
`;

const InterestsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const InterestItem = styled.span`
  background-color: ${props => props.theme.name === 'dark' ? 'rgba(0, 170, 0, 0.1)' : 'rgba(3, 102, 214, 0.1)'};
  color: ${props => props.theme.foreground};
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.name === 'dark' ? '#00AA00' : props.theme.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    border-color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

export default About; 