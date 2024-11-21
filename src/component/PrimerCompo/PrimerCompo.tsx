import { FC } from "react";

interface IPorpsPrimerCompo {
  text: string;
  color: string;
  fontSize?: number;
}

export const PrimerCompo: FC<IPorpsPrimerCompo> = ({
  text,
  color,
  fontSize,
}) => {
  return (
    <div style={{ color: `${color}`, fontSize: `${fontSize || 3}rem` }}>
      <p> </p>
      {text}
    </div>
  );
};
