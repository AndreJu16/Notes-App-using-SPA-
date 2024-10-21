import React from 'react';
import PropTypes from 'prop-types';

const NotesControlButton = ({ title, onClick, icon, className }) => (
    <button className={`action ${className}`} type="button" title={title} onClick={onClick}>
        {icon}
    </button>
);

NotesControlButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default NotesControlButton;