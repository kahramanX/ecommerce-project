import React from "react";

type Props = {
    htmlFor: string;
    inputId: string;
    inputName: string;
    labelContent: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RadioInput: React.FC<Props> = ({
    htmlFor,
    inputId,
    inputName,
    labelContent,
    ...otherProps
}) => {
    return (
        <div className="flex gap-2 ">
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
