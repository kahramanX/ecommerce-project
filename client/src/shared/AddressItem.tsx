import React from "react";

// Components
import Button from "shared/Button";
import Icon from "shared/Icon";
import Text from "shared/Text";

type Props = {
    onAddressUpdate?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void | undefined;
};

const AddressItem: React.FC<Props> = ({ onAddressUpdate }) => {
    return (
        <>
            <div className="border border-grey3 flex flex-col justify-between p-2 mb-4">
                <div className="flex justify-between">
                    <Text
                        ElementTag="div"
                        fontSize="text-sm lg:text-base"
                        fontColor="font-black"
                        fontWeight="font-bold"
                        textContent="My Address"
                    />
                    <div className="flex gap-4">
                        <Button
                            sizes="flex items-center justify-center p-0.5"
                            buttonContent={
                                <>
                                    <Icon name="edit_note" />
                                </>
                            }
                            onClick={(e) => {
                                onAddressUpdate && onAddressUpdate(e);
                            }}
                        />
                        <Button
                            sizes="flex items-center justify-center p-0.5"
                            buttonContent={
                                <>
                                    <Icon name="delete" />
                                </>
                            }
                        />
                    </div>
                </div>
                <Text
                    ElementTag="div"
                    fontSize="text-sm lg:text-sm"
                    fontColor="text-grey4"
                    fontWeight="font-medium"
                    extraClass="truncate w-44 lg:w-72"
                    textContent=" My AddressMy AddressMy AddressMy AddressMy AddressMy AddressMy AddressMy AddressMy AddressMy AddressMy AddressMy Address"
                />
            </div>
        </>
    );
};

export default AddressItem;
