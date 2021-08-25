import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import FormNote from "./FormNote";

let note;

function NoteModal(props) {
    console.log("NoteModal");
    const [show, setShow] = useState(false);

    const { buttonHandler, getState, ...modalProps } = { ...props };
    getState((state, newNote) => {
        note = newNote;
        setShow(state);
    });
    return (
        <Modal
            show={show}
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
