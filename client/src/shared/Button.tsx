import React from "react";

type Props = {
    buttonContent: string | JSX.Element;
    extraClass?: string;
    spacings?: string;
    sizes?: string;
    colors?: string;
    defaultStyles?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
    buttonContent,
    colors = "",
    spacings = "",
    sizes = "",
    extraClass = "",
    defaultStyles = true,
    ...otherProps
}) => {
    return (
        <button
            className={`${
                defaultStyles ? "button" : ""
            } ${colors} ${sizes} ${spacings} ${extraClass}`}
            {...otherProps}
        >
            {buttonContent}
        </button>
    );
};

export default Button;
