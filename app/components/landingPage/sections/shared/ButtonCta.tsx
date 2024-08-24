import { Link } from "@remix-run/react";
import { SendHorizonalIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const ButtonCta = ({
  url,
  className = "",
}: {
  url: string;
  className?: string;
}) => (
  <Link
    to={url}
    className={twMerge(
      "btn text-neutral-100 hover:shadow-xl btn-primary btn-circle group flex flex-row justify-center items-center gap-3",
      className
    )}
  >
    Get App
    <SendHorizonalIcon className="size-5 pt-0.5 group-hover:scale-125 group-hover:translate-x-6 transition-transform duration-300" />
  </Link>
);
