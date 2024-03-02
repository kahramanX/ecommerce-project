import ReactHelmet from "components/ReactHelmet";
import React from "react";

type Props = {};

const Account = (props: Props) => {
    return (
        <>
            <ReactHelmet titleName="Account" description="Account Page" />

            <main className="px-2 md:px-4 lg:px-10">Account</main>
        </>
    );
};

export default Account;
