import NoteBlock from "./NoteBlock";

function NoteBlocks({ allNote, usedNotes }) {
    return (
        <>
            {usedNotes.map((value) => {
                return (
                    <NoteBlock
                        key={value}
                        title={allNote[value].title}
                        content={allNote[value].content}
                    />
                );
            })}
        </>
    );
}

export default NoteBlocks;
