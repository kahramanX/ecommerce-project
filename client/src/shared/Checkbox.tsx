import React from "react";

type Props = {
    htmlFor: string;
    inputId: string;
    labelContent: string;
};

const Checkbox: React.FC<Props> = ({ htmlFor, inputId, labelContent = "" }) => {
    return (
        <div className="flex gap-2">
            <input id={inputId} className="checkbox" type="checkbox" />
            <label htmlFor={htmlFor} className="text-md">
                {labelContent}
            </label>
        </div>
    );
};

export default Checkbox;
