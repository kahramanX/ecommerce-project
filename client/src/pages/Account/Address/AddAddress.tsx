import React from "react";

// Components
import Input from "shared/Input";
import Button from "shared/Button";
import TextArea from "shared/TextArea";

// Types
import { AddressViewTypes } from "../types";

type Props = {
    setAddressViewType: React.Dispatch<React.SetStateAction<AddressViewTypes>>;
};

const AddAddress: React.FC<Props> = ({ setAddressViewType }) => {
    return (
        <div className="p-2 lg:p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input
                type={"text"}
                placeholder={"Address Name"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <Input
                type={"text"}
                placeholder={"Name"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <Input
                type={"text"}
                placeholder={"Surname"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <Input
                type={"text"}
                placeholder={"Phone Number"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <Input
                type={"text"}
                placeholder={"Country"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <Input
                type={"text"}
                placeholder={"County"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <Input
                type={"text"}
                placeholder={"Neighbourhood"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <Input
                type={"text"}
                placeholder={"Postal Code"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <TextArea
                parentClassName="w-full lg:col-span-2"
                textAreaClassName="w-full"
                placeholder="Addres Detail"
            />
            <div></div>
            <div className="flex lg:col-span-2 gap-4">
                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2"
                    extraClass="lg:col-span-1"
                    buttonContent="Add Address"
                />
                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2"
                    extraClass="lg:col-span-1"
                    buttonContent="Cancel"
                    onClick={() => setAddressViewType("address_list")}
                />
            </div>
        </div>
    );
};

export default AddAddress;
