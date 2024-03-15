import ReactHelmet from "components/ReactHelmet";
import React, { useState } from "react";

// Components
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Profile from "./Profile";
import Address from "./Address";
import Orders from "./Orders";
import Text from "shared/Text";
import AccountTitle from "./AccountTitle";

// Swiper Components
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation } from "swiper/modules";

// Tabs
import UpdatePassword from "./UpdatePassword";
import Message from "./Message";

type Props = {};

const Account: React.FC<Props> = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
    return (
        <>
            <ReactHelmet titleName="Account" description="Account Page" />

            <main className="px-2 md:px-4 lg:px-10">
                <AccountTitle tabIndex={selectedTabIndex} />

                <Tabs
                    selectedTabClassName=""
                    selectedTabPanelClassName="layered-box-shadow h-full"
                    className="grid gap-8 grid-cols-1 lg:grid-cols-1-2_1-1"
                    onSelect={(selected) => {
                        setSelectedTabIndex(selected);
                    }}
                >
                    <TabList
                        className={
                            "flex gap-4 justify-center items-baseline overflow-x-auto lg:block text-nowrap lg:p-1"
                        }
                    >
                        {/*
                        <Swiper
                            className="p-1"
                            wrapperClass=""
                            slidesPerView={4}
                            direction="horizontal"
                            loop={false}
                            spaceBetween={10}
                            breakpoints={{
                                1024: {
                                    direction: "vertical",
                                    spaceBetween: "auto",
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Tab>
                                    <Text
                                        ElementTag="div"
                                        fontSize="text-xs w-full lg:text-md"
                                        fontColor="bg-grey1"
                                        fontWeight="font-bold"
                                        extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2   ${
                                            selectedTabIndex == 0 &&
                                            "bg-grey6 text-grey1"
                                        }`}
                                        textContent="PROFILE"
                                    />
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab className="cursor-pointer">
                                    <Text
                                        ElementTag="div"
                                        fontSize="text-xs w-full lg:text-md"
                                        fontColor="bg-grey1"
                                        fontWeight="font-bold"
                                        extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                            selectedTabIndex == 1 &&
                                            "bg-grey6 text-grey1"
                                        }`}
                                        textContent="ADDRESS"
                                    />
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab className="cursor-pointer">
                                    <Text
                                        ElementTag="div"
                                        fontSize="text-xs w-full lg:text-md"
                                        fontColor="bg-grey1"
                                        fontWeight="font-bold"
                                        extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                            selectedTabIndex == 2 &&
                                            "bg-grey6 text-grey1"
                                        }`}
                                        textContent="ORDERS"
                                    />
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab className="cursor-pointer">
                                    <Text
                                        ElementTag="div"
                                        fontSize="text-xs w-full lg:text-md"
                                        fontColor="bg-grey1"
                                        fontWeight="font-bold"
                                        extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                            selectedTabIndex == 3 &&
                                            "bg-grey6 text-grey1"
                                        }`}
                                        textContent="REFUNDS"
                                    />
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab className="cursor-pointer">
                                    <Text
                                        ElementTag="div"
                                        fontSize="text-xs w-full lg:text-md"
                                        fontColor="bg-grey1"
                                        fontWeight="font-bold"
                                        extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                            selectedTabIndex == 4 &&
                                            "bg-grey6 text-grey1"
                                        }`}
                                        textContent="FAVORITES"
                                    />
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab className="cursor-pointer">
                                    <Text
                                        ElementTag="div"
                                        fontSize="text-xs w-full lg:text-md"
                                        fontColor="bg-grey1"
                                        fontWeight="font-bold"
                                        extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                            selectedTabIndex == 5 &&
                                            "bg-grey6 text-grey1"
                                        }`}
                                        textContent="FOLLOWS"
                                    />
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab className="cursor-pointer">
                                    <Text
                                        ElementTag="div"
                                        fontSize="text-xs w-full lg:text-md"
                                        fontColor="bg-grey1"
                                        fontWeight="font-bold"
                                        extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                            selectedTabIndex == 6 &&
                                            "bg-grey6 text-grey1"
                                        }`}
                                        textContent="MESSAGES"
                                    />
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab className="cursor-pointer">
                                    <Text
                                        ElementTag="div"
                                        fontSize="text-xs lg:text-md w-fit lg:w-full"
                                        fontColor="bg-grey1"
                                        fontWeight="font-bold"
                                        extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                            selectedTabIndex == 7 &&
                                            "bg-grey6 text-grey1"
                                        }`}
                                        textContent="UPDATE PASSWORD"
                                    />
                                </Tab>
                            </SwiperSlide>
                        </Swiper>
                        */}
                        <Tab>
                            <Text
                                ElementTag="div"
                                fontSize="text-xs w-full lg:text-md"
                                fontColor="bg-grey1"
                                fontWeight="font-bold"
                                extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2   ${
                                    selectedTabIndex == 0 &&
                                    "bg-grey6 text-grey1"
                                }`}
                                textContent="PROFILE"
                            />
                        </Tab>
                        <Tab className="cursor-pointer">
                            <Text
                                ElementTag="div"
                                fontSize="text-xs w-full lg:text-md"
                                fontColor="bg-grey1"
                                fontWeight="font-bold"
                                extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                    selectedTabIndex == 1 &&
                                    "bg-grey6 text-grey1"
                                }`}
                                textContent="ADDRESS"
                            />
                        </Tab>
                        <Tab className="cursor-pointer">
                            <Text
                                ElementTag="div"
                                fontSize="text-xs w-full lg:text-md"
                                fontColor="bg-grey1"
                                fontWeight="font-bold"
                                extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                    selectedTabIndex == 2 &&
                                    "bg-grey6 text-grey1"
                                }`}
                                textContent="ORDERS"
                            />
                        </Tab>
                        <Tab className="cursor-pointer">
                            <Text
                                ElementTag="div"
                                fontSize="text-xs w-full lg:text-md"
                                fontColor="bg-grey1"
                                fontWeight="font-bold"
                                extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                    selectedTabIndex == 3 &&
                                    "bg-grey6 text-grey1"
                                }`}
                                textContent="REFUNDS"
                            />
                        </Tab>
                        <Tab className="cursor-pointer">
                            <Text
                                ElementTag="div"
                                fontSize="text-xs w-full lg:text-md"
                                fontColor="bg-grey1"
                                fontWeight="font-bold"
                                extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                    selectedTabIndex == 4 &&
                                    "bg-grey6 text-grey1"
                                }`}
                                textContent="FAVORITES"
                            />
                        </Tab>
                        <Tab className="cursor-pointer">
                            <Text
                                ElementTag="div"
                                fontSize="text-xs w-full lg:text-md"
                                fontColor="bg-grey1"
                                fontWeight="font-bold"
                                extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                    selectedTabIndex == 5 &&
                                    "bg-grey6 text-grey1"
                                }`}
                                textContent="FOLLOWS"
                            />
                        </Tab>
                        <Tab className="cursor-pointer">
                            <Text
                                ElementTag="div"
                                fontSize="text-xs w-full lg:text-md"
                                fontColor="bg-grey1"
                                fontWeight="font-bold"
                                extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                    selectedTabIndex == 6 &&
                                    "bg-grey6 text-grey1"
                                }`}
                                textContent="MESSAGES"
                            />
                        </Tab>
                        <Tab className="cursor-pointer">
                            <Text
                                ElementTag="div"
                                fontSize="text-xs lg:text-md w-fit lg:w-full"
                                fontColor="bg-grey1"
                                fontWeight="font-bold"
                                extraClass={`cursor-pointer layered-box-shadow lg:mb-4 p-2  ${
                                    selectedTabIndex == 7 &&
                                    "bg-grey6 text-grey1"
                                }`}
                                textContent="UPDATE PASSWORD"
                            />
                        </Tab>
                    </TabList>
                    <div className="">
                        <TabPanel>
                            <Profile />
                        </TabPanel>
                        <TabPanel>
                            <Address />
                        </TabPanel>
                        <TabPanel>
                            <Orders />
                        </TabPanel>
                        <TabPanel>
                            <div>REFUNDS</div>
                        </TabPanel>
                        <TabPanel>
                            <div>FAVORITES</div>
                        </TabPanel>
                        <TabPanel>
                            <div>FOLLOWS</div>
                        </TabPanel>
                        <TabPanel>
                            <Message />
                        </TabPanel>
                        <TabPanel>
                            <UpdatePassword />
                        </TabPanel>
                    </div>
                </Tabs>
            </main>
        </>
    );
};

export default Account;
