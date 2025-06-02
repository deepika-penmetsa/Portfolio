import React from 'react';
import styled from 'styled-components';
import { 
  MdEmail, 
  MdLocationOn, 
  MdPhone,
  MdDownload,
  MdOpenInNew
} from 'react-icons/md';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Contact = ({ resumeData }) => {
  const resumePath = '/assets/Deepika_Resume.pdf';

  return (
    <ContactContainer id="contact">
      <div className="container">
        <SectionHeader>
          <SectionTitle>Contact Me</SectionTitle>
          <SectionSubtitle>Get In Touch</SectionSubtitle>
        </SectionHeader>
        
        <ContactContent>
          <ContactInfo>
            <ContactInfoTitle>Let's Talk</ContactInfoTitle>
            <ContactInfoText>
              {resumeData.files && resumeData.files["contact.json"] && resumeData.files["contact.json"].message 
                ? resumeData.files["contact.json"].message 
                : "I'm interested in freelance opportunities and collaborations. If you have a project that needs some creative touch, let's connect!"}
            </ContactInfoText>
            
            <ContactInfoItems>
              <ContactInfoItem>
                <ContactIcon>
                  <MdEmail />
                </ContactIcon>
                <ContactInfoValue>
                  <a href={`mailto:${resumeData.personal.email}`}>
                    {resumeData.personal.email}
                  </a>
                </ContactInfoValue>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon>
                  <MdPhone />
                </ContactIcon>
                <ContactInfoValue>
                  <a href={`tel:${resumeData.personal.phone}`}>
                    {resumeData.personal.phone}
                  </a>
                </ContactInfoValue>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon>
                  <MdLocationOn />
                </ContactIcon>
                <ContactInfoValue>{resumeData.personal.location}</ContactInfoValue>
              </ContactInfoItem>
            </ContactInfoItems>
            
            <SocialLinks>
              {resumeData.files && resumeData.files["contact.json"] && resumeData.files["contact.json"].profiles
                ? resumeData.files["contact.json"].profiles.map((profile, index) => (
                    <SocialLink 
                      key={index}
                      href={profile.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={profile.network}
                    >
                      {profile.network === 'LinkedIn' ? <FaLinkedin /> : null}
                      {profile.network === 'GitHub' ? <FaGithub /> : null}
                      {profile.network === 'Email' ? <MdEmail /> : null}
                      {profile.network === 'Leetcode' ? <SiLeetcode /> : null}
                    </SocialLink>
                  ))
                : resumeData.social && resumeData.social.map((profile, index) => (
                    <SocialLink 
                      key={index}
                      href={profile.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={profile.network}
                    >
                      {profile.network === 'LinkedIn' ? <FaLinkedin /> : null}
                      {profile.network === 'GitHub' ? <FaGithub /> : null}
                      {profile.network === 'Email' ? <MdEmail /> : null}
                      {profile.network === 'Leetcode' ? <SiLeetcode /> : null}
                    </SocialLink>
                  ))
              }
            </SocialLinks>
          </ContactInfo>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding: 80px 0 120px;
  background-color: ${props => props.theme.section.background};
  
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
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.syntax.function};
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.foreground};
  opacity: 0.8;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactInfo = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
  
  @media (max-width: 768px) {
    padding: 30px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 20px;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: ${props => props.theme.syntax.function};
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const ContactInfoText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 30px;
  color: ${props => props.theme.foreground};
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 25px;
  }
`;

const ContactInfoItems = styled.div`
  margin-bottom: 30px;
  
  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const ContactIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => `${props.theme.primary}20`};
  color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const ContactInfoValue = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1rem;
  color: ${props => props.theme.foreground};
  word-break: break-word;
  
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    
    &:hover {
      color: ${props => props.theme.primary};
      text-decoration: none;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 0;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.card.hoverBackground};
  color: ${props => props.theme.foreground};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const ResumeActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background-color: ${props => `${props.theme.primary}15`};
  color: ${props => props.theme.primary};
  border-radius: 4px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid ${props => `${props.theme.primary}30`};
  
  &:hover {
    color: ${props => props.theme.background};
  }

  svg {
    font-size: 16px;
  }
`;

export default Contact;