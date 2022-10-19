import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isPrimary?: boolean;
};

const AnotherP = () => {
  return <p>this p shouldn't be red</p>;
};

export const Button = ({ children, isPrimary = true }: Props) => {
  return (
    <>
      <div>
        <p>only this paragraph will get the style :)</p>
        <AnotherP />

        {/* TODO fix error */}
        {/* @ts-ignore */}
        <style jsx>{`
          p {
            color: blue;
          }
        `}</style>
      </div>
      <button>
        {isPrimary ? "primary" : "secondary"}:{children}
      </button>
    </>
  );
};
