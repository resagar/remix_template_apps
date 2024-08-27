import React from "react";
import { useField } from "remix-forms";

export const Input = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"]
>(({ type = "text", ...props }, ref) => {
  const { errors } = useField();
  return (
    <input
      ref={ref}
      type={type}
      className={
        errors
          ? "input input-bordered input-error"
          : "input input-bordered focus:input-secondary"
      }
      {...props}
    />
  );
});
Input.displayName = "Input";
