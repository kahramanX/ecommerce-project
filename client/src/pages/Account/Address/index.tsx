import React, { useState } from "react";

// Components
import Button from "shared/Button";
import Icon from "shared/Icon";
import AddressList from "./AddressList";
import AddAddress from "./AddAddress";

type Props = {};

const Address: React.FC<Props> = () => {
    const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
    return (
        <>
            {showAddressForm ? (
                <AddAddress setShowAddressForm={setShowAddressForm} />
            ) : (
                <AddressList setShowAddressForm={setShowAddressForm} />
            )}
        </>
    );
};

export default Address;
