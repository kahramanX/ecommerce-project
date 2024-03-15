import React from "react";

type Props = {
    placeholder: string;
    textAreaClassName?: string;
    parentClassName?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<Props> = ({
    parentClassName = "",
    textAreaClassName = "",
    placeholder = "",
    ...otherProps
}) => {
    return (
        <>
            <div className={`${parentClassName}`}>
                <textarea
                    className={`input ${textAreaClassName}`}
                    placeholder={placeholder}
                    {...otherProps}
                ></textarea>
            </div>
        </>
    );
};

export default TextArea;
