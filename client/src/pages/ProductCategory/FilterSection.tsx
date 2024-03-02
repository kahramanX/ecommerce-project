import React from "react";

// Components
import AttributeBox from "shared/AttributeBox";

type Props = {};

const FilterSection: React.FC<Props> = () => {
    return (
        <div className="">
            <AttributeBox />
            <AttributeBox />
            <AttributeBox />
            <AttributeBox />
        </div>
    );
};

export default FilterSection;
