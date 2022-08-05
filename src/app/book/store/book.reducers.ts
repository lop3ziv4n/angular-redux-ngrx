import {createReducer, on} from '@ngrx/store';
import {booksActionTypes} from "./book.actions";
import {Book} from "../model/book.model";

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(booksActionTypes.booksFetchAPISuccess, (state, {allBooks}) => {
    return allBooks;
  }),
  on(booksActionTypes.saveNewBookAPISuccess, (state, {newBook}) => {
    let newState = [...state];
    newState.unshift(newBook);
    return newState;
  }),
  on(booksActionTypes.updateBookAPISuccess, (state, {updateBook}) => {
    let newState = state.filter((_) => _.id != updateBook.id);
    newState.unshift(updateBook);
    return newState;
  }),
  on(booksActionTypes.deleteBookAPISuccess, (state, {id}) => {
    let newState = state.filter((_) => _.id != id);
    return newState;
  })
);
