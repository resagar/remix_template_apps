import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const ColorContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <>
    <section className={twMerge("w-full", className)}>{children}</section>
  </>
);
