import React from "react";

// Components
import Text from "shared/Text";
import { Link } from "react-router-dom";

type Props = {};

const Account = () => {
    return (
        <>
            <Text
                ElementTag="div"
                fontSize="text-md"
                fontColor="text-grey6"
                fontWeight="font-bold"
                textContent={
                    <>
                        <Link to={"/account"}>ACCOUNT</Link>
                    </>
                }
            />
        </>
    );
};

export default Account;
