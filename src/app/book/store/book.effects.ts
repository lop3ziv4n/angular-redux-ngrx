import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, map, mergeMap, switchMap, withLatestFrom} from "rxjs";
import {BookService} from "../services/book.service";
import {booksActionTypes} from "./book.actions";
import {selectBooks} from "./book.selectors";
import {AppState} from "../../shared/model/app-state.model";
import {Book} from "../model/book.model";
import {setAPIStatus} from "../../shared/store/app-state.actions";

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions,
              private bookService: BookService,
              private bookStore: Store<Book>,
              private appStore: Store<AppState>) {
  }

  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(booksActionTypes.invokeBooksAPI),
      withLatestFrom(this.bookStore.pipe(select(selectBooks))),
      mergeMap(([, bookFormStore]) => {
        if (bookFormStore.length > 0) {
          return EMPTY;
        }
        return this.bookService
          .get()
          .pipe(map((data) => booksActionTypes.booksFetchAPISuccess({allBooks: data})));
      })
    )
  );

  saveNewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(booksActionTypes.invokeSaveNewBookAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: ''}})
        );
        return this.bookService.create(action.newBook).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: {apiResponseMessage: '', apiStatus: 'success'},
              })
            );
            return booksActionTypes.saveNewBookAPISuccess({newBook: data});
          })
        );
      })
    );
  });

  updateBookAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(booksActionTypes.invokeUpdateBookAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: ''}})
        );
        return this.bookService.update(action.updateBook).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: {apiResponseMessage: '', apiStatus: 'success'},
              })
            );
            return booksActionTypes.updateBookAPISuccess({updateBook: data});
          })
        );
      })
    );
  });

  deleteBooksAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(booksActionTypes.invokeDeleteBookAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: ''}})
        );
        return this.bookService.delete(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: {apiResponseMessage: '', apiStatus: 'success'},
              })
            );
            return booksActionTypes.deleteBookAPISuccess({id: actions.id});
          })
        );
      })
    );
  });
}
