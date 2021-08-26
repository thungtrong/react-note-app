import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

function NoteBlock({ title, content, onClick }) {
    // console.log("Note Block was run");
    return (
        <div className="note my-2 mx-0 p-2 rounded-3" onClick={onClick}>
            <h5 className="text-start ms-2 col">{title}</h5>
            <div className="content">
                {content.split("\n").map((value, i) => (
                    <p key={i}>{value}</p>
                ))}
            </div>

            <div className="d-block position-relative note-footer">
                <Button
                    variant="outline-secondary"
                    size="sm"
                    className="position-absolute bottom-0 end-0 border-0 tool"
                >
                    <FaTrashAlt />
                </Button>
            </div>
        </div>
    );
}

export default NoteBlock;
