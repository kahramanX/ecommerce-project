import React from "react";

// Components
import Button from "shared/Button";
import Icon from "shared/Icon";
import AddressItem from "shared/AddressItem";

// Types
import { AddressViewTypes } from "../types";

type Props = {
    setAddressViewType: React.Dispatch<React.SetStateAction<AddressViewTypes>>;
};

const AddressList: React.FC<Props> = ({ setAddressViewType }) => {
    return (
        <>
            <div className="grid grid-cols-1 p-2 lg:p-4">
                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2 mb-4"
                    extraClass="flex items-center justify-center"
                    buttonContent={
                        <>
                            <Icon name="add" />
                            Add Address
                        </>
                    }
                    onClick={() => setAddressViewType("address_add")}
                />
                {Array.from({ length: 10 }).map(() => {
                    return (
                        <>
                            <AddressItem
                                onAddressUpdate={() => {
                                    setAddressViewType("address_edit");
                                }}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default AddressList;
