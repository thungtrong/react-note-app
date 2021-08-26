import React from "react";

import { Modal } from "react-bootstrap";
import FormNote from "./FormNote";

function NoteModal(props) {
    // console.log("NoteModal");
    const { buttonHandler, note, ...modalProps } = { ...props };

    return (
        <Modal
            {...modalProps}
            size="md"
            fullscreen="sm-down"
            className="mt-5 p-1"
        >
            <Modal.Body>
                <FormNote buttonHandler={buttonHandler} note={note}></FormNote>
            </Modal.Body>
        </Modal>
    );
}

export default NoteModal;
