import React from "react";

// Components
import ReactHelmet from "components/ReactHelmet";
import Text from "shared/Text";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Login from "./Login";
import Register from "./Register";

type Props = {};

const LoginRegister = (props: Props) => {
    return (
        <>
            <ReactHelmet
                titleName="Login or Register"
                description="Login/Register Page"
            />

            <main className="px-2 md:px-4 lg:px-10 my-10">
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-1-2_1-1">
                    <Tabs
                        className="lg:col-start-2"
                        selectedTabClassName="border-b-2 focus:outline-none"
                    >
                        <TabList className="flex justify-center items-center gap-8 mb-10 border-b border-b-grey3">
                            <Tab className="cursor-pointer">
                                <Text
                                    ElementTag="div"
                                    fontSize="text-2xl lg:text-4xl text-center"
                                    fontColor="text-grey6"
                                    fontWeight="font-medium"
                                    extraClass="mb-2"
                                    textContent="Login"
                                />
                            </Tab>
                            <Tab className="cursor-pointer">
                                <Text
                                    ElementTag="div"
                                    fontSize="text-2xl lg:text-4xl text-center"
                                    fontColor="text-grey6"
                                    fontWeight="font-medium"
                                    extraClass="mb-2"
                                    textContent="Register"
                                />
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Register />
                        </TabPanel>
                    </Tabs>
                </div>
            </main>
        </>
    );
};

export default LoginRegister;
