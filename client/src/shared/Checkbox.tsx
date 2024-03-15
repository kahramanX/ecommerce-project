import React from "react";

type Props = {
    htmlFor: string;
    inputId: string;
    labelContent: string;
    parentClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<Props> = ({
    htmlFor,
    inputId,
    labelContent = "",
    parentClassName = "",
    ...otherProps
}) => {
    return (
        <div className={`flex gap-2 ${parentClassName}`}>
            <input
                id={inputId}
                className="checkbox"
                type="checkbox"
                {...otherProps}
            />
            <label htmlFor={htmlFor} className="text-md">
                {labelContent}
            </label>
        </div>
    );
};

export default Checkbox;
