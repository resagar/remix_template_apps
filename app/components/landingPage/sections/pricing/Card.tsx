import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <>
    <div
      className={twMerge(
        "card p-8 h-full w-full card-bordered rounded-3xl",
        className
      )}
    >
      {children}
    </div>
  </>
);
