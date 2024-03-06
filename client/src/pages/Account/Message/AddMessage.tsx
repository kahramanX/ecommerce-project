import React from "react";

// Components
import Input from "shared/Input";
import Button from "shared/Button";
import TextArea from "shared/TextArea";

// Types
import { MessageViewTypes } from "../types";

type Props = {
    setMessageViewType: React.Dispatch<React.SetStateAction<MessageViewTypes>>;
};

const AddMessage: React.FC<Props> = ({ setMessageViewType }) => {
    return (
        <div className="p-2 lg:p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input
                type={"text"}
                placeholder={"Address Name"}
                parentClassName="w-full"
                inputClassName="w-full"
            />

            <Input
                type={"text"}
                placeholder={"Message Title"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <TextArea
                parentClassName="w-full lg:col-span-2"
                textAreaClassName="w-full"
                placeholder="Message Detail"
            />
            <div></div>
            <div className="flex lg:col-span-2 gap-4">
                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2"
                    extraClass="lg:col-span-1"
                    buttonContent="Send Message"
                />
                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2"
                    extraClass="lg:col-span-1"
                    buttonContent="Cancel"
                    onClick={() => setMessageViewType("message_list")}
                />
            </div>
        </div>
    );
};

export default AddMessage;
