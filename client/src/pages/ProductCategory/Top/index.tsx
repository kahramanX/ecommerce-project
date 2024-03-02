import React from "react";

// Components
import ReactHelmet from "components/ReactHelmet";
import Button from "shared/Button";
import Icon from "shared/Icon";
import Text from "shared/Text";

type Props = {};

const Top: React.FC<Props> = () => {
    return (
        <div className="grid gap-4 lg:gap-8 grid-cols-1-6-1 lg:grid-cols-1-2-1">
            <Button
                sizes="text-sm w-full"
                colors="bg-grey1"
                spacings="py-2 gap-2"
                extraClass="flex justify-center items-center"
                buttonContent={
                    <>
                        <Icon name="arrow_back" extraClass="text-xs" />
                        <Text
                            fontColor="text-black"
                            fontSize="text-base"
                            fontWeight="font-medium"
                            extraClass="hidden lg:block"
                            textContent="Back"
                        />
                    </>
                }
            />
            <div className="flex justify-center items-center layered-box-shadow bg-violet">
                <Text
                    fontColor="text-black"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    textContent={<>Online Exclusive (20)</>}
                />
            </div>
            <div className="flex gap-4">
                <Button
                    sizes="text-sm w-full"
                    colors="bg-grey1"
                    spacings="py-2 gap-2"
                    extraClass="hidden lg:flex justify-center items-center"
                    buttonContent={
                        <>
                            <Text
                                fontColor="text-black"
                                fontSize="text-base"
                                fontWeight="font-medium"
                                textContent={<>Filters</>}
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
                            <Icon name="tune" extraClass="lg:hidden text-xs" />
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default Top;
