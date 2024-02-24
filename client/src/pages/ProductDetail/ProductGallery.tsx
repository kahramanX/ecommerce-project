import { useState } from "react";

// Swiper Components
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

type Props = {};

const ProductGallery = (props: Props): JSX.Element => {
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
        <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:h-[34rem]">
            <div className="lg:h-[30rem]">
                <button className="hidden lg:flex button bg-grey1 w-full py-2 lg:m-2 lg:ms-0 lg:mt-0 justify-center items-center gap-2 text-sm lg:mb-4">
                    <i className="material-symbols-sharp text-xs">arrow_back</i>
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
                                    className="w-full h-full object-contain lg:object-cover z-0"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div>
                <Swiper
                    className="h-[32rem] lg:h-full lg:w-full pointer-events-none layered-box-shadow"
                    modules={[Thumbs]}
                    loop={true}
                    thumbs={{
                        swiper: thumbs && !thumbs.destroyed ? thumbs : null,
                    }}
                >
                    {images.map((val, index) => {
                        return (
                            <SwiperSlide>
                                <img
                                    src={val}
                                    className="w-full h-full object-contain lg:object-cover z-0"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductGallery;
