"use client";

import styled from "styled-components";
import NRButton from "./common/Button";
import SkillCard from "./SkillCard";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

const AboutContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 0 5px 3px ${({ theme }) => theme.colors.borderColor};
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 80px;
  }
  &:hover {
    box-shadow: 0 0 15px 10px ${({ theme }) => theme.colors.borderColor};
  }
  .cv-download {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 80%;
    @media (max-width: 768px) {
      width: 95%;
    }
  }
`;

const About = () => (
  <AboutContainer id="about">
    <h2>À Propos de Moi</h2>
    <p>Développeur passionné avec plus de 5 ans d&apos;expérience...</p>
    <h1>Compétences</h1>
    <h3>Front-end</h3>
    <div className="skills">
      <SkillCard title="Angular" icon={<FaAngular />} />
      <SkillCard title="React" icon={<FaReact />} />
      <SkillCard title="HTML" icon={<FaHtml5 />} />
      <SkillCard title="CSS" icon={<FaCss3 />} />
      <SkillCard title="JavaScript" icon={<IoLogoJavascript />} />
      <SkillCard title="TypeScript" icon={<SiTypescript />} />
    </div>
    <h3>Back-end</h3>
    <div className="skills">
      <SkillCard title="NextJS" icon={<RiNextjsLine />} />
      <SkillCard title="NodeJS" icon={<FaNodeJs />} />
      <SkillCard title="Express" icon={<SiExpress />} />
      <SkillCard title="Python" icon={<FaPython />} />
      <SkillCard title="Flask" icon={<SiFlask />} />
      <SkillCard title="PHP" icon={<FaPhp />} />
      <SkillCard title="Gitlab" icon={<FaGitlab />} />
      <SkillCard title="PostgreSQL" icon={<SiPostgresql />} />
      <SkillCard title="SQLServer" icon={<SiMicrosoftsqlserver />} />
      <SkillCard title="MongoDB" icon={<SiMongodb />} />
      <SkillCard title="Docker" icon={<FaDocker />} />
      <SkillCard title="Linux" icon={<FaLinux />} />
    </div>
    <div className="cv-download">
      <NRButton
        as="link"
        href="/cv_nicolas_richard.pdf"
        label="Télécharger mon CV"
        download
      />
    </div>
  </AboutContainer>
);

export default About;
