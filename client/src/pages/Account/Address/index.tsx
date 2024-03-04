import React from "react";
import AddressItem from "shared/AddressItem";

// Components
import Button from "shared/Button";
import Icon from "shared/Icon";

type Props = {};

const Address: React.FC<Props> = () => {
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
                />
                {Array.from({ length: 10 }).map(() => {
                    return (
                        <>
                            <AddressItem />
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Address;
