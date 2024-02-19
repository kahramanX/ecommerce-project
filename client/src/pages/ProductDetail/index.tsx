import { useState } from "react";

// Components
import Comments from "components/Comments";
import ReactHelmet from "components/ReactHelmet";
import Accordion from "shared/Accordion";

// Swiper Components
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

type Props = {};

const ProductDetail = (props: Props): JSX.Element => {
    // store thumbs swiper instance
    const [thumbs, setThumbs] = useState<SwiperClass>();

    const images = [
        "https://static.pullandbear.net/2/photos//2024/V/0/1/p/7555/358/712/7555358712_2_2_8.jpg?imwidth=850",
        "https://static.pullandbear.net/2/photos//2024/V/0/1/p/7555/358/712/7555358712_2_3_8.jpg?imwidth=850",
        "https://static.pullandbear.net/2/photos//2024/V/0/1/p/7555/358/712/7555358712_2_4_8.jpg?imwidth=850",
        "https://static.pullandbear.net/2/photos//2024/V/0/1/p/7555/358/712/7555358712_2_6_8.jpg?imwidth=850",
        "https://static.pullandbear.net/2/photos//2024/V/0/1/p/7555/358/712/7555358712_2_7_8.jpg?imwidth=850",
        "https://static.pullandbear.net/2/photos//2024/V/0/1/p/7555/358/712/7555358712_2_8_8.jpg?imwidth=850",
    ];

    return (
        <>
            <ReactHelmet
                titleName="Product Detail"
                description="Product Detail"
            />
            <main className="p-2 lg:px-10 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:h-[34rem]">
                        <div className="lg:h-[30rem]">
                            <button className="hidden lg:flex button bg-grey1 w-full py-2 lg:m-2 lg:ms-0 lg:mt-0 justify-center items-center gap-2 text-sm lg:mb-4">
                                <i className="material-symbols-sharp text-xs">
                                    arrow_back
                                </i>
                                <span>Back</span>
                            </button>

                            <Swiper
                                className="product-detail-thumb-container w-full lg:h-full lg:pe-1"
                                wrapperClass="w-full h-fit lg:grid lg:grid-cols-2 gap-4"
                                modules={[Navigation]}
                                slidesPerView={4}
                                navigation={true}
                                direction="horizontal"
                                autoHeight={false}
                                height={500}
                                onSwiper={(swiper) => setThumbs(swiper)}
                                loop={true}
                                breakpoints={{
                                    1024: {
                                        direction: "vertical",
                                        height: 800,
                                        loop: false,
                                    },
                                }}
                            >
                                {images.map((val, index) => {
                                    return (
                                        <SwiperSlide className="border-grey4 border cursor-pointer">
                                            <img
                                                src={val}
                                                className="w-full h-full object-contain lg:object-cover"
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                        <div>
                            <Swiper
                                className="h-[30rem] lg:h-full lg:w-full pointer-events-none layered-box-shadow"
                                modules={[Thumbs]}
                                loop={true}
                                thumbs={{
                                    swiper:
                                        thumbs && !thumbs.destroyed
                                            ? thumbs
                                            : null,
                                }}
                            >
                                {images.map((val, index) => {
                                    return (
                                        <SwiperSlide>
                                            <img
                                                src={val}
                                                className="w-full h-full object-contain lg:object-cover"
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                    {/* <div className="border">s</div> */}

                    <div className="layered-box-shadow flex flex-col gap-4 p-3 bg-violet h-fit">
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
