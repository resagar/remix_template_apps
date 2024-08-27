import { ButtonCta } from "~/components/landingPage/sections/shared/ButtonCta";

export const CtaSection = () => (
  <>
    <div className="px-8 py-8 lg:py-24 flex flex-col gap-10 lg:gap-14 justify-center items-center text-center">
      <h2 className="font-black text-3xl lg:text-5xl tracking-tight group">
        Lorem ipsum dolor sit amet <br /> consectetur{" "}
        <span className="border-b-8 border-dotted border-primary/50 group-hover:border-accent/100 duration-200">
          adipisicing
        </span>
      </h2>
      <p className="text-lg max-w-lg mx-auto leading-relaxed text-secondary-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        excepturi explicabo harum quae aliquid est dolore officiis quos natus
        iusto quas, autem aut laborum qui cum
      </p>
      <ButtonCta url="#pricing" className="btn-wide" />
    </div>
  </>
);
