import { useState } from "react";

import { Row, ToastContainer } from "react-bootstrap";
import ToastUndo from "./ToastUndo";

let arrToast = [];

function BoardToast({ get }) {
    // console.log("BoardToast");

    const [show, setShow] = useState(0);
    const checkAndCloseContainer = () => {
        arrToast.shift();
        setShow(arrToast.length);
    };

    get((undoCall) => {
        let key = Math.random();
        arrToast.push(
            <ToastUndo
                undo={undoCall}
                key={key}
                closeContainer={checkAndCloseContainer}
            />
        );
        setShow(key);
    });

    return show ? (
        <Row id="toast-container">
            <ToastContainer>{arrToast}</ToastContainer>
        </Row>
    ) : (
        <></>
    );
}

export default BoardToast;
