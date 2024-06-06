"use client";

import styled from "styled-components";
import NRInput from "./common/Input";
import NRButton from "./common/Button";

const ContactContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 90%;
    max-width: 350px;
  }
`;

const Contact = () => (
  <ContactContainer id="contact">
    <h2>Contact</h2>
    <form action="send-message.php" method="post">
      <NRInput type="text" label="Nom" placeholder="Nicolas" />
      <NRInput
        type="email"
        label="Email"
        placeholder="nicolas.richard42@hotmail.fr"
      />
      <NRInput as="textarea" label="Message" placeholder="Bonjour" />
      <NRButton label="Envoyer" />
    </form>
    <p>Email: nicolas.richard42@hotmail.fr</p>
    <p>Téléphone: 06 38 39 60 77</p>
    <ul>
      <li>
        <a href="https://linkedin.com/in/johndoe">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/johndoe">GitHub</a>
      </li>
      <li>
        <a href="https://twitter.com/johndoe">Twitter</a>
      </li>
    </ul>
  </ContactContainer>
);

export default Contact;
