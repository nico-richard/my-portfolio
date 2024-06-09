"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const DoYouNeedContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 30%;
  height: auto;
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

interface Need {
  title: string;
  description: string;
  image_url: string;
}

const DoYouNeed = () => {
  const [needs, setNeeds] = useState<Need[]>([]);

  useEffect(() => {
    const fetchNeeds = async () => {
      const res = await fetch("/api/needs");
      const data = await res.json();
      setNeeds(data);
    };
    fetchNeeds();
  }, []);

  return (
    <DoYouNeedContainer id="do-you-need">
      <Title>Vous avez besoin de ?</Title>
      <CardGrid>
        {needs.map((need, index) => (
          <Card key={index}>
            <CardImage src={need.image_url} alt={need.title} />
            <CardTitle>{need.title}</CardTitle>
            <CardDescription>{need.description}</CardDescription>
          </Card>
        ))}
      </CardGrid>
    </DoYouNeedContainer>
  );
};

export default DoYouNeed;
