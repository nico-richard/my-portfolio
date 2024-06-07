"use client";

import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  .project-grid {
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
interface Project {
  imageName: string;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    imageName: "project1",
    title: "Title for project1",
    description: "Description for project1",
    link: "https://example.com/project1",
  },
  {
    imageName: "project2",
    title: "Title for project2",
    description: "Description for project2",
    link: "https://example.com/project2",
  },
  {
    imageName: "project3",
    title: "Title for project3",
    description: "Description for project3",
    link: "https://example.com/project3",
  },
  {
    imageName: "project4",
    title: "Title for project4",
    description: "Description for project4",
    link: "https://example.com/project4",
  },
  {
    imageName: "project5",
    title: "Title for project5",
    description: "Description for project5",
    link: "https://example.com/project5",
  },
  {
    imageName: "project6",
    title: "Title for project6",
    description: "Description for project6",
    link: "https://example.com/project6",
  },
];

const Projects = () => (
  <ProjectsContainer id="projects">
    <h2>Projets</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={`/images/${project.imageName}.png`}
          link={project.link}
        />
      ))}
    </div>
  </ProjectsContainer>
);

export default Projects;
