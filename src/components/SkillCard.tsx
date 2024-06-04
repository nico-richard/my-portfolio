"use client";

import { ReactNode } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  h4 {
    margin: 0;
    padding: 0;
  }
`;

type SkillCardProps = {
  title: string;
  icon: ReactNode;
};

const SkillCard = ({ title, icon }: SkillCardProps) => (
  <Card>
    {icon}
    <h4>{title}</h4>
  </Card>
);

export default SkillCard;
