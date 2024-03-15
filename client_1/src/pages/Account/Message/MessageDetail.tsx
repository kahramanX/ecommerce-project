import React from "react";

// Components
import Button from "shared/Button";
import TextArea from "shared/TextArea";
import Icon from "shared/Icon";
import ChatItem from "shared/ChatItem";

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
            <div className=" border-b bg-grey1 grid grid-cols-2 lg:grid-cols-2 gap-2 p-2 my-4">
                <div className="font-bold">Date:</div>
                <div>26.01.2024 20:21</div>
                <div className="font-bold">Title:</div>
                <div>Ürün beden bilgisi</div>
                <div className="font-bold">Content:</div>
                <div>
                    Content Detail Content Detail Content Detail Content Detail
                    Content Detail Content Detail Content Detail Content Detail
                    Content Detail Content Detail Content Detail Content Detail
                </div>
            </div>
            <div className="flex flex-col mb-8">
                <ChatItem
                    iconName={"verified_user"}
                    userName={"Müşteri Hizmetleri"}
                    chatDate={"26.01.2024 20:21"}
                    chatPosition="justify-start"
                    chatColor="bg-violet"
                    messageContent={`Merhaba, ben müşteri hizmetleri ben müşteri
                    hizmetleri ben müşteri hizmetleri ben müşteri
                    hizmetleri ben müşteri hizmetleri ben müşteri
                    hizmetleri ben müşteri hizmetleri ben müşteri
                    hizmetleri`}
                />

                <ChatItem
                    iconName={"face"}
                    userName={"Alagar Kahraman"}
                    chatDate={"26.01.2024 20:21"}
                    chatPosition="justify-end"
                    chatColor="bg-grey1"
                    messageContent={`Merhaba, ben müşteri ben müşteri ben müşteri ben
                    müşteri ben müşteri ben müşteri ben müşteri ben
                    müşteri ben müşteri`}
                />
            </div>

            <div>
                <TextArea
                    parentClassName="w-full lg:col-span-2 mb-2"
                    textAreaClassName="w-full"
                    placeholder="Write Message"
                />

                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2"
                    extraClass="lg:col-span-1"
                    buttonContent="Send Message"
                />
            </div>
        </div>
    );
};

export default MessageDetail;
