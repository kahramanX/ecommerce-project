import ReactHelmet from "components/ReactHelmet";

const ComponentShowcase = (): JSX.Element => {
  return (
    <>
      <ReactHelmet
        titleName="Component Showcase"
        description="Component Showcase"
      />
      <div className="p-10 bg-violet">
        <h1 className="text-center text-4xl md:text-8xl font-bold">
          Component Showcase
        </h1>
      </div>
      <div className="p-10">
        <button className="button px-2">+</button>
      </div>
    </>
  );
};

export default ComponentShowcase;
