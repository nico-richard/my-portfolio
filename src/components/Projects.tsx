"use client";

import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const projects = ["project1", "project2", "project3"];
const Projects = () => (
  <ProjectsContainer id="projects">
    <h2>Projets</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title="Nom du Projet"
          description="Description brève du projet."
          imageUrl={`/images/${project}.png`}
          link="/projects/project1-details"
        />
      ))}
    </div>
  </ProjectsContainer>
);

export default Projects;
