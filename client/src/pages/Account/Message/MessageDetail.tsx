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
            <div className="p-2 flex flex-col">
                <div className="border mb-4 p-2 lg:w-1/2 bg-violet">
                    <div className="flex items-center mb-2">
                        <Icon name="verified_user" extraClass="text-xs" />
                        <span className="text-xs font-medium">
                            Müşteri Hizmetleri
                        </span>
                        <span className="text-xs text-grey4 ms-2">
                            26.01.2024 20:21
                        </span>
                    </div>
                    <div className="text-md">
                        Merhaba, ben müşteri hizmetleri
                    </div>
                </div>

                <div className="border mb-4 p-2 lg:w-1/2 bg-grey2 ">
                    <div className="flex items-center mb-2">
                        <Icon name="verified_user" extraClass="text-xs" />
                        <span className="text-xs font-medium">
                            Alagar Kahraman
                        </span>
                        <span className="text-xs text-grey4 ms-2">
                            26.01.2024 20:21
                        </span>
                    </div>
                    <div className="text-md">Merhaba, ben müşteri</div>
                </div>

                <div className="border mb-4 p-2 lg:w-1/2 bg-violet">
                    <div className="flex items-center mb-2">
                        <Icon name="verified_user" extraClass="text-xs" />
                        <span className="text-xs font-medium">
                            Müşteri Hizmetleri
                        </span>
                        <span className="text-xs text-grey4 ms-2">
                            26.01.2024 20:21
                        </span>
                    </div>
                    <div className="text-md">
                        Merhaba, ben müşteri hizmetleri
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDetail;
