import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const TOGGLE_READ = 'TOGGLE_READ';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

function note(state = null, action) {
  switch (action.type) {
    case TOGGLE_READ:
      const read = state.id === action.note.id ? !state.read : state.read;
      return Object.assign({}, state, {read});
    default:
      return state;
  }
}

function reducer(state = {
  notes: null,
  showRead: false
}, action) {
  switch (action.type) {
    case FETCH_NOTES_SUCCESS:
      return Object.assign({}, state, {
        notes: action.notes
      });
    case TOGGLE_READ:
      return Object.assign({}, state, {
        notes: state.notes.map(n => note(n, action))
      });
    case TOGGLE_FILTER:
      return Object.assign({}, state, {
        showRead: !state.showRead
      });
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
