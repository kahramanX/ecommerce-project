import React from "react";

type Props = {
    htmlFor: string;
    inputId: string;
    inputName: string;
    labelContent: string;
    parentClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RadioInput: React.FC<Props> = ({
    htmlFor,
    inputId,
    inputName,
    labelContent,
    parentClassName = "",
    ...otherProps
}) => {
    return (
        <div className={`flex gap-2 ${parentClassName}`}>
            <input
                id={inputId}
                name={inputName}
                className="radio"
                type="radio"
                {...otherProps}
            />
            <label htmlFor={htmlFor}>{labelContent}</label>
        </div>
    );
};

export default RadioInput;
