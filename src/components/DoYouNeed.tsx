"use client";

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

const needs = [
  {
    title: "Afficher des données",
    description:
      "Créez des interfaces dynamiques pour afficher et visualiser vos données.",
    image: "/images/display-data.png",
  },
  {
    title: "Gérer des stocks",
    description:
      "Développez des solutions de gestion de stocks efficaces et précises.",
    image: "/images/manage-stock.png",
  },
  {
    title: "Vendre des produits",
    description:
      "Mettez en place des plateformes de commerce électronique modernes et sécurisées.",
    image: "/images/sell-products.png",
  },
  {
    title: "Automatiser des tâches",
    description:
      "Automatisez vos processus pour gagner du temps et augmenter votre productivité.",
    image: "/images/automate-tasks.png",
  },
  {
    title: "Analyser des données",
    description:
      "Obtenez des insights précieux avec des outils d'analyse de données personnalisés.",
    image: "/images/analyze-data.png",
  },
  {
    title: "Améliorer l'expérience utilisateur",
    description:
      "Optimisez l'expérience utilisateur avec des interfaces intuitives et réactives.",
    image: "/images/improve-ux.png",
  },
];

const DoYouNeed = () => (
  <DoYouNeedContainer id="do-you-need">
    <Title>Vous avez besoin de ?</Title>
    <CardGrid>
      {needs.map((need, index) => (
        <Card key={index}>
          <CardImage src={need.image} alt={need.title} />
          <CardTitle>{need.title}</CardTitle>
          <CardDescription>{need.description}</CardDescription>
        </Card>
      ))}
    </CardGrid>
  </DoYouNeedContainer>
);

export default DoYouNeed;
