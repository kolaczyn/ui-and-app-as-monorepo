import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isPrimary?: boolean;
};

export const Button = ({ children, isPrimary = true }: Props) => {
  return (
    <button>
      {isPrimary ? "primary" : "secondary"}:{children}
    </button>
  );
};
