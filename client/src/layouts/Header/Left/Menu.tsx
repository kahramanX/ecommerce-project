import { useState } from "react";

// Components
import Modal from "react-modal";
import Icon from "shared/Icon";
import Text from "shared/Text";

type Props = {};

const customStyles = {
    content: { zIndex: 20 },
    overlay: { zIndex: 15 },
};

const Menu = (props: Props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Text
                ElementTag="div"
                fontSize="text-md"
                fontColor="text-grey6"
                fontWeight="font-bold"
                extraClass="cursor-pointer"
                textContent="MENU"
                onClick={openModal}
            />

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className={
                    "bg-grey1 rounded-none absolute top-2 left-2 right-2 bottom-2 lg:top-20 lg:left-10 lg:right-10 lg:bottom-10 focus-visible:outline-none border layered-box-shadow"
                }
            >
                <div className="relative h-full ">
                    <button
                        className="button flex items-center justify-center p-1 lg:p-2 absolute -top-2 -right-2 lg:-top-5 lg:-right-5 bg-grey1 z-10"
                        onClick={closeModal}
                    >
                        <Icon name="close" />
                    </button>
                    <div className="p-2 relative overflow-y-scroll h-full">
                        <h2>Hello</h2>
                        {Array.from({ length: 30 }).map((_, index) => {
                            return <div key={index}>I am a modal</div>;
                        })}
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Menu;
