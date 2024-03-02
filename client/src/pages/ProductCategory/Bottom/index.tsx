import Pagination from "components/Pagination";
import React from "react";

// Components
import Button from "shared/Button";
import Icon from "shared/Icon";
import Text from "shared/Text";

type Props = {};

const Bottom: React.FC<Props> = () => {
    return (
        <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-1-2_1-1">
            <Button
                sizes="text-sm w-full"
                colors="bg-grey1"
                spacings="py-2"
                extraClass="hidden lg:flex justify-center items-center"
                buttonContent={
                    <>
                        <Icon name="navigate_before" extraClass="text-xs" />
                    </>
                }
            />
            <Pagination />
            <Button
                sizes="text-sm w-full"
                colors="bg-grey1"
                spacings="py-2"
                extraClass="hidden lg:flex justify-center items-center"
                buttonContent={
                    <>
                        <Icon name="navigate_next" extraClass="text-xs" />
                    </>
                }
            />
        </div>
    );
};

export default Bottom;
