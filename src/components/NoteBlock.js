function NoteBlock({ title, content }) {
    return (
        <div className="note my-2 mx-0 p-2 rounded-3">
            <h5 className="text-start ms-2 col">{title}</h5>
            {content.split("\n").map((value) => (
                <p>{value}</p>
            ))}
        </div>
    );
}

export default NoteBlock;
