import { Form, Button, Row, Col } from "react-bootstrap";

function FormNote({ buttonHandler, id, note }) {
    console.log("FormNote");
    // Replace key Enter event
    const inputTitleKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.form.children[1].children[0].focus();
        }
    };

    return (
        <Row className={`justify-content-center ${note ? "" : "my-5"}`}>
            <Col>
                <Form
                    id={id}
                    className="form-note border border-2 rounded-3 p-2 bg-white"
                >
                    {/* input for title */}
                    <Form.Group controlId="inputTitle">
                        <Form.Control
                            className="border-0"
                            type="text"
                            placeholder="Title"
                            defaultValue={note && note.title}
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
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                        >
                            {note && note.content}
                        </Form.Control>
                    </Form.Group>

                    {/* Footer form */}
                    <Form.Group className="d-flex justify-content-end">
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={buttonHandler}
                        >
                            Save
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}

export default FormNote;
