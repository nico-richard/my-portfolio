"use client";
import React from "react";
import styled from "styled-components";

interface NRInputProps {
  as?: "input" | "textarea";
  type?: "text" | "email";
  label: string;
  placeholder: string;
}

const NRInputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  input,
  textarea {
    padding: 15px 20px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const NRInput = ({ as = "input", type, label, placeholder }: NRInputProps) => {
  return (
    <NRInputContainer>
      {label && <label>{label}</label>}
      {as === "input" ? (
        <input type={type} placeholder={placeholder} />
      ) : (
        <textarea rows={5} placeholder={placeholder} />
      )}
    </NRInputContainer>
  );
};

export default NRInput;
