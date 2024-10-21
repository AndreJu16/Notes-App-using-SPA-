import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotesTopBar from './components/NotesTopBar';
import ArchivePageContainer from './pages/PagesArchive';
import NewPage from './pages/NewNotes'
import MainPageWrapper from './pages/MainPage';
import EditPageContainer from './pages/EditPage';
import DetailPageContainer from './pages/NotesDetailPage';
import PagesNotFound from './pages/PageNotFound';
import { HOME, NOTES_DETAIL, NEW_NOTES, ARCHIVES, EDIT_NOTES, PAGE_NOT_FOUND } from './utils/routes'; 

function App() {
  const updateNotes = (note) => {
    editNote(note);
    navigate("/");
  };
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <header>
        <NotesTopBar />
      </header>
      <main>
          <Routes>
            <Route path={HOME} element={<MainPageWrapper />} /> 
            <Route path={ARCHIVES} element={<ArchivePageContainer />} /> 
            <Route path={NEW_NOTES} element={<NewPage />} /> 
            <Route path={EDIT_NOTES} element={<EditPageContainer onSaveNoteHandler={updateNotes} />} /> 
            <Route path={NOTES_DETAIL} element={<DetailPageContainer/>} />
            <Route path={PAGE_NOT_FOUND} element={<PagesNotFound/>} />
          </Routes>
      </main>
    </div>    
    </BrowserRouter>
    
  );
}

export default App;