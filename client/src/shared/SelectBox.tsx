import React from "react";

type Props = {};

const SelectBox: React.FC<Props> = () => {
    return (
        <div className={``}>
            <select className={`select-input `} defaultValue={`Colors`}>
                <option>TEST TEST </option>
                <option>TEST TEST </option>
            </select>
        </div>
    );
};

export default SelectBox;
