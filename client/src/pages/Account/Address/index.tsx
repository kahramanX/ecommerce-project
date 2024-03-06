import React, { useState } from "react";

// Components
import AddressList from "./AddressList";
import AddAddress from "./AddAddress";

// Types
import { AddressViewTypes } from "../types";

type Props = {};

const Address: React.FC<Props> = () => {
    const [addressViewType, setAddressViewType] =
        useState<AddressViewTypes>("address_list");

    const renderContent = (addressViewType: AddressViewTypes) => {
        switch (addressViewType) {
            case "address_list":
                return <AddressList setAddressViewType={setAddressViewType} />;
            case "address_add":
                return <AddAddress setAddressViewType={setAddressViewType} />;
            default:
                break;
        }
    };

    return <>{renderContent(addressViewType)}</>;
};

export default Address;
