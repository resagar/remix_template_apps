import { ReactNode } from "react";

export const MainContainer = ({ children }: { children: ReactNode }) => (
  <>
    <div className="h-[100dvh] grid grid-rows-[auto_1fr_auto]">{children}</div>
  </>
);
