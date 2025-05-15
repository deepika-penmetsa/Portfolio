import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCode, FaServer, FaGraduationCap, FaBookReader, FaUniversity, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaAward, FaGitAlt, FaDatabase, FaDocker, FaAws, FaTools, FaLaptopCode } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { FaCertificate } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiReact, SiRedux, SiNodedotjs, SiExpress, SiPython, SiDjango, SiBootstrap, SiTailwindcss, SiGithub, SiPostman, SiMysql, SiPostgresql, SiMongodb, SiHtml5, SiCss3 } from 'react-icons/si';
import { VscTerminalCmd } from 'react-icons/vsc';
import { TbBrandVscode } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaJava, FaPython, FaJs, FaCss3Alt, 
    FaAngular, FaProjectDiagram, FaHtml5, FaReact,
    FaChevronRight
} from 'react-icons/fa';
import { 
    SiSpringboot, SiAngular,
    SiTerraform, SiJunit5, SiJenkins, SiSelenium, 
    SiSwagger, SiJira, SiJetbrains, SiTableau
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { MdDeveloperMode } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';
import { DiDatabase } from 'react-icons/di';

const About = ({ resumeData }) => {
  // Initialize with the first experience item from resumeData
  const [activeItem, setActiveItem] = useState(0);
  
  // Format experience data for the interactive panel
  const experienceItems = resumeData?.experience?.map((exp, index) => ({
    id: `exp-${index}`,
    name: exp.company,
    date: exp.period,
    position: `${exp.title} @ ${exp.company}`,
    location: exp.location,
    bullets: exp.bullets,
  })) || [];

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  
  // Get the currently active item
  const activeItemData = experienceItems[activeItem];

  // Animation variants
  const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3, 
        ease: "easeIn" 
      }
    }
  };

  const staggerBullets = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <AboutSection
        id="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
      <div className="container">
        <SectionHeader>
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>Full Stack Developer | React Specialist | Problem Solver</SectionSubtitle>
        </SectionHeader>
        
        <AboutContent>
                <AboutTextContainer
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <SummaryCard>
                        <SectionDivider noUnderline>
                            <SectionDividerTitle>Professional Summary</SectionDividerTitle>
                        </SectionDivider>
                        <AboutText>
                            <p>{resumeData?.summary || "A skilled Full Stack Developer with experience in React, JavaScript, Python, SQL, and Django."}</p>
                        </AboutText>
                    </SummaryCard>
            
                    <SkillsContainer>
                        <SectionDivider noUnderline>
                            <SectionDividerTitle>My Tech Stack</SectionDividerTitle>
                        </SectionDivider>
                        
                        <SkillCategory>
                            <SkillsWrapper>
                                <SkillGroup>
                                    <SkillGroupTitle>
                                        <SkillCategoryIcon>
                                            <FaCode />
                                        </SkillCategoryIcon>
                                        Languages
                                    </SkillGroupTitle>
                                    <SkillsGrid>
                                        {[
                                            { icon: SiPython, name: 'Python' },
                                            { icon: FaJs, name: 'Javascript' },
                                            { icon: SiTypescript, name: 'Typescript' },
                                            { icon: FaDatabase, name: 'SQL' },
                                            { icon: FaHtml5, name: 'HTML5' },
                                            { icon: FaCss3Alt, name: 'CSS3' }
                                        ].map((skill, index) => (
                                            <SkillCard 
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                whileHover={{ 
                                                    y: -5,
                                                    transition: { duration: 0.2 } 
                                                }}
                                            >
                                                <SkillIcon>{React.createElement(skill.icon)}</SkillIcon>
                                                <span>{skill.name}</span>
                                            </SkillCard>
                                        ))}
                                    </SkillsGrid>
                                </SkillGroup>
                                
                                <SkillGroup>
                                    <SkillGroupTitle>
                                        <SkillCategoryIcon>
                                            <FaLaptopCode />
                                        </SkillCategoryIcon>
                                        Frameworks
                                    </SkillGroupTitle>
                                    <SkillsGrid>
                                        {[
                                            { icon: FaReact, name: 'ReactJS' },
                                            { icon: SiDjango, name: 'Django' },
                                            { icon: FaAngular, name: 'Angular' },
                                            { icon: SiRedux, name: 'Redux' }
                                        ].map((skill, index) => (
                                            <SkillCard 
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                whileHover={{ 
                                                    y: -5,
                                                    transition: { duration: 0.2 } 
                                                }}
                                            >
                                                <SkillIcon>{React.createElement(skill.icon)}</SkillIcon>
                                                <span>{skill.name}</span>
                                            </SkillCard>
                                        ))}
                                    </SkillsGrid>
                                </SkillGroup>
                                
                                <SkillGroup>
                                    <SkillGroupTitle>
                                        <SkillCategoryIcon>
                                            <FaTools />
                                        </SkillCategoryIcon>
                                        Developer Tools
                                    </SkillGroupTitle>
                                    <SkillsGrid>
                                        {[
                                            { icon: FaGitAlt, name: 'Git' },
                                            { icon: SiPostman, name: 'Postman' },
                                            { icon: SiSwagger, name: 'Swagger' },
                                            { icon: SiJira, name: 'JIRA' },
                                            { icon: BiLogoVisualStudio, name: 'VS Code' },
                                            { icon: SiTableau, name: 'Tableau' },
                                            { icon: FaAws, name: 'AWS' }
                                        ].map((skill, index) => (
                                            <SkillCard 
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                whileHover={{ 
                                                    y: -5,
                                                    transition: { duration: 0.2 } 
                                                }}
                                            >
                                                <SkillIcon>{React.createElement(skill.icon)}</SkillIcon>
                                                <span>{skill.name}</span>
                                            </SkillCard>
                                        ))}
                                    </SkillsGrid>
                                </SkillGroup>
                                
                                <SkillGroup>
                                    <SkillGroupTitle>
                                        <SkillCategoryIcon>
                                            <BsLightningCharge />
                                        </SkillCategoryIcon>
                                        Core Skills
                                    </SkillGroupTitle>
                                    <SkillsGrid>
                                        {[ 
                                            { icon: MdDeveloperMode, name: 'Data Structures & Algorithms' },
                                            { icon: FaProjectDiagram, name: 'System Design' },
                                            { icon: DiDatabase, name: 'DBMS' },
                                            { icon: FaServer, name: 'Restful APIs' },
                                            { icon: BsLightningCharge, name: 'Vibe Coding' }
                                        ].map((skill, index) => (
                                            <SkillCard 
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                whileHover={{ 
                                                    y: -5,
                                                    transition: { duration: 0.2 } 
                                                }}
                                            >
                                                <SkillIcon>{React.createElement(skill.icon)}</SkillIcon>
                                                <span>{skill.name}</span>
                                            </SkillCard>
                                        ))}
                                    </SkillsGrid>
                                </SkillGroup>
                            </SkillsWrapper>
                        </SkillCategory>
                    </SkillsContainer>
            
                    <ExperienceContainer>
                        <SectionDivider noUnderline>
                            <SectionDividerTitle>Experience</SectionDividerTitle>
                        </SectionDivider>
                        
                        <WorkContainer>
                            <CompaniesColumn>
                                {experienceItems.map((item, index) => (
                                    <CompanyButton 
                                        key={item.id}
                                        $isActive={activeItem === index}
                                        onClick={() => handleItemClick(index)}
                                        as={motion.div}
                                        whileHover={{ 
                                            x: activeItem === index ? 0 : 5, 
                                            transition: { duration: 0.2 } 
                                        }}
                                    >
                                        {item.name}
                                    </CompanyButton>
                                ))}
                            </CompaniesColumn>

                            <MobileTimeline>
                                {experienceItems.map((item, index) => (
                                    <TimelineItem 
                                        key={item.id}
                                        $isActive={activeItem === index}
                                        onClick={() => handleItemClick(index)}
                                    >
                                        <TimelinePoint $isActive={activeItem === index} />
                                        <TimelineCompany $isActive={activeItem === index}>
                                            {item.name}
                                            <TimelineDate>{item.date}</TimelineDate>
                                        </TimelineCompany>
                                    </TimelineItem>
                                ))}
                            </MobileTimeline>
                            
                            <ContentColumn>
                                <AnimatePresence mode="wait">
                                    <ContentPanel
                                        key={activeItemData?.id}
                                        variants={fadeInUp}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                    >
                                        <JobTitle>
                                            {activeItemData?.position?.split('@')[0].trim()} 
                                            <CompanySpan>@ {activeItemData?.position?.split('@')[1]?.trim()}</CompanySpan>
                                        </JobTitle>
                                        
                                        <JobDate>{activeItemData?.date}</JobDate>
                                        
                                        <BulletList variants={staggerBullets} initial="initial" animate="animate">
                                            {activeItemData?.bullets?.map((bullet, index) => (
                                                <BulletItem key={index} variants={fadeInUp}>
                                                    <BulletArrow>▹</BulletArrow>
                                                    <BulletContent>{bullet}</BulletContent>
                                                </BulletItem>
                                            ))}
                                        </BulletList>
                                    </ContentPanel>
                                </AnimatePresence>
                            </ContentColumn>
                        </WorkContainer>
                    </ExperienceContainer>
                </AboutTextContainer>
            </AboutContent>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled(motion.section)`
  padding: 100px 0;
  background-color: ${props => props.theme.background};
  min-height: 100vh;
  
  @media (max-width: 768px) {
  padding: 80px 0;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0;
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

const SectionDivider = styled.div`
  position: relative;
  margin-bottom: 30px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${props => props.noUnderline ? 'transparent' : props.theme.name === 'dark'
      ? 'linear-gradient(to right, #00FF00, rgba(0, 255, 0, 0.1))'
      : 'linear-gradient(to right, #0366D6, rgba(3, 102, 214, 0.1))'};
  }
