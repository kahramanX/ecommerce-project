import React from "react";

// Components
import AttributeBox from "shared/AttributeBox";
import Button from "shared/Button";
import Icon from "shared/Icon";

type Props = {
    setFilterJustifications: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterSection: React.FC<Props> = ({ setFilterJustifications }) => {
    return (
        <div className="absolute lg:static top-2 left-2 right-2 z-20 bg-grey1 lg:bg-transparent layered-box-shadow lg:shadow-reset lg:border-none">
            <Button
                sizes="absolute -top-2 -right-2 lg:-top-5 lg:-right-5"
                colors="bg-grey1"
                spacings="p-1 lg:p-2"
                extraClass="flex lg:hidden items-center justify-center z-10"
                buttonContent={
                    <>
                        <Icon name="close" />
                    </>
                }
                onClick={() => setFilterJustifications((current) => !current)}
            />
            <div className="p-6 lg:p-0">
                <AttributeBox />
                <AttributeBox />
                <AttributeBox />
                <AttributeBox />
                <AttributeBox />
                <AttributeBox />
                <AttributeBox />
                <AttributeBox />
            </div>
        </div>
    );
};

export default FilterSection;
