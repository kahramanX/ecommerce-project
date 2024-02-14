// Components
import ReactHelmet from "components/ReactHelmet";

type Props = {};

const ProductDetail = (props: Props): JSX.Element => {
    return (
        <>
            <ReactHelmet
                titleName="Product Detail"
                description="Product Detail"
            />
            <main className="p-2 lg:px-10 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="border p-20">left</div>
                    <div className="layered-box-shadow flex flex-col gap-4 p-3 bg-violet">
                        <div className="font-bold text-lg">
                            FITILLI KADIFE YAKALI KAPITONE MONT
                        </div>
                        <div className="text-xl font-bold">$49.90</div>
                        <div className=" grid grid-cols-8 gap-2">
                            {Array.from({ length: 14 }).map(() => {
                                return (
                                    <>
                                        <div className="border border-grey2 bg-grey1 p-1">
                                            <div className="bg-[#e4ff36] w-full h-6"></div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        <div>
                            <select className="select-input w-full">
                                <option>XS </option>
                                <option>M </option>
                                <option>L </option>
                                <option>XL </option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-sm font-semibold">
                                Model: 174 cm tall and size S
                            </div>
                            <div className="text-sm font-semibold underline">
                                Size Guide
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="button bg-grey1 text-sm w-full">
                                Add to shopping bag
                            </button>

                            <button className="button bg-grey1 flex items-center p-2">
                                <span className="material-symbols-sharp">
                                    favorite
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProductDetail;
