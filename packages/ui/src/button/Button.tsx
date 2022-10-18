import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  isPrimary?: boolean;
};

const Wrapper = styled.button<Props>`
  font-weight: bold;
  background-color: ${(p) => (p.isPrimary ? "black" : "white")};
  color: ${(p) => (p.isPrimary ? "white" : "black")};
  border-color: black;
  border-radius: 10rem;
  // TODO should switch to emotion and use tailwind x emotion package
  padding: 0.5rem 1rem 0.5rem 1rem;
  /* TODO use normalizecss or something similar */
  box-sizing: border-box;
  cursor: pointer;
`;

export const Button = ({ children, isPrimary = true }: Props) => {
  return <Wrapper isPrimary={isPrimary}>{children}</Wrapper>;
};
