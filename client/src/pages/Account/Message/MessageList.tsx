import React from "react";

// Components
import Button from "shared/Button";
import Icon from "shared/Icon";
import MessageItem from "shared/MessageItem";

// Types
import { MessageViewTypes } from "../types";

type Props = {
    setMessageViewType: React.Dispatch<React.SetStateAction<MessageViewTypes>>;
};

const MessageList: React.FC<Props> = ({ setMessageViewType }) => {
    return (
        <div>
            <div className="grid grid-cols-1 p-2 lg:p-4">
                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2 mb-4"
                    extraClass="flex items-center justify-center"
                    buttonContent={
                        <>
                            <Icon name="add" />
                            Send Message
                        </>
                    }
                    onClick={() => setMessageViewType("message_add")}
                />
                <div className=" border-b bg-grey1 grid grid-cols-3 p-2 mb-4 text-center">
                    <div>Date</div>
                    <div>Title</div>
                    <div>Action</div>
                </div>
                {Array.from({ length: 10 }).map(() => {
                    return (
                        <>
                            <MessageItem
                                onClickMessage={() =>
                                    setMessageViewType("message_detail")
                                }
                            />
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default MessageList;
