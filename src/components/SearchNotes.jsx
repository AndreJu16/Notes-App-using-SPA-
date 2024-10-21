import React from 'react';
import PropTypes from 'prop-types';

const NotesSearchBar = ({keyword, keywordChange }) => {
    const SearchBarNotes = (event) => {
        keywordChange(event.target.value);
    };

    return (
        <div className="search-wrapper">
            <input type="search" className="search-input" placeholder="Cari judulnya disini ..." value={keyword} onChange={SearchBarNotes} />
        </div>
    );
};

NotesSearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
};

export default NotesSearchBar;