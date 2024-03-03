import ReactHelmet from "components/ReactHelmet";
import React from "react";

// Components
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Profile from "./Profile";
import Address from "./Address";
import Orders from "./Orders";

type Props = {};

const Account: React.FC<Props> = () => {
    return (
        <>
            <ReactHelmet titleName="Account" description="Account Page" />

            <main className="px-2 md:px-4 lg:px-10">
                <Tabs
                    selectedTabClassName="focus:outline-none"
                    selectedTabPanelClassName="border"
                    className="grid gap-8 grid-cols-1 lg:grid-cols-1-2_1-1"
                >
                    <TabList className="border-4 border-blue">
                        <Tab className="cursor-pointer">PROFILE</Tab>
                        <Tab className="cursor-pointer">ADDRESS</Tab>
                        <Tab className="cursor-pointer">ORDERS</Tab>
                    </TabList>
                    <div>
                        <TabPanel>
                            <Profile />
                        </TabPanel>
                        <TabPanel>
                            <Address />
                        </TabPanel>
                        <TabPanel>
                            <Orders />
                        </TabPanel>
                    </div>
                </Tabs>
            </main>
        </>
    );
};

export default Account;
