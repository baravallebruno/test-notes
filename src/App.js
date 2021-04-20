import React  from 'react';
import './App.css';
import 'h8k-components';
import NotesApp from './components/notes-app/index.js';

const title = "Notes App";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <NotesApp/>
    </div>
  );
}

export default App;
