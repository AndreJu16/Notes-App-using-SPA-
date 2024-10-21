import React, { useState, useEffect } from 'react';
import NotesDetail from '../components/NotesDetail';
import { FaRegEdit } from 'react-icons/fa';
import ButtonAction from '../components/NotesControlButton';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import PageNotFound from './PageNotFound';
import PropTypes from 'prop-types';
import { EDIT_NOTES } from '../utils/routes';

function DetailPageContainer() {
    const { id } = useParams();
    const navigate = useNavigate();

    function handleEditClick() {
        navigate(EDIT_NOTES.replace(':id', id));
    }

    return <NotesDetailPage id={id} onEditButtonHandler={handleEditClick} />;
}

function NotesDetailPage({ id, onEditButtonHandler }) {
    const [note, setNote] = useState(null);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const noteData = await getNote(id);
                setNote(noteData);
            } catch (error) {
                console.error("Error Fething note:", error);
                setNote(undefined);
            }
        };
        fetchNote();
        }, [id]);

        if (note === undefined) {
            return <PageNotFound />;
        }

        return (
            <section>
                {note !== null && (
                    <>
                        <NotesDetail {...note} />
                        <div className="editNotes-action">
                            <ButtonAction title="Edit" onClick={onEditButtonHandler} icon={<FaRegEdit />} />
                        </div>
                    </>
                )}
            </section>
        );
    }

NotesDetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    onEditButtonHandler: PropTypes.func.isRequired,
};

export default DetailPageContainer;
