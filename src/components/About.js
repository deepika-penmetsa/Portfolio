import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  FaCode,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
  FaMapMarkerAlt,
  FaCertificate,
  FaStar,FaDatabase,
  FaServer, FaSun, FaGraduationCap, FaAws, FaGitAlt,
  FaDocker
} from 'react-icons/fa';


import { 
    SiTypescript, 
    SiRedux, 
    SiJavascript, 
    SiReact, 
    SiHtml5, 
    SiCss3, 
    SiPython, 
    SiDjango, 
    SiPostman, 
    SiVisualstudiocode, 
    SiGithub,
    SiPostgresql,
    SiMysql,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiBootstrap
} from 'react-icons/si';
import { GiDiploma } from 'react-icons/gi';
import { VscTerminalCmd } from 'react-icons/vsc';
import { TbBrandVscode } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookReader } from 'react-icons/fa';

const About = ({ resumeData }) => {
const personalInfo = [
    "Frontend Developer specializing in React & TypeScript, crafting interfaces that are both beautiful and functional",
    "Built AI-powered UI components at Ignitarium and high-performance web apps at Sony, with a focus on user experience",
    "Passionate about clean code, intuitive design, and solving real-world problems through technology",
    "When not coding: hiking trails, reading tech blogs, or getting lost in a good thriller novel"
];

  const [educationFilter, setEducationFilter] = useState('all');

  const techIcons = {
    // Languages
    'JavaScript': <SiJavascript size={22} />,
    'TypeScript': <SiTypescript size={22} />,
    'HTML': <SiHtml5 size={22} />,
    'CSS': <SiCss3 size={22} />,
    'Python': <SiPython size={22} />,
    'SQL': <FaDatabase size={22} />,
    
    // Frameworks & Libraries
    'React': <SiReact size={22} />,
    'Node.js': <SiNodedotjs size={22} />,
    'Redux': <SiRedux size={22} />,
    'Django': <SiDjango size={22} />,
    'Express': <SiExpress size={22} />,
    'Tailwind': <SiTailwindcss size={22} />,
    'Bootstrap': <SiBootstrap size={22} />,
    
    // Tools & Platforms
    'GitHub': <SiGithub size={22} />,
    'Git': <FaGitAlt size={22} />,
    'Postman': <SiPostman size={22} />,
    'VS Code': <TbBrandVscode size={22} />,
    'MongoDB': <SiMongodb size={22} />,
    'PostgreSQL': <SiPostgresql size={22} />,
    'MySQL': <SiMysql size={22} />,
    'Terminal': <VscTerminalCmd size={22} />,
    'Docker': <FaDocker size={22} />,
    'AWS': <FaAws size={22} />,
  };

  const filteredEducation = resumeData.education.filter(edu => {
    if (educationFilter === 'all') return true;
    if (educationFilter === 'degrees') return edu.type === 'degree';
    if (educationFilter === 'certifications') return edu.type === 'certification';
    return true;
  });

  const degreeCount = resumeData.education.filter(edu => edu.type === 'degree').length;
  const certificationCount = resumeData.education.filter(edu => edu.type === 'certification').length;

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
              
              <SkillsCategoryTitle>
                <FaCode size={18} /> Programming Languages
              </SkillsCategoryTitle>
              <SkillsContent>
                {resumeData.skills.languages.map((skill, index) => (
                  <SkillBadge key={`lang-${index}`} category="language">
                    <SkillIcon category="language">{techIcons[skill] || <FaCode size={22} />}</SkillIcon>
                    {skill}
                  </SkillBadge>
                ))}
              </SkillsContent>
              
              <SkillsCategoryTitle>
                <FaServer size={18} /> Frameworks & Tools
              </SkillsCategoryTitle>
              <SkillsContent>
                {resumeData.skills.frameworks.map((skill, index) => (
                  <SkillBadge key={`framework-${index}`} category="framework">
                    <SkillIcon category="framework">{techIcons[skill] || <FaCode size={22} />}</SkillIcon>
                    {skill}
                  </SkillBadge>
                ))}
              </SkillsContent>
              
              {resumeData.skills.coursework && resumeData.skills.coursework.length > 0 && (
                <>
                  <SkillsCategoryTitle>
                    <FaGraduationCap size={18} /> Coursework
                  </SkillsCategoryTitle>
                  <SkillsContent>
                    {resumeData.skills.coursework.map((course, index) => (
                      <SkillBadge key={`course-${index}`} category="course">
                        <SkillIcon category="course"><FaBookReader size={22} /></SkillIcon>
                        {course}
                      </SkillBadge>
                    ))}
                  </SkillsContent>
                </>
              )}
            </SkillsContainer>
            
            <InterestsContainer>
              <InterestsTitle>Professional Interests</InterestsTitle>
              <InterestsList>
                <InterestItem>Frontend Development</InterestItem>
                <InterestItem>Full Stack Web Development</InterestItem>
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
              <EducationCardWrapper
                layout
                key={`edu-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <EducationCard isCertification={edu.type === 'certification'}>
                  <EducationInfo>
                    <EducationHeader>
                      <EducationTypeTag isCertification={edu.type === 'certification'}>
                        {edu.type === 'certification' ? 
                          <><FaCertificate size={14} /> Certification</> : 
                          <><GiDiploma size={14} /> Degree</>
                        }
                      </EducationTypeTag>
                    </EducationHeader>
                    <EducationDegree>{edu.degree}</EducationDegree>
                    <EducationSchool>
                      {edu.type === 'certification' ? 
                        <FaAward size={14} /> :
                        <FaUniversity size={14} />
                      }
                      {edu.institution}
                    </EducationSchool>
                    {edu.location && (
                      <EducationLocation>
                        <FaMapMarkerAlt size={14} />
                        {edu.location}
                      </EducationLocation>
                    )}
                    <EducationPeriod>
                      <FaCalendarAlt size={14} />
                      {edu.period}
                    </EducationPeriod>
                    {edu.gpa && (
                      <EducationDetail>
                        <span><FaStar size={14} /> GPA:</span> {edu.gpa}
                      </EducationDetail>
                    )}
                    {edu.description && (
                      <EducationDescription>
                        {edu.description}
                      </EducationDescription>
                    )}
                    
                  </EducationInfo>
                </EducationCard>
              </EducationCardWrapper>
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

const SkillsCategoryTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 15px;
  margin-top: 20px;
  color: ${props => props.theme.syntax.variable};
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${props => props.theme.primary};
  }
`;

const SkillsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
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
`;

const SkillIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  
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
  padding: 60px 0;
  background-color: transparent;
  border-radius: 16px;
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 40px;
  text-align: center;
  color: ${props => props.theme.syntax.variable};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${props => props.theme.primary};
    border-radius: 3px;
  }
`;

const EducationContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCardWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const EducationCard = styled.div`
  display: flex;
  height: 100%;
  background-color: ${props => props.theme.card.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    border-color: ${props => 
      props.isCertification ? 
      props.theme.secondary : 
      props.theme.primary};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 6px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const EducationInfo = styled.div`
  padding: 20px;
  flex: 1;
`;

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const EducationTypeTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 50px;
  background-color: ${props => 
    props.isCertification ? 
    `${props.theme.secondary}20` : 
    `${props.theme.primary}20`};
  color: ${props => 
    props.isCertification ? 
    props.theme.secondary : 
    props.theme.primary};
  box-shadow: 0 2px 5px ${props => 
    props.isCertification ? 
    `${props.theme.secondary}30` : 
    `${props.theme.primary}30`};
  margin-bottom: 5px;
`;

const EducationDegree = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 12px;
  color: ${props => props.theme.foreground};
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.01em;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const EducationSchool = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  margin-bottom: 10px;
  color: ${props => props.theme.syntax.function};
  font-weight: 500;
  
  svg {
    color: ${props => props.theme.primary};
    min-width: 14px;
  }
`;

const EducationPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: ${props => props.theme.syntax.comment};
  margin-bottom: 12px;
  
  svg {
    color: ${props => props.theme.primary};
    min-width: 14px;
  }
`;

const EducationDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: ${props => props.theme.foreground};
  margin-bottom: 8px;
  
  span {
    font-weight: 600;
    color: ${props => props.theme.syntax.variable};
    display: flex;
    align-items: center;
    gap: 5px;
    
    svg {
      color: ${props => props.theme.primary};
    }
  }
`;

const CertificationButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  padding: 8px 16px;
  background-color: ${props => 
    props.isCertification ? 
    props.theme.secondary : 
    props.theme.primary};
  color: white;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => 
      props.isCertification ? 
      props.theme.primary : 
      props.theme.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
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
  background-color: ${props => props.theme.card.background};
  color: ${props => props.theme.foreground};
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.border};
`;

const EducationDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${props => props.theme.foreground};
  opacity: 0.9;
  margin-top: 12px;
  margin-bottom: 12px;
border-left: 3px solid ${props => props.theme.border};
  padding-left: 12px;
`;

const EducationLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: ${props => props.theme.syntax.variable};
  margin-bottom: 10px;
  
  svg {
    color: ${props => props.theme.secondary};
    min-width: 14px;
  }
`;

export default About;