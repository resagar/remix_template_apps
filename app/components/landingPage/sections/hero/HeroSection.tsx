import { CheckIcon } from "lucide-react";
import { ButtonCta } from "../shared/ButtonCta";

export const HeroSection = () => (
  <div className="px-8 py-8 lg:py-24 flex flex-col gap-10 lg:gap-14 justify-center items-center text-center">
    <h1 className="font-black text-6xl tracking-tight group">
      Lorem ipsum dolor sit amet <br /> consectetur{" "}
      <span className="border-b-8 border-dotted border-primary/50 group-hover:border-accent/100 duration-200">
        adipisicing
      </span>
    </h1>
    <p className="text-lg max-w-lg mx-auto leading-relaxed text-secondary-content">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
      excepturi explicabo harum quae aliquid est dolore officiis quos natus
      iusto quas, autem aut laborum qui cum
    </p>
    <ul className="text-secondary-content leading-relaxed space-y-2">
      <li className="flex flex-row justify-start items-center gap-2">
        <span className="text-green-500 size-6">
          <CheckIcon />
        </span>
        Lorem ipsum dolor sit amet
      </li>
      <li className="flex flex-row justify-start items-center gap-2">
        <span className="text-green-500 size-6">
          <CheckIcon />
        </span>
        Lorem ipsum dolor sit amet
      </li>
      <li className="flex flex-row justify-start items-center gap-2">
        <span className="text-green-500 size-6">
          <CheckIcon />
        </span>
        Lorem ipsum dolor sit amet
      </li>
    </ul>
    <ButtonCta url="#pricing" className="btn-wide" />
  </div>
);
