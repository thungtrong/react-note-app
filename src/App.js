import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import NoteBlock from "./components/NoteBlock";

var listNote = [
    {
        title: "Note number 1",
        content:
            "Note number 1Note number 1Note number 1Note number 1Note number 1Note number 1\nNote number 1",
    },
    {
        title: "Note number 2",
        content:
            "Note number 2Note number 2Note number 2Note number 2Note number 2Note number",
    },
    {
        title: "Note number 3",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        title: "Note number 4",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies. Eget lorem dolor sed viverra ipsum. Augue mauris augue neque gravida in fermentum et. Facilisis leo vel fringilla est ullamcorper eget nulla. Ut tellus elementum sagittis vitae et leo duis ut diam. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellu",
    },
    {
        title: "Note number 5",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies. Eget lorem dolor sed viverra ipsum. Augue mauris augue neque gravida in fermentum et. Facilisis leo vel fringilla est ullamcorper eget nulla. Ut tellus elementum sagittis vitae et leo duis ut diam. Lectus mauris ultrices eros in cursus turpis massa tincidunt.",
    },
    {
        title: "Note number 6",
        content:
            "quet bibendum enim facilisis gravida. Semper risus in hendrerit gravida rutrum quisque. Urna molestie at elementum eu facilisis sed odio morbi. Sit amet est placerat in egestas erat imperdiet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Lorem ipsum dolor sit amet. Et leo duis ut diam quam nulla porttitor massa.",
    },
    {
        title: "Note number 7",
        content:
            "pellentesque \n elit ullamcorper \n dignissim cras tincidunt.",
    },
];

function App() {
    const [listChange, setListChange] = useState(true);

    function generateCols() {
        let cols = [[], [], [], []];
        listNote.forEach((value, index) => {
            cols[index % 4].push(<NoteBlock key={index} {...value} />);
        });
        return cols;
    }

    const addNote = (e) => {
        e.preventDefault();
        let title = document.getElementById("inputTitle").value;
        let content = document.getElementById("inputContent").innerText;
        console.log(content);
        if (title && content) {
            listNote.push({
                title: title,
                content: content,
            });
            setListChange(!listChange);
        }
    };

    return (
        <Container>
            <Row className="justify-content-center my-5">
                <Col md={9}>
                    <Form
                        id="formAddNote"
                        className="border border-1 rounded-3 p-2"
                    >
                        <Form.Group controlId="inputTitle">
                            <Form.Control
                                className="border-0"
                                type="text"
                                placeholder="Title"
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        document
                                            .getElementById("inputContent")
                                            .focus();
                                    }
                                }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="inputContent" className="my-2">
                            <Form.Control
                                as="span"
                                className="text-area border-0"
                                role="textbox"
                                placeholder="Create Note"
                                contentEditable
                            ></Form.Control>
                        </Form.Group>
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
                </Col>
            </Row>

            <Row>
                {generateCols().map((value, index) => {
                    return <Col key={index}>{value}</Col>;
                })}
            </Row>
        </Container>
    );
}

export default App;
