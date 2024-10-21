import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import {showFormattedDate} from './../utils/index';
import { Link } from 'react-router-dom';
import ButtonAction from './NotesControlButton';
import { deleteNotes, archiveNotes, unarchiveNotes } from '../utils/local-data';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { ARCHIVES, EDIT_NOTES, NOTES_DETAIL } from '../utils/routes';

function NotesItem({ id, title, body, createdAt, archived, setNotesList }) {
    const [isArchived, setIsArchived] = useState(archived);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setIsArchived(archived);
    }, [archived]);

    function deleteNotesHandler() {
        deleteNotes(id);
        setNotesList((prevNotes) => prevNotes.filter((note) => note.id !== id))
    }

    function archiveNotesHandler() {
        archiveNotes(id);
        setIsArchived(true);
        navigate(ARCHIVES);
    }

    function unarchiveNotesHandler() {
        unarchiveNotes(id);
        setIsArchived(false);
        navigate("/");
    }

    function handleEditClick() {
        navigate(EDIT_NOTES.replace(':id', id));
    }

    return (
        <div className="notesItem">
            <h3 className="notesItem-title">
                <Link to={NOTES_DETAIL.replace(':id', id)}>{title}</Link>
            </h3>
            <p className="notesItem-createdAt">{showFormattedDate(createdAt)}</p>
            <p className="notesItem-body">{parser(body)}</p>
            <div className="noteItem-action">
                <ButtonAction title="Edit" onClick={handleEditClick} icon={<FaRegEdit />} />
                {location.pathname === ARCHIVES ? <ButtonAction title="Unarchive" onClick={unarchiveNotesHandler} icon={<BiArchiveOut />} /> : <ButtonAction title="Archive" onClick={archiveNotesHandler} icon={<BiArchiveIn />} />}
                <ButtonAction title="Delete" onClick={deleteNotesHandler} icon={<FiTrash2 />} />
            </div>
        </div>
    )

}

NotesItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    setNotesList: PropTypes.func.isRequired
};

export default NotesItem;