"use client";

import Image from "next/image";
import styled from "styled-components";

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: white;
  box-shadow: 0 0 5px 3px ${({ theme }) => theme.colors.headerBackgroundHover};
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 15px 10px
      ${({ theme }) => theme.colors.headerBackgroundHover};
  }
  .image {
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.15);
      border-radius: 40px;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Image
      src="/images/profile.jpg"
      alt="Profile Picture"
      width="150"
      height="150"
      className="image"
    />
    <h1>Nicolas RICHARD - Full Stack Developer</h1>
    <p>Creating modern and responsive web applications.</p>
  </HeaderContainer>
);

export default Header;
