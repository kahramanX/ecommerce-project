import React from "react";

// Components
import Text from "shared/Text";

type Props = {};

const Account = (props: Props) => {
    return (
        <>
            <Text
                ElementTag="div"
                fontSize="text-md"
                fontColor="text-grey6"
                fontWeight="font-bold"
                textContent="ACCOUNT"
            />
        </>
    );
};

export default Account;
