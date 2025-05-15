import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import { FaPython, FaDatabase, FaJs, FaHtml5, FaCss3Alt, 
    FaReact, FaAws, FaGitAlt,
    FaProjectDiagram
} from 'react-icons/fa';
import { VscDebugConsole } from 'react-icons/vsc';
import { FaPix } from 'react-icons/fa6';
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { 
    SiTypescript, SiAngular,
    SiNodedotjs, SiExpress, SiDjango, 
    SiMongodb, SiRedux, SiPostman, 
    SiSwagger, SiJira, SiJetbrains, SiLeetcode, SiDatastax,
    SiThealgorithms
} from 'react-icons/si';
import { LuFigma } from 'react-icons/lu';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { BsLightningCharge } from 'react-icons/bs';

const About = ({ resumeData }) => {
    return (
        <motion.section 
            className="fade-section"
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Full Stack Developer  |  React Specialist  |  Problem Solver</p>
                </div>

                <div className="about-content">
                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="about-flex-container">
                            <div className="summary-column">
                                <h4 className="skills-title">Professional Summary</h4>
                                <p>
                                    A skilled Full Stack Developer with experience in React, JavaScript, Python, SQL, and Django. 
                                    Proficient in UI design, debugging, performance optimization, and API integration. 
                                    Demonstrated expertise in building scalable web applications.
                                </p>
                                <p>
                                    Proven ability to enhance project workflows and development efficiency, aiming to leverage these 
                                    skills to contribute to innovative and high-performance web solutions.
                                </p>
                            </div>
                            
                            <div className="stats-column">
                                <div className="stats-chip">
                                    <div className="chip-icon">
                                        <SiLeetcode />
                                    </div>
                                    <div className="chip-content">
                                        <div className="chip-number">300+</div>
                                        <div className="chip-label">LeetCode Problems</div>
                                    </div>
                                </div>

                                <div className="stats-chip">
                                    <div className="chip-icon">
                                        <PiSuitcaseSimpleFill />
                                    </div>
                                    <div className="chip-content">
                                        <div className="chip-number">4+</div>
                                        <div className="chip-label">Years Experience</div>
                                    </div>
                                </div>
                                
                                <div className="stats-chip">
                                    <div className="chip-icon">
                                        <GoProjectRoadmap />
                                    </div>
                                    <div className="chip-content">
                                        <div className="chip-number">5+</div>
                                        <div className="chip-label">Full Stack Projects</div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>

                        <div className="skills-container">
                            <h4 className="skills-title">My Tech Stack</h4>
                            
                            <div className="skill-category">
                                <h5>Languages</h5>
                                <div className="skills-grid">
                                    {[
                                        { icon: FaPython, name: 'Python' },
                                        { icon: FaJs, name: 'JavaScript' },
                                        { icon: SiTypescript, name: 'TypeScript' },
                                        { icon: FaHtml5, name: 'HTML5' },
                                        { icon: FaCss3Alt, name: 'CSS3' },
                                        { icon: FaDatabase, name: 'SQL' }
                                    ].map((skill, index) => (
                                        <motion.div 
                                            className="skill-card"
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <skill.icon />
                                            <span>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-category">
                                <h5>Frameworks & Tools</h5>
                                <div className="skills-grid">
                                    {[
                                        { icon: FaReact, name: 'ReactJS' },
                                        { icon: SiDjango, name: 'Django' },
                                        { icon: FaGitAlt, name: 'Git' },
                                        { icon: FaAws, name: 'AWS' },
                                        { icon: FaPix, name: 'REST APIs' },
                                        { icon: SiAngular, name: 'Angular' },
                                        { icon: SiNodedotjs, name: 'NodeJs' },
                                        { icon: SiExpress, name: 'ExpressJs' },
                                        { icon: SiRedux, name: 'Redux' },
                                        { icon: SiJira, name: 'Jira' },
                                        { icon: SiMongodb, name: 'MongoDB' },
                                        { icon: SiPostman, name: 'Postman' },
                                        { icon: SiSwagger, name: 'Swagger' },
                                        { icon: BiLogoVisualStudio, name: 'VSC' },
                                        { icon: SiJetbrains, name: 'JetBrains IDEs' }
                                    ].map((skill, index) => (
                                        <motion.div 
                                            className="skill-card"
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <skill.icon />
                                            <span>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-category">
                                <h5>Core Skills</h5>
                                <div className="skills-grid">
                                    {[ 
                                        { icon: SiDatastax, name: 'Data Structures' },
                                        { icon: FaDatabase, name: 'DBMS' },
                                        { icon: SiThealgorithms, name: 'Algorithms' },
                                        { icon: LuFigma, name: 'UI Design' },
                                        { icon: FaProjectDiagram, name: 'System Design' },
                                        { icon: VscDebugConsole, name: 'Debugging' },
                                        { icon: BsLightningCharge, name: 'API Integration' }
                                    ].map((skill, index) => (
                                        <motion.div 
                                            className="skill-card"
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <skill.icon />
                                            <span>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;