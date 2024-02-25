import React from "react";

type Props = {
    htmlFor: string;
    inputId: string;
    labelContent: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RadioInput: React.FC<Props> = ({
    htmlFor,
    inputId,
    labelContent,
    ...otherProps
}) => {
    return (
        <div className="flex gap-2">
            <input
                id={inputId}
                name="radio"
                className="radio"
                type="radio"
                {...otherProps}
            />
            <label htmlFor={htmlFor}>{labelContent}</label>
        </div>
    );
};

export default RadioInput;
