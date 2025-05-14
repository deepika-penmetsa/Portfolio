import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCode, FaServer, FaGraduationCap, FaBookReader, FaUniversity, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaAward, FaGitAlt, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
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
                <SectionSubtitle>Full Stack Developer  |  React Specialist  |  Problem Solver</SectionSubtitle>
            </SectionHeader>

            <AboutContent>
                <AboutTextContainer
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <SkillsTitle>Professional Summary</SkillsTitle>
                    <AboutText>
                        <p>{resumeData?.summary || "A skilled Full Stack Developer with experience in React, JavaScript, Python, SQL, and Django."}</p>
                    </AboutText>

                    <SkillsContainer>
                        <SkillsTitle>My Tech Stack</SkillsTitle>
                        
                        <SkillCategory>
                            <SkillCategoryTitle>Languages and Frameworks</SkillCategoryTitle>
                            <SkillsGrid>
                                {[
                                    { icon: SiPython, name: 'Python' },
                                    { icon: FaReact, name: 'ReactJS' },
                                    { icon: SiDjango, name: 'Django' },
                                    { icon: FaAngular, name: 'Angular' },
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
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <skill.icon />
                                        <span>{skill.name}</span>
                                    </SkillCard>
                                ))}
                            </SkillsGrid>
                        </SkillCategory>

                        <SkillCategory>
                            <SkillCategoryTitle>Developer Tools</SkillCategoryTitle>
                            <SkillsGrid>
                                {[
                                    { icon: FaGitAlt, name: 'Git' },
                                    { icon: SiRedux, name: 'Redux' },
                                    { icon: SiPostman, name: 'Postman' },
                                    { icon: SiSwagger, name: 'Swagger' },
                                    { icon: SiJira, name: 'JIRA' },
                                    { icon: MdDeveloperMode, name: 'Agile Methodologies' },
                                    { icon: SiJetbrains, name: 'Jetbrains IDEs' },
                                    { icon: BiLogoVisualStudio, name: 'VS Code' },
                                    { icon: SiTableau, name: 'Tableau' },
                                    { icon: FaAws, name: 'AWS' },
                                    { icon: FaAws, name: 'AWS S3' }
                                ].map((skill, index) => (
                                    <SkillCard 
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <skill.icon />
                                        <span>{skill.name}</span>
                                    </SkillCard>
                                ))}
                            </SkillsGrid>
                        </SkillCategory>

                        <SkillCategory>
                            <SkillCategoryTitle>Core Skills</SkillCategoryTitle>
                            <SkillsGrid>
                                {[ 
                                    { icon: MdDeveloperMode, name: 'Data Structures and Algorithms' },
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
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <skill.icon />
                                        <span>{skill.name}</span>
                                    </SkillCard>
                                ))}
                            </SkillsGrid>
                        </SkillCategory>
                    </SkillsContainer>
                    
                    <ExperienceContainer>
                        <SkillsTitle>Experience</SkillsTitle>
                        
                        <WorkContainer>
                            <CompaniesColumn>
                                {experienceItems.map((item, index) => (
                                    <CompanyButton 
                                        key={item.id}
                                        isActive={activeItem === index}
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
                                            {activeItemData?.position?.split('@')[0].trim()} <CompanySpan>@ {activeItemData?.position?.split('@')[1]?.trim()}</CompanySpan>
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
  padding: 6rem 0;
  background-color: ${props => props.theme.background || 'var(--bg-color)'};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.syntax?.function || 'var(--heading-color)'};
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.foreground || 'var(--text-color)'};
  opacity: 0.8;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  background-color: ${props => props.theme.background || 'var(--bg-color)'};
`;

const AboutTextContainer = styled(motion.div)`
  width: 100%;
  max-width: 1080px;
  color: ${props => props.theme.foreground || 'var(--text-color)'};
  line-height: 1.7;
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

const SkillsTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.syntax?.function || 'var(--heading-color)'};
  font-weight: 600;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.primary || 'var(--primary-color)'};
    opacity: 0.6;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const SkillCategoryTitle = styled.h5`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  color: ${props => props.theme.syntax?.function || 'var(--heading-color)'};
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillCard = styled(motion.div)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: none;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.primary || 'var(--primary-color, #d1d5db)'};
  box-shadow: none;
  color: ${props => props.theme.primary || 'var(--primary-color)'};
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  max-width: 100%;

  &:hover {
    background-color: ${props => props.theme.primary || 'var(--primary-color)'};
    color: ${props => props.theme.card?.background || 'var(--bg-color)'};
    border-color: ${props => props.theme.primary || 'var(--primary-color)'};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(${props => 
      props.theme.primary 
        ? props.theme.name === 'dark' 
          ? '0, 255, 0' 
          : '0, 102, 204' 
        : 'var(--primary-color-rgb)'}, 0.3);
  }

  span {
    text-align: left;
    font-size: 0.95rem;
    color: inherit;
    font-weight: 500;
    white-space: nowrap;
  }

  svg {
    font-size: 1.35rem;
    color: inherit;
    min-width: 1.35rem;
    min-height: 1.35rem;
    max-width: 1.35rem;
    max-height: 1.35rem;
    margin-right: 0.4rem;
    display: block;
  }

  @media (max-width: 768px) {
    height: 36px;
    min-height: 36px;
    max-height: 36px;
    font-size: 0.95rem;
    padding: 0.3rem 0.7rem;

    svg {
      font-size: 1.1rem;
      min-width: 1.1rem;
      min-height: 1.1rem;
      max-width: 1.1rem;
      max-height: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    height: 32px;
    min-height: 32px;
    max-height: 32px;
    font-size: 0.9rem;
    padding: 0.2rem 0.5rem;
    
    svg {
      font-size: 1rem;
      min-width: 1rem;
      min-height: 1rem;
      max-width: 1rem;
      max-height: 1rem;
    }
  }
`;

const ExperienceContainer = styled.div`
  margin-top: 2rem;
`;

const WorkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompaniesColumn = styled.div`
  width: 200px;
  position: relative;
  z-index: 3;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    overflow-x: auto;
  }
`;

const ContentColumn = styled.div`
  flex: 1;
  position: relative;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const CompanyButton = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 20px;
  text-align: left;
  background-color: transparent;
  color: ${props => props.isActive ? props.theme.primary || '#64ffda' : props.theme.foreground || '#8892b0'};
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  border-left: 2px solid ${props => props.isActive ? props.theme.primary || '#64ffda' : 'rgba(255, 255, 255, 0.1)'};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: ${props => props.isActive ? props.theme.primary || '#64ffda' : props.theme.foreground || '#ccd6f6'};
  }
  
  @media (max-width: 768px) {
    border-left: none;
    border-bottom: 2px solid ${props => props.isActive ? props.theme.primary || '#64ffda' : 'rgba(255, 255, 255, 0.1)'};
    min-width: 150px;
    text-align: center;
  }
`;

const ContentPanel = styled(motion.div)`
  background-color: transparent;
  padding: 10px 20px;
  
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.foreground || '#ccd6f6'};
  margin-bottom: 5px;
  line-height: 1.3;
`;

const CompanySpan = styled.span`
  color: ${props => props.theme.primary || '#64ffda'};
`;

const JobDate = styled.p`
  font-size: 0.9rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: ${props => props.theme.syntax?.comment || '#8892b0'};
  margin-bottom: 25px;
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
  line-height: 1.5;
`;

const BulletArrow = styled.span`
  color: ${props => props.theme.primary || '#64ffda'};
  margin-right: 10px;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const BulletContent = styled.span`
  color: ${props => props.theme.foreground || '#8892b0'};
`;

export default About;