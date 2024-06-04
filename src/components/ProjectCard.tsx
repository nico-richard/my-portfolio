"use client";

import Image from "next/image";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: ${({ theme }) => theme.colors.cardBackgroundHover};
    cursor: pointer;
  }
  .image-container {
    width: 180px;
  }
`;

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) => (
  <Card>
    <div className="image-container">
      <Image
        src={imageUrl}
        alt={title}
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link}>En savoir plus</a>
  </Card>
);

export default ProjectCard;
