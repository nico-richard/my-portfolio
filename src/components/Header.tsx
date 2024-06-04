"use client";

import Image from "next/image";
import styled from "styled-components";
import NRButton from "./common/Button";

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: white;
  img {
    border-radius: 99px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Image
      src="/images/profile.jpg"
      alt="Profile Picture"
      width="150"
      height="150"
    />
    <h1>Nicolas RICHARD - Full Stack Developer</h1>
    <p>Creating modern and responsive web applications.</p>
    <NRButton
      as="link"
      href="/cv_nicolas_richard.pdf"
      label="Télécharger mon CV"
      download
    />
  </HeaderContainer>
);

export default Header;
