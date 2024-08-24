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
        "card p-8 h-full w-full max-w-md card-bordered rounded-3xl gap-5 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  </>
);
