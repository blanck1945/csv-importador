import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div className={`rounded-md border border-slate-700 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
