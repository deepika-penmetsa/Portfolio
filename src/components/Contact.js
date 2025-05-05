import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocationOn, MdFileDownload, MdRemoveRedEye } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ resumeData }) => {
  return (
    <ContactContainer>
      <div className="container">
        <SectionHeader>
          <SectionTitle>Contact Me</SectionTitle>
          <SectionSubtitle>Get In Touch</SectionSubtitle>
        </SectionHeader>
        
        <ContactContent>
          <ContactInfo>
            <ContactInfoTitle>Let's Talk</ContactInfoTitle>
            <ContactInfoText>
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
            </ContactInfoText>
            
            <ContactInfoItem>
              <ContactIcon>
                <MdEmail size={22} />
              </ContactIcon>
              <div>
                <ContactInfoLabel>Email</ContactInfoLabel>
                <ContactInfoValue>
                  <a href={`mailto:${resumeData.personal.email}`}>
                    {resumeData.personal.email}
                  </a>
                </ContactInfoValue>
              </div>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactIcon>
                <MdLocationOn size={22} />
              </ContactIcon>
              <div>
                <ContactInfoLabel>Location</ContactInfoLabel>
                <ContactInfoValue>{resumeData.personal.location}</ContactInfoValue>
              </div>
            </ContactInfoItem>
            
            <SocialLinks>
              <SocialLink href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={22} />
              </SocialLink>
              
              <SocialLink href={`https://${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer">
                <FaGithub size={22} />
              </SocialLink>
            </SocialLinks>
            
            <ResumeButtonContainer>
              <ViewResumeButton 
                href="/assets/Deepika_Penmetsa_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Resume
                <ButtonIcon>
                  <MdRemoveRedEye size={22} />
                </ButtonIcon>
              </ViewResumeButton>
              
              <DownloadButton 
                href="/assets/Deepika_Penmetsa_Resume.pdf" 
                download="Deepika_Penmetsa_Resume.pdf"
                title="Download Resume"
              >
                <MdFileDownload size={22} />
              </DownloadButton>
            </ResumeButtonContainer>
          </ContactInfo>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
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

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactInfo = styled.div`
  background-color: ${props => props.theme.card.background};
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
  max-width: 600px;
  width: 100%;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: ${props => props.theme.syntax.function};
`;

const ContactInfoText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 30px;
  color: ${props => props.theme.foreground};
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
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
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const ContactInfoLabel = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.syntax.comment};
  margin-bottom: 5px;
`;

const ContactInfoValue = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.foreground};
  
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  margin-bottom: 25px;
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
    transform: translateY(-3px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ResumeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ViewResumeButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 5px;
  background-color: ${props => props.theme.card.hoverBackground};
  color: ${props => props.theme.foreground};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.card.background};
    transform: translateY(-3px);
    border-color: ${props => props.theme.primary};
  }
`;

const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const DownloadButton = styled.a`
  position: absolute;
  right: -15px;
  top: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    background-color: ${props => props.theme.secondary};
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export default Contact;