import React from 'react';
import styled from 'styled-components';

const Resume = ({ resumeData }) => {
  return (
    <ResumeWrapper>
      <ResumeContainer>
        <ResumeHeader>
          <ResumeTitle>{resumeData.personal.name}</ResumeTitle>
          <ResumeSubtitle>Full Stack Developer</ResumeSubtitle>
          <ResumeContact>
            <ContactItem>{resumeData.personal.email}</ContactItem>
            <ContactItem>{resumeData.personal.phone}</ContactItem>
            <ContactItem>{resumeData.personal.location}</ContactItem>
            <ContactItem>
              <ContactLink href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactLink href={`https://${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer">
                GitHub
              </ContactLink>
            </ContactItem>
          </ResumeContact>
        </ResumeHeader>

        <ResumeSection>
          <SectionTitle>Summary</SectionTitle>
          <SectionContent>
            <p>{resumeData.summary}</p>
          </SectionContent>
        </ResumeSection>

        <ResumeSection>
          <SectionTitle>Skills</SectionTitle>
          <SectionContent>
            <SkillCategory>
              <CategoryTitle>Languages:</CategoryTitle>
              <SkillsList>
                {resumeData.skills.languages.map((skill, index) => (
                  <SkillItem key={`lang-${index}`}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
            <SkillCategory>
              <CategoryTitle>Frameworks & Tools:</CategoryTitle>
              <SkillsList>
                {resumeData.skills.frameworks.map((skill, index) => (
                  <SkillItem key={`framework-${index}`}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          </SectionContent>
        </ResumeSection>

        <ResumeSection>
          <SectionTitle>Experience</SectionTitle>
          <SectionContent>
            {resumeData.experience.map((exp, index) => (
              <ExperienceItem key={index}>
                <JobHeader>
                  <JobTitle>{exp.title}</JobTitle>
                  <JobCompany>{exp.company}</JobCompany>
                  <JobDate>{exp.period}</JobDate>
                </JobHeader>
                <JobDescription>
                  <ul>
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                </JobDescription>
              </ExperienceItem>
            ))}
          </SectionContent>
        </ResumeSection>

        <ResumeSection>
          <SectionTitle>Education</SectionTitle>
          <SectionContent>
            {resumeData.education.map((edu, index) => (
              <EducationItem key={index}>
                <EducationHeader>
                  <EducationDegree>{edu.degree}</EducationDegree>
                  <EducationSchool>{edu.institution}</EducationSchool>
                  <EducationDate>{edu.period}</EducationDate>
                </EducationHeader>
                {edu.gpa && <EducationGPA>GPA: {edu.gpa}</EducationGPA>}
              </EducationItem>
            ))}
          </SectionContent>
        </ResumeSection>

        <ResumeFooter>
          <DownloadButton 
            href="/resume.pdf" 
            download="Deepika_Penmetsa_Resume.pdf"
          >
            Download PDF
          </DownloadButton>
        </ResumeFooter>
      </ResumeContainer>
    </ResumeWrapper>
  );
};

const ResumeWrapper = styled.div`
  padding-top: 80px; /* Allow space for fixed navbar */
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${props => props.theme.background};
  padding-bottom: 40px;
`;

const ResumeContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: ${props => props.theme.section.background};
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ResumeHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid ${props => props.theme.primary};
`;

const ResumeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 5px;
  color: ${props => props.theme.syntax.function};
`;

const ResumeSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.primary};
  font-weight: 400;
`;

const ResumeContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const ContactItem = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.foreground};
`;

const ContactLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ResumeSection = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: ${props => props.theme.syntax.variable};
  border-bottom: 1px solid ${props => props.theme.border};
  padding-bottom: 8px;
`;

const SectionContent = styled.div`
  padding: 0 10px;
`;

const SkillCategory = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CategoryTitle = styled.h4`
  font-size: 1rem;
  min-width: 150px;
  margin-bottom: 5px;
  color: ${props => props.theme.foreground};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.span`
  background-color: ${props => props.theme.card.background};
  color: ${props => props.theme.foreground};
  padding: 4px 10px;
  border-radius: 30px;
  font-size: 0.9rem;
  border: 1px solid ${props => props.theme.border};
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const JobHeader = styled.div`
  margin-bottom: 10px;
`;

const JobTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 3px;
  color: ${props => props.theme.foreground};
`;

const JobCompany = styled.h5`
  font-size: 1rem;
  margin-bottom: 3px;
  color: ${props => props.theme.syntax.function};
`;

const JobDate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.syntax.comment};
`;

const JobDescription = styled.div`
  font-size: 0.95rem;
  color: ${props => props.theme.foreground};
  
  ul {
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
    line-height: 1.5;
  }
`;

const EducationItem = styled.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationHeader = styled.div`
  margin-bottom: 5px;
`;

const EducationDegree = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 3px;
  color: ${props => props.theme.foreground};
`;

const EducationSchool = styled.h5`
  font-size: 1rem;
  margin-bottom: 3px;
  color: ${props => props.theme.syntax.function};
`;

const EducationDate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.syntax.comment};
`;

const EducationGPA = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.foreground};
`;

const ResumeFooter = styled.footer`
  margin-top: 40px;
  text-align: center;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${props => props.theme.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

export default Resume; 