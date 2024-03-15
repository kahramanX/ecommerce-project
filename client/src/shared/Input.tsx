import React, { HTMLInputTypeAttribute } from "react";
import Icon from "./Icon";

type Props = {
    type: HTMLInputTypeAttribute;
    placeholder: string;
    inputClassName?: string;
    parentClassName?: string;
    iconClassName?: string;
    iconName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({
    type,
    placeholder,
    inputClassName = "",
    parentClassName = "",
    iconClassName = "",
    iconName = "",
    ...otherProps
}) => {
    return (
        <>
            <div className={`${parentClassName}`}>
                <input
                    className={`input ${inputClassName}`}
                    placeholder={placeholder}
                    type={type}
                    {...otherProps}
                />
                {iconName != "" && (
                    <Icon name={iconName} extraClass={iconClassName} />
                )}
            </div>
        </>
    );
};

export default Input;
