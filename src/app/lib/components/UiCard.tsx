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
      className={`bg-gradient-to-tl from-[#1B1923] border-t-2 border-[#222222] rounded-xl p-3 ${outerClassName}`}
    >
      {title && <p className="mb-2 text-white font-semibold">{title}</p>}
      <div className={className}>{children}</div>
    </div>
  );
}

export default UiCard;
