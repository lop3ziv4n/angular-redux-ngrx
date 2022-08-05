import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Book} from "../model/book.model";

export const selectBooks = createFeatureSelector<Book[]>('mybooks');

export const selectBookById = (bookId: number) =>
  createSelector(selectBooks, (books: Book[]) => {
    let bookById = books.filter((_) => _.id == bookId);
    if (bookById.length == 0) {
      return null;
    }
    return bookById[0];
  });
