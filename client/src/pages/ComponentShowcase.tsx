import { Link } from "react-router-dom";

// Components
import ReactHelmet from "components/ReactHelmet";
import Icon from "shared/Icon";
import Input from "shared/Input";
import Checkbox from "shared/Checkbox";
import RadioInput from "shared/RadioInput";

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
                <button className="button px-4 py-2">
                    <Link to={"/"}>Go To HomePage</Link>
                </button>
            </div>
            <div className="m-10">
                <Input
                    type="text"
                    placeholder="TEST TEST TEST"
                    parentClassName="relative w-fit"
                    inputClassName="w-full"
                    iconClassName="absolute top-1/2 transform -translate-x-8 -translate-y-1/2 text-grey3"
                    iconName="search"
                />
            </div>
            <div className="m-10">
                <Checkbox
                    htmlFor="check1"
                    inputId="check1"
                    labelContent="merhaba"
                />
                <Checkbox
                    htmlFor="check2"
                    inputId="check2"
                    labelContent="merhaba"
                />
                <RadioInput
                    htmlFor="radio1"
                    inputId="radio1"
                    inputName="yoo"
                    labelContent="radiooooo noo"
                />
                <RadioInput
                    htmlFor="radio2"
                    inputId="radio2"
                    inputName="yoo"
                    labelContent="radiooooo noo"
                />
            </div>
            <h5 className="p-5 text-4xl italic border-b">Buttons</h5>
            <div className="p-10">
                <div className="mb-5">
                    <button className="button px-4 py-2">Button</button>
                </div>
                <div className="mb-5">
                    <button className="button text-2xl px-20 py-2 bg-blue">
                        Button
                    </button>
                </div>
                <div className="mb-5">
                    <button className="button text-xl px-10 py-2 bg-green">
                        Button
                    </button>
                </div>
                <div className="flex gap-10 mb-5">
                    <button className="button text-sm px-2">+</button>
                    <button className="button text-sm px-2">-</button>
                    <button className="button text-sm px-2">?</button>
                </div>
                <div className="mb-5">
                    <button className="button text-sm flex p-2">
                        <Icon name="close" />
                    </button>
                </div>
                <div className="mb-5">
                    <button className="font-bold text-md flex p-2">
                        Account
                    </button>
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
                                <div className="font-bold text-3xl mb-4">
                                    Help
                                </div>
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
                    <input
                        placeholder="Cell number *"
                        className="input"
                        type="text"
                    />
                </div>
                <div className="mb-5">
                    <input
                        placeholder="First Name *"
                        className="input"
                        type="text"
                    />
                </div>
                <div className="mb-5 flex gap-2">
                    <input
                        id="myRadio1"
                        name="radio"
                        className="radio"
                        type="radio"
                    />
                    <label htmlFor="myRadio1">Radio</label>
                </div>
                <div className="mb-5 flex gap-2">
                    <input
                        id="myRadio2"
                        name="radio"
                        className="radio"
                        type="radio"
                    />
                    <label htmlFor="myRadio2">Radio</label>
                </div>
                <div className="mb-5 flex gap-2">
                    <input
                        id="myCheckbox"
                        className="checkbox"
                        type="checkbox"
                    />
                    <label htmlFor="myCheckbox" className="text-md ">
                        Checkbox
                    </label>
                </div>
                <div className="mb-5 flex gap-2">
                    <input
                        id="myCheckbox1"
                        className="checkbox"
                        type="checkbox"
                    />
                    <label htmlFor="myCheckbox1" className="text-md">
                        Checkbox
                    </label>
                </div>
                <div className="mb-5">
                    <select className="select-input w-20">
                        <option>TEST TEST </option>
                        <option>TEST TEST </option>
                    </select>
                </div>
                <div className="mb-5">
                    <select
                        className="select-input w-40"
                        defaultValue={"Colors"}
                    >
                        <option>TEST TEST </option>
                        <option>TEST TEST </option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default ComponentShowcase;
