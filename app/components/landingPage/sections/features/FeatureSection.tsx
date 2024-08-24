import { Accordion } from "./Accordion";
import { Details } from "./Details";

export const FeatureSection = () => (
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
      <div className="grid grid-cols-1 mt-6 md:mt-16 gap-8 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Accordion />
        </div>
        <Details />
      </div>
    </div>
  </>
);