`;

const SectionDividerTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.theme.name === 'dark' 
    ? '#00FF00' 
    : props.theme.syntax?.function || '#0366D6'};
  margin-bottom: 0;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const AboutTextContainer = styled(motion.div)`
  width: 100%;
  max-width: 1080px;
  color: ${props => props.theme.foreground};
  line-height: 1.7;
`;

const SummaryCard = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid ${props => props.theme.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 25px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    margin-bottom: 25px;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.8;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const SkillsContainer = styled.div`
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
  margin-bottom: 30px;
  }
`;

const SkillCategory = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid ${props => props.theme.border};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SkillGroup = styled.div`
  background-color: ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 0, 0, 0.3)' 
    : 'rgba(246, 248, 250, 0.5)'};
  border-radius: 12px;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const SkillGroupTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: ${props => props.theme.syntax?.function};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const SkillCategoryIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 170, 0, 0.2)' 
    : 'rgba(3, 102, 214, 0.1)'};
  color: ${props => props.theme.primary};
  font-size: 1.2rem;
  
  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const SkillCard = styled(motion.div)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 0, 0, 0.4)' 
    : 'rgba(246, 248, 250, 0.8)'};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 170, 0, 0.3)' 
    : 'rgba(3, 102, 214, 0.2)'};
  color: ${props => props.theme.foreground};
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  height: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => props.theme.name === 'dark' 
      ? 'rgba(0, 170, 0, 0.2)' 
      : 'rgba(3, 102, 214, 0.1)'};
    border-color: ${props => props.theme.primary};
    box-shadow: 0 5px 15px ${props => props.theme.name === 'dark' 
      ? 'rgba(0, 255, 0, 0.2)' 
      : 'rgba(3, 102, 214, 0.2)'};
  }
  
  span {
    font-size: 0.9rem;
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    height: 36px;
    padding: 6px 12px;
    font-size: 0.9rem;
    
    span {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 480px) {
    height: 32px;
    padding: 4px 10px;
    
    span {
      font-size: 0.8rem;
    }
  }
`;

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ExperienceContainer = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid ${props => props.theme.border};
  
  @media (max-width: 768px) {
    padding: 25px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const WorkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 10px;
      width: 2px;
      background-color: ${props => props.theme.name === 'dark'
        ? 'rgba(0, 170, 0, 0.3)'
        : 'rgba(3, 102, 214, 0.3)'};
      z-index: 1;
    }
  }
`;

const CompaniesColumn = styled.div`
  width: 200px;
  position: relative;
  z-index: 3;
  background-color: ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 0, 0, 0.3)' 
    : 'rgba(246, 248, 250, 0.5)'};
  border-radius: 12px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
    display: none; /* Hide the tabs on mobile */
  }
`;

const MobileTimeline = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: relative;
    padding-bottom: 20px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 35px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  ${props => props.$isActive && `
    transform: translateX(5px);
  `}
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelinePoint = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: ${props => props.$isActive 
    ? props.theme.primary 
    : props.theme.card.background};
  border: 2px solid ${props => props.theme.primary};
  border-radius: 50%;
  z-index: 2;
`;

const TimelineCompany = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.$isActive ? props.theme.primary : props.theme.foreground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: ${props => props.$isActive 
    ? props.theme.name === 'dark' ? 'rgba(0, 50, 0, 0.3)' : 'rgba(3, 102, 214, 0.1)' 
    : 'transparent'};
  border-radius: 10px;
  border: 1px solid ${props => props.$isActive 
    ? props.theme.primary 
    : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.name === 'dark' 
      ? 'rgba(0, 50, 0, 0.2)' 
      : 'rgba(3, 102, 214, 0.05)'};
  }
`;

const TimelineDate = styled.span`
  font-size: 0.9rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: ${props => props.theme.name === 'dark' ? 'rgba(0, 255, 0, 0.7)' : 'rgba(3, 102, 214, 0.7)'};
  background-color: ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 50, 0, 0.3)' 
    : 'rgba(3, 102, 214, 0.1)'};
  padding: 3px 8px;
  border-radius: 4px;
`;

const ContentColumn = styled.div`
  flex: 1;
  position: relative;
  padding-left: 30px;
  
  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 20px;
  }
`;

const CompanyButton = styled.div`
  width: 100%;
  padding: 15px 20px;
  text-align: left;
  background-color: transparent;
  color: ${props => props.$isActive ? props.theme.primary : props.theme.foreground};
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  border-left: 3px solid ${props => props.$isActive 
    ? props.theme.primary 
    : 'transparent'};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  &:hover {
    background-color: ${props => props.theme.name === 'dark' 
      ? 'rgba(0, 170, 0, 0.1)' 
      : 'rgba(3, 102, 214, 0.05)'};
    color: ${props => props.$isActive ? props.theme.primary : props.theme.foreground};
  }
  
  @media (max-width: 768px) {
    border-left: none;
    border-bottom: 3px solid ${props => props.$isActive 
      ? props.theme.primary 
      : 'transparent'};
    min-width: 150px;
    text-align: center;
    padding: 12px 15px;
  }
`;

const ContentPanel = styled(motion.div)`
  background-color: ${props => props.theme.name === 'dark' 
    ? 'rgba(0, 0, 0, 0.3)' 
    : 'rgba(246, 248, 250, 0.5)'};
  padding: 25px;
  border-radius: 12px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.foreground};
  margin-bottom: 10px;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CompanySpan = styled.span`
  color: ${props => props.theme.primary};
`;

const JobDate = styled.p`
  font-size: 0.9rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: ${props => props.theme.syntax?.comment || '#8892b0'};
  margin-bottom: 25px;
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const BulletList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  font-size: 1rem;
  line-height: 1.6;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }
`;

const BulletArrow = styled.span`
  color: ${props => props.theme.primary};
  margin-right: 10px;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const BulletContent = styled.span`
  color: ${props => props.theme.foreground};
`;

export default About;