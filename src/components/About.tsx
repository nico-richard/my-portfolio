"use client";

import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About = () => (
  <AboutContainer id="about">
    <h2>À Propos de Moi</h2>
    <p>Développeur passionné avec plus de 5 ans d&apos;expérience...</p>
    <h3>Compétences</h3>
    <ul>
      <li>Front-end: React, Vue.js, Angular</li>
      <li>Back-end: Node.js, Express, MongoDB</li>
      <li>Outils: Git, Docker, AWS</li>
    </ul>
    <a href="/cv.pdf" download>
      Télécharger mon CV
    </a>
  </AboutContainer>
);

export default About;
