// import library
import React, {
    useState,
    //useMemo,
    useCallback,
    // useEffect,
} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// import component
import FormNote from "./components/FormNote";
import NoteModal from "./components/NoteModal";
import BoardNote from "./components/BoardNote";
import BoardToast from "./components/BoardToast";

// Using memo - create memo
const MemoBoardNote = React.memo(BoardNote);
const MemoNoteModal = React.memo(NoteModal);
const MemoFormNote = React.memo(FormNote);
const MemoBoardToast = React.memo(BoardToast);
// list note test
let listNote = require("./NoteList.json");

let noteForModal;
let indexNoteForModal;

// There are state of others components
let putNewToast;
const getFromBoardToast = (input) => (putNewToast = input);

const createUndoCall = (note, i, stateOfBoardNote) => (func) => {
    // console.log("undocall");
    listNote.splice(i, 0, note);
    func();
    stateOfBoardNote();
};

function App() {
    // State -- Khi state change App sẽ render lại
    // -> Các sub component render theo
    // -> Không tối ưu
    // -> Cần thực hiện chỉ render component changed
    //      - Cách 1: Redux hoặc kéo state của sub component về App (previous version)
    //      - Cách 2: memo, useMemo - chỉ thực hiện tính toán lại khi có sự thay đổi
    const [listChange, setListChange] = useState([0]);
    const stateOfBoardNote = (i) => {
        // Do mỗi lần tạo một mảng rỗng sẽ có địa chỉ khác nhau
        setListChange([i]);
    };

    const [showModal, setShowModal] = useState(false);
    const stateOfModalNote = (show) => setShowModal(show);

    // Delete the note
    const deleteNote = (index) => {
        return listNote.splice(index, 1);
    };

    // Handler note onClick
    const noteBlockClick = useCallback((index) => {
        return (e) => {
            let tagName = e.target.tagName;
            // console.log(tagName);
            if (
                tagName === "BUTTON" ||
                tagName === "svg" ||
                tagName === "path"
            ) {
                // console.log("Delete evenet", listChange);
                let note = deleteNote(index)[0];
                let undo = createUndoCall(note, index, stateOfBoardNote);
                putNewToast(undo);
                stateOfBoardNote(index);
                // console.log("Delete evenet", listChange);
                return;
            }
            noteForModal = listNote[index];
            indexNoteForModal = index;
            stateOfModalNote(true);
        };
    }, []);

    // Handler add new notes to the list
    const addNote = useCallback((e) => {
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
    }, []);
    // Update note
    const updateNote = (e) => {
        let form = e.target.form;
        let title = form.children[0].children[0].value;
        let content = form.children[1].children[0].innerText;

        noteForModal.title = title;
        noteForModal.content = content;

        stateOfModalNote(false);
        stateOfBoardNote(indexNoteForModal);
    };

    return (
        <>
            <Container>
                <MemoFormNote buttonHandler={addNote} id={"formAddNote"} />

                <MemoBoardNote
                    listNote={listNote}
                    change={listChange}
                    onClickNote={noteBlockClick}
                />
            </Container>

            <MemoNoteModal
                buttonHandler={updateNote}
                note={noteForModal}
                show={showModal}
            />
            <MemoBoardToast get={getFromBoardToast} />
        </>
    );
}

export default App;
