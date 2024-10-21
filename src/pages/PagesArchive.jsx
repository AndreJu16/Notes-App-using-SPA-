import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/NotesList';
import NotesSearchBar from '../components/SearchNotes';
import { getArchivedNotes } from '../utils/local-data';
import { useSearchParams } from 'react-router-dom';


function ArchivePage({ notes, keyword, keywordChange }) {
    const filteredNotes = notes.filter(({ title }) => title.toLowerCase().includes(keyword.toLowerCase()));

    return (
        <section className="ArchivePage">
            <h2>Catatan Arsip</h2>
            <NotesSearchBar keyword={keyword} keywordChange={keywordChange} />
            <NotesList notes={filteredNotes} />
        </section>
    )
}

ArchivePage.propTypes =  {
    notes: PropTypes.array.isRequired, 
    // defaultKeyword: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    // keywordChange: PropTypes.func.isRequired,
    onKeywordChange: PropTypes.func.isRequired
};

function ArchivePageContainer() {
    const [searchParams, setUrlKeyword] = useSearchParams();
    const defaultKeyword = searchParams.get("keyword") || "";
    const [keyword, setKeyword] = useState(defaultKeyword);

    const ChangeSearchParams = (newKeyword) => {
        setUrlKeyword({ keyword: newKeyword });
    };

    return <ArchivePage notes={getArchivedNotes()} defaultKeyword={defaultKeyword} keyword={keyword} keywordChange={setKeyword} onKeywordChange={ChangeSearchParams} />;
}

export default ArchivePageContainer;



