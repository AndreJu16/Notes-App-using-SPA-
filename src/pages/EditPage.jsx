import React, { useState, useEffect } from 'react';
import NotesInput from '../components/NotesInput';
import ButtonAction from '../components/NotesControlButton';
import { editNote, getNote } from '../utils/local-data';
import { useNavigate, useParams } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import PropTypes from 'prop-types';

function EditPageContainer() {
    const { id } = useParams();
    const navigate = useNavigate();

    const saveNotesHandler = (note) => {
        editNote(note);
        navigate("/");
    };

    const note = getNote(id);

    if (!note) {
        return <p>Note With ID "{id}" not available.</p>;
    }

    return <EditPage onSaveNotesHandler={saveNotesHandler} initialNote={note} />;
}

function EditPage({ onSaveNotesHandler, initialNote }) {
    const [note, setNote] = useState(initialNote);

    const onTitleChange = (event) => {
        setNote((prevNote => ({ ...prevNote, title: event.target.value })));
    };

    const handleBodyUpdate = (event) => {
        setNote((prevNote) => ({ ...prevNote, body: event.target.innerHTML }));
    };

    const onClickSaveButton = () => {
        onSaveNotesHandler(note);
    };

    useEffect(() => {
        setNote(initialNote);
    }, [initialNote]);

    return (
        <section className="edit-page">
            <h2>Edit Note</h2>
            <NotesInput state={note} onTitleChange={onTitleChange} onBodyInput={handleBodyUpdate} initialBodyEdit={initialNote.body} />
            <div className="edit-page-action">
                <ButtonAction title="Save" onClick={onClickSaveButton} icon={<FiCheck />} />
            </div>
        </section>
    );
}

EditPage.propTypes = {
    onSaveNotesHandler: PropTypes.func.isRequired,
    initialNote: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
};

export default EditPageContainer;