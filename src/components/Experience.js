import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Experience.css';

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
  // Get experience data from resumeData
  const experienceItems = resumeData.experience.map((exp, index) => ({
    id: `exp-${index}`,
    name: exp.company,
    position: `${exp.title} @ ${exp.company}`,
    date: exp.period,
    bullets: exp.bullets
  }));

  const [activeItem, setActiveItem] = useState(0);
  const activeItemData = experienceItems[activeItem];

  const handleItemClick = (index) => {
    setActiveItem(index);
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
        <div className="company-tabs">
          {experienceItems.map((item, index) => (
            <div 
              className={`company-tab ${activeItem === index ? 'active' : ''}`}
              key={`tab-${item.id}`}
              onClick={() => handleItemClick(index)}
            >
              <span className="company-name">{item.name}</span>
              <span className="company-date">{item.date}</span>
            </div>
          ))}
        </div>
        
        <div className="work-container">
          {/* Desktop Timeline */}
          <div className="desktop-timeline">
            {experienceItems.map((item, index) => (
              <div 
                className={`timeline-item ${activeItem === index ? 'active' : ''}`}
                key={`desktop-${item.id}`}
                onClick={() => handleItemClick(index)}
              >
                <div className={`timeline-point ${activeItem === index ? 'active' : ''}`}></div>
                <div className={`timeline-company ${activeItem === index ? 'active' : ''}`}>
                  {item.name}
                  <span className="timeline-date">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Timeline */}
          <div className="mobile-timeline">
            {experienceItems.map((item, index) => (
              <div 
                className={`timeline-item ${activeItem === index ? 'active' : ''}`}
                key={`mobile-${item.id}`}
                onClick={() => handleItemClick(index)}
              >
                <div className={`timeline-point ${activeItem === index ? 'active' : ''}`}></div>
                <div className={`timeline-company ${activeItem === index ? 'active' : ''}`}>
                  {item.name}
                  <span className="timeline-date">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
          
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
                <h3 className="job-title">
                  {activeItemData?.position?.split('@')[0].trim()} 
                  <span className="company-span">@ {activeItemData?.position?.split('@')[1]?.trim()}</span>
                </h3>
                
                <p className="job-date">{activeItemData?.date}</p>
                
                <motion.ul className="bullet-list" variants={staggerBullets} initial="initial" animate="animate">
                  {activeItemData?.bullets?.map((bullet, index) => (
                    <motion.li key={index} className="bullet-item" variants={fadeInUp}>
                      <span className="bullet-arrow">▹</span>
                      <span className="bullet-content">{bullet}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 