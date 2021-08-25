// import library
// import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// import component

import FormNote from "./components/FormNote";
import NoteModal from "./components/NoteModal";
import BoardNote from "./components/BoardNote";
import BoardToast from "./components/BoardToast";
// list note test
let listNote = require("./NoteList.json");

let noteForModal;

// There are state of others components
let stateOfBoardNote;
const getStateOfBoardNote = (state) => (stateOfBoardNote = state);

let stateOfModalNote;
const getStateOfModalNote = (state) => (stateOfModalNote = state);

let putNewToast;
const getFromBoardToast = (input) => (putNewToast = input);

const createUndoCall = (note, i) => (func) => {
    console.log("undocall");
    listNote.splice(i, 0, note);
    func();
    stateOfBoardNote();
};
function App() {
    // Sort note into for cols

    // Delete the note
    const deleteNote = (index) => {
        return listNote.splice(index, 1);
    };

    // Handler note onClick
    const noteBlockClick = (index) => {
        return (e) => {
            let tagName = e.target.tagName;
            // console.log(tagName);
            if (
                tagName === "BUTTON" ||
                tagName === "svg" ||
                tagName === "path"
            ) {
                console.log("Event delete");
                let note = deleteNote(index)[0];
                let func = createUndoCall(note, index);
                putNewToast(func);
                stateOfBoardNote();
                return;
            }
            noteForModal = listNote[index];
            stateOfModalNote(true, noteForModal);
        };
    };

    // Handler add new notes to the list
    const addNote = (e) => {
        e.preventDefault();
        let title = document.getElementById("inputTitle").value;
        let content = document.getElementById("inputContent").innerText;

        if (title && content) {
            listNote.unshift({
                title: title,
                content: content,
            });
            stateOfBoardNote();
        }
    };
    // Update note
    const updateNote = (e) => {
        let form = e.target.form;
        let title = form.children[0].children[0].value;
        let content = form.children[1].children[0].innerText;

        noteForModal.title = title;
        noteForModal.content = content;

        stateOfModalNote(false);
        stateOfBoardNote();
    };

    return (
        <>
            <Container>
                <FormNote buttonHandler={addNote} id={"formAddNote"} />

                <BoardNote
                    listNote={listNote}
                    onClickNote={noteBlockClick}
                    getState={getStateOfBoardNote}
                />
            </Container>

            <NoteModal
                buttonHandler={updateNote}
                getState={getStateOfModalNote}
            ></NoteModal>

            <BoardToast get={getFromBoardToast} />
        </>
    );
}

export default App;
