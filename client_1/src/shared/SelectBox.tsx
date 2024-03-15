import React from "react";

type Props = {
    parentClassName?: string;
    selectClassName?: string;
    options?: any[];
};

const SelectBox: React.FC<Props> = ({
    parentClassName = "",
    selectClassName = "",
    options,
}) => {
    return (
        <div className={`${parentClassName}`}>
            <select className={`select-input ${selectClassName}`}>
                <option>TEST TEST </option>
                <option>TEST TEST </option>
            </select>
        </div>
    );
};

export default SelectBox;
