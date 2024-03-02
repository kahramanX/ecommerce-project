import React, { useState } from "react";

// Components
import Button from "shared/Button";
import Icon from "shared/Icon";
import Text from "shared/Text";

type Props = {};

const AttributeBox: React.FC<Props> = () => {
    const [isAttributeClose, setIsAttributeClose] = useState<boolean>(false);

    return (
        <div className="layered-box-shadow bg-violet p-2 mb-4">
            <div className="flex gap-4">
                <Button
                    sizes="text-sm w-full"
                    colors="bg-violet"
                    spacings="py-2 gap-2"
                    extraClass="flex justify-center items-center"
                    buttonContent={
                        <>
                            <Text
                                fontColor="text-black"
                                fontSize="text-base"
                                fontWeight="font-semibold"
                                textContent={<>Sorting</>}
                            />
                        </>
                    }
                />
                <Button
                    sizes="text-sm"
                    colors="bg-grey1"
                    spacings="py-2 px-2 lg:px-4"
                    extraClass="flex justify-center items-center"
                    buttonContent={
                        <>
                            <Icon name="add" extraClass="text-xs" />
                            {/* <Icon
                        name="remove"
                        extraClass="text-xs"
                    /> */}
                        </>
                    }
                    onClick={() => setIsAttributeClose((current) => !current)}
                />
            </div>

            {isAttributeClose && (
                <>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {Array.from({ length: 10 }).map(() => (
                            <>
                                <div className="border border-grey3 bg-grey1 flex items-center justify-center cursor-pointer">
                                    S
                                </div>
                            </>
                        ))}
                    </div>
                    <Button
                        sizes="text-sm w-full"
                        colors="bg-grey1"
                        spacings="py-2 gap-2"
                        extraClass="flex justify-center items-center mt-4"
                        buttonContent={
                            <>
                                <Text
                                    fontColor="text-black"
                                    fontSize="text-base"
                                    fontWeight="font-semibold"
                                    textContent={<>Reset</>}
                                />
                            </>
                        }
                    />
                </>
            )}
        </div>
    );
};

export default AttributeBox;
