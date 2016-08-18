import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions.js';
import Note from './Note.js';
import './Notes.css';

let fetched = false;
const Notes = ({fetchNotes, toggleRead, notes, showRead}) => {
  if (!fetched) {
    fetchNotes();
    fetched = true;
  }

  return (
    <div className="Notes">
    {Array.isArray(notes) ? notes.filter(note => showRead ? true : !note.read).map((note) => (
      <Note key={note.id} toggleRead={toggleRead} note={note} />
    )) : null}
    </div>
  );
};

export default connect(state => ({
  notes: state.notes,
  showRead: state.showRead,
}), actions)(Notes);
