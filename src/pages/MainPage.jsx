import React, { useState } from 'react';
import NotesList from '../components/NotesList'
import SearchNotes from '../components/SearchNotes';
import ButtonAction from '../components/NotesControlButton';
import { getActiveNotes } from '../utils/local-data';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { NEW_NOTES } from '../utils/routes';

function MainPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    const navigate = useNavigate();
    const addButtonHandler = () => {
        navigate(NEW_NOTES);
    };

    return (
        <MainPage
            defaultKeyword={keyword}
            keywordChange={(newKeyword) => setSearchParams({ keyword: newKeyword })}
            onAddButtonHandler={addButtonHandler}
        />
    );
}

function MainPage({ defaultKeyword, keywordChange, onAddButtonHandler }) {
    const [notes] = useState(getActiveNotes());
    const [keyword, setKeyword] = useState(defaultKeyword || ''); 

    const updateKeyword = (newKeyword) => {
        setKeyword(newKeyword);
        keywordChange(newKeyword);
    };

    const filteredNotes = notes.filter(({ title }) => title.toLowerCase().includes(keyword.toLowerCase()));

    return (
        <div className="mainpage">
            <h2>Catatan Aktif</h2>
            <SearchNotes keyword={keyword} keywordChange={updateKeyword} />
            <NotesList notes={filteredNotes} />
            <div className="mainpage-action">
                <ButtonAction title='Tambah' onClick={onAddButtonHandler} icon={<FiPlus />} />
            </div>
        </div>
    );
}

MainPage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
    onAddButtonHandler: PropTypes.func.isRequired,
};

export default MainPageWrapper;

