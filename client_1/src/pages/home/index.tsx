// Components
import ReactHelmet from "components/ReactHelmet";
import Product from "shared/Product";
import Text from "shared/Text";
import Button from "shared/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HomePage = (): JSX.Element => {
    return (
        <>
            <ReactHelmet titleName="Home" description="Home Page" />
            <main className="px-2 md:px-4 lg:px-10">
                <section className="gap-8 grid grid-cols-1 lg:grid-cols-1-2_1-1">
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
                                            <Text
                                                ElementTag="div"
                                                fontSize="text-5xl lg:text-6xl"
                                                fontColor="text-grey1"
                                                fontWeight="font-bold"
                                                extraClass="mb-5 text-shadow-black"
                                                textContent={
                                                    <>
                                                        GROWING IN
                                                        <br />
                                                        THE DARK
                                                    </>
                                                }
                                            />
                                            <Text
                                                ElementTag="div"
                                                fontSize="text-sm lg:text-xl"
                                                fontColor="text-grey6"
                                                fontWeight="font-bold"
                                                extraClass="text-shadow-white"
                                                textContent={
                                                    <>
                                                        NIGHT FALLS AND THE CITY
                                                        GETS DARKER.
                                                    </>
                                                }
                                            />
                                            <Text
                                                ElementTag="div"
                                                fontSize="text-sm lg:text-xl"
                                                fontColor="text-grey6"
                                                fontWeight="font-bold"
                                                extraClass="text-shadow-white"
                                                textContent={
                                                    <>
                                                        NIGHT FALLS AND THE CITY
                                                        GETS DARKER.
                                                    </>
                                                }
                                            />
                                            <Button
                                                colors="bg-grey1"
                                                spacings="px-4 py-2 mt-4"
                                                buttonContent={
                                                    <>Shop Collection</>
                                                }
                                            />
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

                <section className="lg:my-60">
                    <div className="layered-box-shadow bg-green flex flex-col items-center py-4 lg:py-8 gap-4">
                        <Text
                            ElementTag="div"
                            fontSize="text-2xl lg:text-3xl"
                            fontColor="text-grey6"
                            fontWeight="font-bold"
                            textContent="PROMOTIONS"
                        />
                        <Text
                            ElementTag="div"
                            fontSize="text-4xl lg:text-6xl"
                            fontColor="text-grey6"
                            fontWeight="font-bold"
                            textContent="UP TO -40%"
                        />
                        <Text
                            ElementTag="div"
                            fontSize="text-base"
                            fontColor="text-grey6"
                            fontWeight="font-normal"
                            extraClass="italic"
                            textContent="On Selected Items"
                        />
                        <Button
                            sizes="text-xs lg:text-base"
                            colors="bg-grey1"
                            spacings="px-2 py-2 lg:px-4"
                            buttonContent={<>Shop All</>}
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
            </main>
        </>
    );
};

export default HomePage;
