import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Book} from "../../model/book.model";
import {AppState} from "../../../shared/model/app-state.model";
import {selectBooks} from "../../store/book.selectors";
import {booksActionTypes} from "../../store/book.actions";
import {selectAppState} from "../../../shared/store/app-state.selectors";
import {setAPIStatus} from "../../../shared/store/app-state.actions";

declare var window: any;

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @ViewChild('closeDeleteModal', {static: true}) closeDeleteModal: ElementRef | undefined;

  constructor(private bookStore: Store<Book>,
              private appStore: Store<AppState>) {
  }

  books$ = this.bookStore.pipe(select(selectBooks));

  idToDelete: number = 0;

  ngOnInit(): void {
    this.bookStore.dispatch(booksActionTypes.invokeBooksAPI());
  }

  openDeleteModal(id: number) {
    this.idToDelete = id;
  }

  delete() {
    this.bookStore.dispatch(
      booksActionTypes.invokeDeleteBookAPI({id: this.idToDelete})
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.closeDeleteModal?.nativeElement.click();
        this.appStore.dispatch(
          setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: ''}})
        );
      }
    });
  }

}
