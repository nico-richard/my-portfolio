"use client";

import Image from "next/image";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 10rem 5rem 2rem 5rem;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: white;
  box-shadow: 0 0 5px 3px ${({ theme }) => theme.colors.headerBackgroundHover};
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 15px 10px
      ${({ theme }) => theme.colors.headerBackgroundHover};
  }
  .image {
    border-radius: 999px;
    transition: all 0.3s ease-in-out;
    margin-top: 2rem;
    &:hover {
      transform: scale(1.15);
    }
  }
  .image-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    .illustration {
      filter: invert(1);
    }
  }
  h1 {
    letter-spacing: 0.4rem;
    font-size: 3rem;
    font-weight: 500;
    margin: 0 0 0 2rem;
    span {
      white-space: nowrap;
    }
  }
  h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 100;
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>
      <span>Nicolas RICHARD</span> - <span>Full Stack Developer</span>
    </h1>
    <h3>Creating modern and responsive web applications.</h3>
    <Image
      src="/images/profile.jpg"
      alt="Profile Picture"
      width="150"
      height="150"
      className="image"
    />
    <div className="image-container">
      <Image
        src="/images/illustration-screen.png"
        alt="illustration-screen.png"
        width="150"
        height="150"
        className="illustration"
      />
      <Image
        src="/images/illustration-code.png"
        alt="illustration-code.png"
        width="150"
        height="150"
        className="illustration"
      />
    </div>
  </HeaderContainer>
);

export default Header;
