import { useState } from "react";
import { Toast, Button } from "react-bootstrap";

function ToastUndo({ undo, closeContainer }) {
    const [show, setShow] = useState(true);
    return (
        <Toast
            bg={"dark"}
            show={show}
            onClose={() => {
                // close container when don't have children
                closeContainer();
                // Xoa trong database
            }}
            delay={4000}
            autohide
        >
            <Toast.Body className="text-white position-relative rounded-5">
                <span>Đã xoá ghi chú</span>
                <Button
                    variant="dark"
                    className="text-warning position-absolute top-50 end-0 translate-middle"
                    size="sm"
                    onClick={() => {
                        undo(closeContainer);
                    }}
                >
                    Hoàn tác
                </Button>
            </Toast.Body>
        </Toast>
    );
}

export default ToastUndo;
