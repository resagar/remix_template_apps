import { CheckIcon } from "lucide-react";
import { Card } from "./Card";
import { ButtonCta } from "../shared/ButtonCta";

export const Pricing = () => (
  <>
    <div
      id="pricing"
      className="h-full w-full flex flex-row justify-center items-center gap-8"
    >
      <Card className="max-w-md gap-5 lg:gap-8">
        <div className="flex flex-col justify-center items-start text-left">
          <p className="text-lg lg:text-xl font-bold">Precio 1</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-[max-content_max-content_max-content] gap-2">
          <div className="flex flex-col justify-end h-full">
            <p className="text-lg">
              <del>$5</del>
            </p>
          </div>
          <p className="text-5xl tracking-tight font-extrabold">$95</p>
          <div className="flex flex-col justify-end h-full">
            <p className="text-xs uppercase font-semibold opacity-75">usd</p>
          </div>
        </div>
        <ul className="text-secondary-content text-left leading-relaxed space-y-3">
          <li className="flex flex-row justify-start items-center gap-2">
            <span className="size-6">
              <CheckIcon />
            </span>
            Lorem ipsum dolor sit amet
          </li>
          <li className="flex flex-row justify-start items-center gap-2">
            <span className="size-6">
              <CheckIcon />
            </span>
            Lorem ipsum dolor sit amet
          </li>
          <li className="flex flex-row justify-start items-center gap-2">
            <span className="size-6">
              <CheckIcon />
            </span>
            Lorem ipsum dolor sit amet
          </li>
        </ul>
        <div className="h-full flex flex-col justify-center items-center">
          <ButtonCta url="/" className="btn-block" />
          <p>
            One-time payment, then{" "}
            <span className="underline">it's yours forever</span>
          </p>
        </div>
      </Card>
      <Card className="max-w-md gap-5 lg:gap-8">
        <div className="flex flex-col text-left">
          <p className="text-lg lg:text-xl font-bold">Precio 1</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-[max-content_max-content_max-content] gap-2">
          <div className="flex flex-col justify-end h-full">
            <p className="text-lg">
              <del>$5</del>
            </p>
          </div>
          <p className="text-5xl tracking-tight font-extrabold">$95</p>
          <div className="flex flex-col justify-end h-full">
            <p className="text-xs uppercase font-semibold opacity-75">usd</p>
          </div>
        </div>
        <ul className="text-secondary-content text-left leading-relaxed space-y-3">
          <li className="flex flex-row justify-start items-center gap-2">
            <span className="size-6">
              <CheckIcon />
            </span>
            Lorem ipsum dolor sit amet
          </li>
          <li className="flex flex-row justify-start items-center gap-2">
            <span className="size-6">
              <CheckIcon />
            </span>
            Lorem ipsum dolor sit amet
          </li>
          <li className="flex flex-row justify-start items-center gap-2">
            <span className="size-6">
              <CheckIcon />
            </span>
            Lorem ipsum dolor sit amet
          </li>
        </ul>
        <div className="h-full flex flex-col justify-center items-center">
          <ButtonCta url="/" className="btn-block" />
          <p>
            One-time payment, then{" "}
            <span className="underline">it's yours forever</span>
          </p>
        </div>
      </Card>
    </div>
  </>
);
