import {FETCH_NOTES, FETCH_NOTES_SUCCESS, TOGGLE_READ, TOGGLE_FILTER} from './store.js';
const ENDPOINT = 'https://webtask.it.auth0.com/api/run/wt-f_anderzon-gmail_com-0/index?webtask_no_cache=1';

export const fetchNotes = () => (dispatch, getState) => {
  dispatch({type: FETCH_NOTES});

  fetch(ENDPOINT)
    .then(notes => notes.json())
    .then(notes => dispatch({type: FETCH_NOTES_SUCCESS, notes }));
};

export const toggleRead = (note) => (dispatch) => {
  dispatch({type: TOGGLE_READ, note});
  const {id, title, text} = note;
  const read = !note.read;

  fetch(`${ENDPOINT}&action=updateNote&id=${id}&read=${read}&title=${title}&text=${text}`);
};

export const toggleFilter = () => (dispatch) => {
  dispatch({type: TOGGLE_FILTER});
};
