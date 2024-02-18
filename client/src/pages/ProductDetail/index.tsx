// Components
import Comments from "components/Comments";
import ReactHelmet from "components/ReactHelmet";
import Accordion from "shared/Accordion";

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
                        <div className=" grid grid-cols-9 gap-2">
                            {Array.from({ length: 6 }).map((val, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="border border-grey2 bg-grey1 p-1"
                                    >
                                        <div className="bg-[#000000] w-full h-7"></div>
                                    </div>
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
                                <i className="material-symbols-sharp">
                                    favorite
                                </i>
                            </button>
                        </div>
                        <div className="">
                            <Accordion
                                headerContent={"REF 438129"}
                                IsOpenOnLoaded={true}
                            >
                                <div>
                                    %100 pamuklu, farklı renkleri mevcut,
                                    fermuarlı ve üstü düğmeli, kemer köprülü,
                                    beş cepli, straight yüksek bel jean.
                                </div>
                            </Accordion>
                            <Accordion headerContent={"COMPOSITION & CARE"}>
                                <div>
                                    %100 pamuklu, farklı renkleri mevcut,
                                    fermuarlı ve üstü düğmeli, kemer köprülü,
                                    beş cepli, straight yüksek bel jean.
                                </div>
                            </Accordion>

                            <Comments
                                commentHeader="REVIEWS (3)"
                                commentItems={["1", "2", "3"]}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProductDetail;
