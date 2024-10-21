import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { showFormattedDate } from '../utils';

function NotesDetail({ title, body, createdAt }) {
    const parsedBody = typeof body === "string" ? parser(body) : null;

    return (
        <article className="notesDetail">
            <h3 className="notesDetail-title">{title}</h3>
            <p className="notesDetail-created-At">{showFormattedDate(createdAt)}</p>
            {parsedBody && <div className="noteDetail-body">{parsedBody}</div>}
        </article>
    );
}

NotesDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NotesDetail; 