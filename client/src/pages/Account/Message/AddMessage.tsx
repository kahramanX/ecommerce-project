import React from "react";

// Components
import Input from "shared/Input";
import Button from "shared/Button";
import TextArea from "shared/TextArea";
import SelectBox from "shared/SelectBox";

// Types
import { MessageViewTypes } from "../types";

type Props = {
    setMessageViewType: React.Dispatch<React.SetStateAction<MessageViewTypes>>;
};

const AddMessage: React.FC<Props> = ({ setMessageViewType }) => {
    return (
        <div className="p-2 lg:p-4 grid grid-cols-1 lg:grid-cols-1 gap-4">
            <SelectBox parentClassName="w-full" selectClassName="w-full" />
            <Input
                type={"text"}
                placeholder={"Message Title"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <TextArea
                parentClassName="w-full"
                textAreaClassName="w-full"
                placeholder="Message Detail"
            />
            <div></div>
            <div className="flex  gap-4">
                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2"
                    extraClass=""
                    buttonContent="Send Message"
                />
                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2"
                    extraClass=""
                    buttonContent="Cancel"
                    onClick={() => setMessageViewType("message_list")}
                />
            </div>
        </div>
    );
};

export default AddMessage;
