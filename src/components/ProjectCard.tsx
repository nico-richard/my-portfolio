"use client";

import Image from "next/image";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 0 5px 3px ${({ theme }) => theme.colors.borderColor};
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 15px 10px ${({ theme }) => theme.colors.borderColor};
    transform: scale(1.05);
    cursor: pointer;
  }
  &.rotate {
    animation: ${rotate} 0.6s ease-in-out;
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
}: ProjectCardProps) => {
  const [isRotating, setIsRotating] = useState(false);
  const onCardClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 600);
  };

  return (
    <Card onClick={onCardClick} className={isRotating ? "rotate" : ""}>
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
};

export default ProjectCard;
