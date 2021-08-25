import { Form, Button } from "react-bootstrap";

function FormNote({ addNote }) {
    // Replace key Enter event
    const inputTitleKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("inputContent").focus();
        }
    };

    return (
        <>
            <Form id="formAddNote" className="border border-1 rounded-3 p-2">
                {/* input for title */}
                <Form.Group controlId="inputTitle">
                    <Form.Control
                        className="border-0"
                        type="text"
                        placeholder="Title"
                        onKeyPress={inputTitleKeyPressHandler}
                    ></Form.Control>
                </Form.Group>

                {/* Input for content */}
                <Form.Group controlId="inputContent" className="my-2">
                    <Form.Control
                        as="span"
                        className="text-area border-0"
                        role="textbox"
                        placeholder="Create Note"
                        contentEditable
                    ></Form.Control>
                </Form.Group>

                {/* Footer form */}
                <Form.Group className="d-flex justify-content-end">
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={addNote}
                    >
                        Add
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default FormNote;
