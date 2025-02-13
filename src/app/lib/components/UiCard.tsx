import React, { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
  outerClassName?: string;
};

function UiCard({ title, children, className, outerClassName }: Props) {
  return (
    <div
      className={`bg-gradient-to-tl from-[#1B1923] border-t-2 border-[#222222] rounded-xl p-4 break-words ${outerClassName}`}
    >
      {title && <p className="mb-2 text-white font-semibold break-words">{title}</p>}
      <div className={`break-words ${className || ''}`}>{children}</div>
    </div>
  );
}

export default UiCard;
