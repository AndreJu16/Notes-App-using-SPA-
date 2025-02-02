import React from 'react';
import { Link } from 'react-router-dom';
import { BiArchiveIn } from 'react-icons/bi';
import { ARCHIVES } from '../utils/routes';

const NotesTopBar = () => (
    <header className="notes-header">
        <h1>
            <Link to="/" style={{ textDecoration: 'none'}}>Notes App</Link>
        </h1>
        <nav className="navBar">
            <ul>
                <li>
                    <Link to={ARCHIVES}>
                        <BiArchiveIn /> 
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default NotesTopBar;