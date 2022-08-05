import {createAction, props} from '@ngrx/store';
import {Book} from "../model/book.model";

export const invokeBooksAPI = createAction(
  '[Books API] Invoke Books Fetch API'
);

export const booksFetchAPISuccess = createAction(
  '[Books API] Fetch API Success',
  props<{ allBooks: Book[] }>()
);

export const invokeSaveNewBookAPI = createAction(
  '[Books API] Invoke save new book api',
  props<{ newBook: Book }>()
);

export const saveNewBookAPISuccess = createAction(
  '[Books API] save new book api success',
  props<{ newBook: Book }>()
);

export const invokeUpdateBookAPI = createAction(
  '[Books API] Invoke update book api',
  props<{ updateBook: Book }>()
);

export const updateBookAPISuccess = createAction(
  '[Books API] update  book api success',
  props<{ updateBook: Book }>()
);

export const invokeDeleteBookAPI = createAction(
  '[Books API] Invoke delete book api',
  props<{ id: number }>()
);

export const deleteBookAPISuccess = createAction(
  '[Books API] deleted book api success',
  props<{ id: number }>()
);

export const booksActionTypes = {
  invokeBooksAPI,
  booksFetchAPISuccess,
  invokeSaveNewBookAPI,
  saveNewBookAPISuccess,
  invokeUpdateBookAPI,
  updateBookAPISuccess,
  invokeDeleteBookAPI,
  deleteBookAPISuccess
};
