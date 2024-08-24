import { Pricing } from "./Pricing";

export const PricingSection = () => (
  <>
    <div className="px-8 py-8 lg:py-24 flex flex-col gap-10 lg:gap-14 justify-center items-center text-center">
      <h2 className="text-center text-5xl font-extrabold max-w-2xl">
        sit amet consectetur adipisicing elit.
      </h2>

      <p className="max-w-2xl mx-auto text-lg opacity-80 leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint voluptate
        distinctio quo harum ipsam qui odio assumenda molestiae nobis eos,
        delectus officia praesentium repellendus quae, tempora alias
        voluptatibus similique maxime?
      </p>
      <Pricing />
    </div>
  </>
);
