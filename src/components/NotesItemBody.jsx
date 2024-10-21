import React from 'react';
import PropTypes from 'prop-types';
import{ showFormattedDate } from './../utils/index';

function NotesItemBody({ title, body, createdAt }) {
    return (
        <>
            <h3 className="notes-item__title">{title}</h3>
            <p className="notes-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="notes-item__body">{body}</p>
        </>
    );
}

NoteDetail.propTypes = {

    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}

export default NotesItemBody;