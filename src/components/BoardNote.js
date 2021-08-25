import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import NoteBlock from "./NoteBlock";

function BoardNote({ listNote, onClickNote, getState }) {
    const [reload, setReload] = useState(false);
    const changeState = () => setReload(!reload);

    getState(changeState);

    console.log("BoardNote");
    const generateCols = () => {
        let cols = [[], [], [], []];
        if (listNote.length > 0) {
            listNote.forEach((value, index) => {
                cols[index % 4].push(
                    <NoteBlock
                        key={index}
                        {...value}
                        onClick={onClickNote(index)}
                    />
                );
            });

            let columns = [];
            cols.forEach((value, i) => {
                columns.push(<Col key={i}>{value}</Col>);
            });
            return columns;
        }

        return <Col>No note to show</Col>;
    };

    return <Row>{generateCols()}</Row>;
}

export default BoardNote;
