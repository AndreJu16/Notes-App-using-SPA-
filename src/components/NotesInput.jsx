import React, {useState } from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

const NotesInput = (props) => {
    const [notesState, setNotesState] = useState(props.state);

    const onTitleChange = (event) => {
        setNotesState({ ...notesState, title: event.target.value });
        props.onTitleChange(event);
    };

    const handleBodyUpdate =(event) => {
        props.onBodyInput(event);
    };

    return (
        <section className="noteSection">
            <header className="noteHeader">
                <input
                    className='notesTitle'
                    placeholder='Judul Catatan'
                    value={notesState.title}
                    onChange={onTitleChange}
                    spellCheck='false'
                />
            </header>
            <article
                className='notesBody'
                contentEditable='true'
                data-placeholder='Tulis Catatan mu disini'
                onInput={handleBodyUpdate}
                spellCheck='false'
                suppressContentEditableWarning={true}
            >
                {props.initialBodyEdit !== undefined ? parser(props.initialBodyEdit) : ''}
            </article>
        </section>
    );
};

NotesInput.proTypes = {
    state: PropTypes.shape({
        title: PropTypes.string.isRequired  
    }).isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onBodyInput: PropTypes.func.isRequired,
    initialBodyEdit: PropTypes.string
};

export default NotesInput;