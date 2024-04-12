import React from "react";
import { useFormContext } from "react-hook-form";

// Components
import Text from "shared/Text";

type Props = {
    parentClassName?: string;
    selectClassName?: string;
    options?: option[] | any[];
    registerName?: string;
    errorMessage?: string | undefined;
};

type option = {
    id: number;
    name: string;
    isSelected: boolean;
};

const SelectBox: React.FC<Props> = ({
    parentClassName = "",
    selectClassName = "",
    options,
    registerName,
    errorMessage,
    ...otherProps
}) => {
    const { register } = useFormContext(); // retrieve all hook methods

    return (
        <div className={`${parentClassName}`}>
            <select
                className={`select-input ${selectClassName}`}
                {...(registerName != undefined ? register(registerName) : null)}
                {...otherProps}
            >
                {options?.map((option, index) => {
                    return (
                        <>
                            <option value={option.name} key={index}>
                                {option.name}
                            </option>
                        </>
                    );
                })}
            </select>
            {errorMessage && (
                <Text
                    ElementTag="div"
                    fontSize="text-sm"
                    fontColor="text-red"
                    fontWeight="font-bold"
                    textContent={errorMessage}
                />
            )}
        </div>
    );
};

export default SelectBox;
