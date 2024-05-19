import React, { useState } from "react";

// Components
import AddressList from "./AddressList";
import AddAddress from "./AddAddress";
import UpdateAddress from "./UpdateAddress";

// Types
import { AddressViewTypes } from "../types";

type Props = {};

const Address: React.FC<Props> = () => {
  const [addressViewType, setAddressViewType] = useState<AddressViewTypes>("address_list");

  const renderContent = (addressViewType: AddressViewTypes) => {
    switch (addressViewType) {
      case "address_list":
        return <AddressList setAddressViewType={setAddressViewType} />;
      case "address_add":
        return <AddAddress setAddressViewType={setAddressViewType} />;
      case "address_update":
        return <UpdateAddress setAddressViewType={setAddressViewType} />;
      default:
        break;
    }
  };

  return <>{renderContent(addressViewType)}</>;
};

export default Address;
