import React, { useState } from "react";

// Components
import Button from "shared/Button";
import Icon from "shared/Icon";
import AddressList from "./AddressList";
import AddAddress from "./AddAddress";

type Props = {};

const Address: React.FC<Props> = () => {
    const [showAddressForm, setShowAddressForm] = useState<boolean>(true);
    return (
        <>
            {showAddressForm ? (
                <AddAddress />
            ) : (
                <AddressList setShowAddressForm={setShowAddressForm} />
            )}
        </>
    );
};

export default Address;
