import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
	//mapping of our states
	//Books(Key) is our global application state
	//Values are whatever that is going to be returned
	//From BooksReducer
	//Any key, value we add in here will add up in our Global State
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
