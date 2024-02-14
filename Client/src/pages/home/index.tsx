// Components
import ReactHelmet from "components/ReactHelmet";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Product from "shared/Product";

const HomePage = (): JSX.Element => {
    return (
        <>
            <ReactHelmet titleName="Home" description="Home Page" />
            <main className="px-2 md:px-4 lg:px-10">
                <section className="gap-8 grid grid-cols-1 lg:grid-cols-1-2-1">
                    <div className="layered-box-shadow hidden lg:block lg:max-h-[40rem] bg-blue">
                        <img
                            src={"https://placehold.co/400"}
                            className="h-full w-full object-cover opacity-50"
                        />
                    </div>

                    <Swiper
                        modules={[Pagination]}
                        pagination={true}
                        className="layered-box-shadow relative max-h-[30rem] lg:max-h-[40rem] mx-0"
                    >
                        {[1, 2, 3].map((val, index) => {
                            return (
                                <>
                                    <SwiperSlide
                                        key={index}
                                        className="bg-violet"
                                    >
                                        <div className="h-full w-full border-r">
                                            <img
                                                src={"https://placehold.co/400"}
                                                className="h-full w-full object-cover opacity-50"
                                            />
                                        </div>

                                        <div className="absolute bottom-0 left-0 m-5 lg:m-10">
                                            <div className="text-grey1 text-5xl lg:text-6xl font-bold mb-5 text-shadow-black">
                                                GROWING IN
                                                <br />
                                                THE DARK
                                            </div>
                                            <div className="text-grey6 text-sm lg:text-xl font-bold text-shadow-white">
                                                NIGHT FALLS AND THE CITY GETS
                                                DARKER.
                                            </div>
                                            <div className="text-grey6 text-sm lg:text-xl font-bold text-shadow-white">
                                                NIGHT FALLS AND THE CITY GETS
                                                DARKER.
                                            </div>
                                            <div className="text-grey6 text-sm lg:text-xl font-bold text-shadow-white">
                                                NIGHT FALLS AND THE CITY GETS
                                                DARKER.
                                            </div>
                                            <button className="button px-4 py-2 bg-grey1 mt-4">
                                                Shop Collection
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                </>
                            );
                        })}
                    </Swiper>

                    <div className="layered-box-shadow hidden lg:block lg:max-h-[40rem] bg-green">
                        <img
                            src={"https://placehold.co/400"}
                            className="h-full w-full object-cover opacity-50"
                        />
                    </div>
                </section>
                <section className="my-20">
                    <Swiper
                        modules={[]}
                        slidesPerView={2}
                        spaceBetween={16}
                        wrapperClass="py-2"
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 32,
                            },
                        }}
                    >
                        {[1, 2, 3, 4].map(() => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <Product />
                                    </SwiperSlide>
                                </>
                            );
                        })}
                    </Swiper>
                </section>

                <section>
                    <div className="layered-box-shadow bg-green flex flex-col items-center p-4 gap-4">
                        <div className="text-2xl lg:text-3xl font-bold">
                            PROMOTIONS
                        </div>
                        <div className="text-4xl lg:text-6xl font-bold">
                            UP TO -40%
                        </div>
                        <div className="italic">On Selected Items</div>
                        <button className="button text-xs bg-grey1 px-2 py-2">
                            Shop All
                        </button>
                    </div>
                </section>
                <section className="my-20">
                    <Swiper
                        modules={[]}
                        slidesPerView={2}
                        spaceBetween={16}
                        wrapperClass="py-2"
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 32,
                            },
                        }}
                    >
                        {[1, 2, 3, 4].map(() => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <Product />
                                    </SwiperSlide>
                                </>
                            );
                        })}
                    </Swiper>
                </section>
            </main>
        </>
    );
};

export default HomePage;
