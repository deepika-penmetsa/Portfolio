import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Experience.css';
import { IoChevronDownOutline } from 'react-icons/io5';

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

const staggerBullets = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } }
};

const Experience = ({ resumeData }) => {
  const experienceItems = resumeData.experience.map((exp, index) => ({
    id: `exp-${index}`,
    name: exp.company,
    position: `${exp.title} @ ${exp.company}`,
    date: exp.period,
    bullets: exp.bullets,
    skills: exp.skills || [] 
  }));

  const [activeItem, setActiveItem] = useState(0);
  const activeItemData = experienceItems[activeItem];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navRef = useRef(null);
  const [navWidth, setNavWidth] = useState(0);
  const [navPosition, setNavPosition] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (navRef.current && !isMobile) {
      const tabs = navRef.current.querySelectorAll('.company-tab');
      if (tabs[activeItem]) {
        const tab = tabs[activeItem];
        setNavPosition(tab.offsetLeft);
        setNavWidth(tab.offsetWidth);
      }
    }
  }, [activeItem, isMobile]);

  const handleItemClick = (index) => {
    if (isMobile) {
      setExpandedItems(prev => {
        const isCurrentlyExpanded = prev[index];
        return isCurrentlyExpanded 
          ? { ...prev, [index]: false } 
          : { [index]: true };
      });
    } else {
      setActiveItem(index);
    }
  };

  return (
    <motion.section 
      className="fade-section"
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My Professional Journey</p>
        </div>
      </div>

      <div className="experience-container">
        {!isMobile && (
          <div className="experience-nav-wrapper">
            <div className="experience-nav" ref={navRef}>
              {experienceItems.map((item, index) => (
                <button 
                  className={`company-tab ${activeItem === index ? 'active' : ''}`}
                  key={`tab-${item.id}`}
                  onClick={() => handleItemClick(index)}
                  aria-selected={activeItem === index}
                  role="tab"
                >
                  <span className="company-name">{item.name}</span>
                  <span className="company-date">{item.date}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="work-container">
          {isMobile && (
            <div className="vertical-timeline">
              {experienceItems.map((item, index) => (
                <div 
                  className={`timeline-item ${expandedItems[index] ? 'expanded' : ''}`}
                  key={`timeline-${item.id}`}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="timeline-connector">
                    <div className={`timeline-point ${expandedItems[index] ? 'active' : ''}`}></div>
                  </div>
                  <div className={`timeline-content ${expandedItems[index] ? 'active' : ''}`}>
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-title">{item.position.split('@')[0].trim()}</h4>
                        <span className="timeline-company"> @ {item.position.split('@')[1]?.trim()}</span>
                        <span className="timeline-date">{item.date}</span>
                      </div>
                      <motion.div 
                        className="expand-icon"
                        animate={{ rotate: expandedItems[index] ? 180 : 0 }}
                      >
                        <IoChevronDownOutline />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedItems[index] && (
                        <motion.div 
                          className="timeline-details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.ul className="bullet-list" variants={staggerBullets} initial="initial" animate="animate">
                            {item.bullets.map((bullet, i) => (
                              <motion.li key={i} className="bullet-item" variants={fadeInUp}>
                                <span className="bullet-arrow">▹</span>
                                <span className="bullet-content">{bullet}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                          
                          {item.skills && item.skills.length > 0 && (
                            <motion.div 
                              className="skills-container"
                              variants={fadeInUp}
                            >
                              <h5 className="skills-title">Technologies & Tools Used:</h5>
                              <div className="skills-list">
                                {item.skills.map((skill, i) => (
                                  <span key={i} className="skill-tag">{skill}</span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {!isMobile && (
            <div className="content-column">
              <AnimatePresence mode="wait">
                <motion.div
                  className="content-panel"
                  key={activeItemData?.id}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="job-header">
                    <div className="job-title-container">
                      <h3 className="job-title">
                        {activeItemData?.position?.split('@')[0].trim()} 
                        <span className="company-span">{activeItemData?.position?.split('@')[1]?.trim()}</span>
                      </h3>
                    </div>
                    <div className="job-date-container">
                      <p className="job-date">{activeItemData?.date}</p>
                    </div>
                  </div>
                  
                  <motion.ul className="bullet-list" variants={staggerBullets} initial="initial" animate="animate">
                    {activeItemData?.bullets?.map((bullet, index) => (
                      <motion.li key={index} className="bullet-item" variants={fadeInUp}>
                        <span className="bullet-arrow">▹</span>
                        <span className="bullet-content">{bullet}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  {activeItemData?.skills && activeItemData.skills.length > 0 && (
                    <motion.div 
                      className="skills-container"
                      variants={fadeInUp}
                    >
                      <h5 className="skills-title">Technologies & Tools Used:</h5>
                      <div className="skills-list">
                        {activeItemData.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 