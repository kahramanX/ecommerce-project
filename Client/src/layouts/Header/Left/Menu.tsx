import { useState } from "react";

// Components
import Modal from "react-modal";

type Props = {};

const customStyles = {
    content: {},
    overlay: { zIndex: 100 },
};

const menu = (props: Props) => {
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
            <div className="font-bold cursor-pointer" onClick={openModal}>
                MENU
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className={
                    "bg-grey1 rounded-none absolute top-20 left-10 right-10 focus-visible:outline-none"
                }
            >
                <div className="border rounded-none relative layered-box-shadow">
                    <button
                        className="button flex items-center justify-center p-2 absolute lg:-top-5 lg:-right-5 bg-grey1"
                        onClick={closeModal}
                    >
                        <i className="material-symbols-sharp">close</i>
                    </button>
                    <div className="p-2 overflow-y-scroll ">
                        <h2>Hello</h2>
                        {Array.from({ length: 10 }).map(() => {
                            return <div>I am a modal</div>;
                        })}
                        <div>I am a modal</div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default menu;
