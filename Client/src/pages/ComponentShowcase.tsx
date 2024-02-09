import ReactHelmet from "components/ReactHelmet";
import { Link } from "react-router-dom";

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
      <h5 className="p-5 text-4xl italic border-b">Buttons</h5>
      <div className="p-10">
        <div className="mb-5">
          <button className="button px-4 py-2">Button</button>
        </div>
        <div className="mb-5">
          <button className="button text-2xl px-20 py-2 bg-blue">Button</button>
        </div>
        <div className="mb-5">
          <button className="button text-xl px-10 py-2 bg-green">Button</button>
        </div>
        <div className="flex gap-10 mb-5">
          <button className="button text-sm px-2">+</button>
          <button className="button text-sm px-2">-</button>
          <button className="button text-sm px-2">?</button>
        </div>
        <div className="mb-5">
          <button className="button text-sm flex p-2">
            <i className="material-symbols-sharp">close</i>
          </button>
        </div>
        <div className="mb-5">
          <button className="font-bold text-md flex p-2">Account</button>
        </div>
      </div>
      <h5 className="p-5 text-4xl italic border-b">Links</h5>
      <div className="p-10">
        <div className="mb-5">
          <Link to={"#"}>This is a link</Link>
        </div>
        <div className="mb-5">
          <Link className="font-bold underline" to={"#"}>
            Shop All
          </Link>
        </div>

        <div className="mb-5">
          <Link className="font-bold" to={"#"}>
            Click!
          </Link>
        </div>
      </div>
      <h5 className="p-5 text-4xl italic border-b">Boxes</h5>
      <div className="p-10">
        <div className="mb-5 grid grid-cols-4 gap-5">
          {[1, 2, 3, 4].map(() => {
            return (
              <div className="layered-box-shadow bg-green p-5">
                <div className="font-bold text-3xl mb-4">Help</div>
                <div className="flex flex-col">
                  <Link className="font-bold mb-2" to={"#"}>
                    Click!
                  </Link>
                  <Link className="font-bold mb-2" to={"#"}>
                    Click!
                  </Link>
                  <Link className="font-bold mb-2" to={"#"}>
                    Click!
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-5">
          <div className="layered-box-shadow w-max ">
            <img src="https://via.placeholder.com/200x310" />
          </div>
        </div>
      </div>
      <h5 className="p-5 text-4xl italic border-b">Inputs</h5>
      <div className="p-10">
        <div className="mb-5">
          <input placeholder="Cell number *" className="input" type="text" />
        </div>
        <div className="mb-5">
          <input placeholder="First Name *" className="input" type="text" />
        </div>
        <div className="mb-5">
          <input id="myRadio1" className="mx-3" type="radio" />
          <label htmlFor="myRadio1">Radio</label>
          <input id="myRadio1" className="mx-3" type="radio" />
          <label htmlFor="myRadio1">Radio</label>
        </div>
        <div className="mb-5">
          <input id="myCheckbox" className="mx-3" type="checkbox" />
          <label htmlFor="myCheckbox" className="text-md">
            Checkbox
          </label>
        </div>

        <div className="mb-5">
          <select>
            <option>TEST 1</option>
            <option>TEST 2</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ComponentShowcase;
