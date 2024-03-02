import React from "react";

type Props = {
    textContent: string | JSX.Element;
    fontSize: string;
    fontWeight: string;
    fontColor: string;
    extraClass?: string;
    ElementTag?: keyof JSX.IntrinsicElements;
} & React.HTMLProps<HTMLElement>;

const Text: React.FC<Props> = ({
    textContent,
    fontSize,
    fontWeight,
    fontColor,
    extraClass = "",
    ElementTag = "div" as React.ElementType,
    ...otherProps
}) => {
    return (
        <ElementTag
            className={`${fontSize} ${fontWeight} ${fontColor} ${extraClass}`}
            {...otherProps}
        >
            {textContent}
        </ElementTag>
    );
};

export default Text;
