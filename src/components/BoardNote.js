import { Col, Row } from "react-bootstrap";
import React from "react";
import NoteBlock from "./NoteBlock";

function BoardNote({ listNote, onClickNote, change }) {
    // console.log("BoardNote");

    const generateCols = () => {
        let cols = [[], [], [], []];
        if (listNote.length > 0) {
            let i = 0;
            listNote.forEach((value, index) => {
                if (value) {
                    cols[i++ % 4].push(
                        <NoteBlock
                            key={index}
                            {...value}
                            onClick={onClickNote(index)}
                        />
                    );
                }
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
