import { ReactNode } from "react";

export const ColorContainer = ({ children }: { children: ReactNode }) => (
  // TODO: falta agregar bg-color y text-color
  <>
    <section className="w-full">{children}</section>
  </>
);
