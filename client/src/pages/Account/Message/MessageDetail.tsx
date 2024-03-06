import React from "react";

// Components
import Button from "shared/Button";
import TextArea from "shared/TextArea";
import Icon from "shared/Icon";

// Types
import { MessageViewTypes } from "../types";

type Props = {
    setMessageViewType: React.Dispatch<React.SetStateAction<MessageViewTypes>>;
};

const MessageDetail: React.FC<Props> = ({ setMessageViewType }) => {
    return (
        <div className="p-2 lg:p-4">
            <Button
                sizes="w-fit"
                colors="bg-grey1"
                spacings="p-2"
                extraClass="flex items-center justify-center"
                buttonContent={
                    <>
                        <Icon name="arrow_back" />
                    </>
                }
                onClick={() => setMessageViewType("message_list")}
            />
            <div className=" bg-grey1 grid grid-cols-2 lg:grid-cols-2 gap-2 p-2 my-4">
                <div>Date:</div> <div>26.01.2024 20:21</div>
                <div>Title:</div> <div>Ürün beden bilgisi</div>
                <div>Content:</div> <div>Content Detail</div>
            </div>
            <div className="border p-2">
                <div>SOL</div>
                <div>SAĞ</div>
            </div>
        </div>
    );
};

export default MessageDetail;
