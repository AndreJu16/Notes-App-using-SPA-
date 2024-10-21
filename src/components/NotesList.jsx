import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NotesItem from './NotesItem';

function NotesList( { notes }) {
    const [notesList, setNotesList] = useState(notes);

    useEffect(() => {
        setNotesList(notes);
    }, [notes]);

    const renderNotes = () => {
        return notesList.map (({ id, title, body, createdAt, archived}) => <NotesItem 
        key={id} 
        id={id} 
        title={title} 
        body={body} 
        createdAt={createdAt}
        archived={archived}
        setNotesList={setNotesList}
        />);
    };

    return (
        <div className="notesContainer">
            {notesList.length > 0 ? (
                <ul className="notesList">{renderNotes()}</ul>
            ) : (
                <section className="notesList-empty">
                    <p className="notesList-noNotes">Tidak ada catatan yang di arsipkan</p>
                </section>
            )}
        </div>
    );
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            archived: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default NotesList;