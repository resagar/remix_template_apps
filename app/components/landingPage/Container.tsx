import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={twMerge("w-full max-w-7xl mx-auto", className)}>
    {children}
  </div>
);
