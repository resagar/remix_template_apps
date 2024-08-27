import { AlertCircleIcon } from "lucide-react";
import { ReactNode } from "react";

export const ErrorField = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <p className="text-xs text-error mt-1 leading-relaxed">{children}</p>
    </>
  );
};

export const ErrorGlobal = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="text-sm font-semibold text-error-content leading-relaxed alert alert-error break-words max-w-full">
        <AlertCircleIcon className="size-4" />
        {children}
      </div>
    </>
  );
};
