import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Book} from "../../model/book.model";
import {AppState} from "../../../shared/model/app-state.model";
import {invokeSaveNewBookAPI} from "../../store/book.actions";
import {selectAppState} from "../../../shared/store/app-state.selectors";
import {setAPIStatus} from "../../../shared/store/app-state.actions";

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

  constructor(private bookStore: Store<Book>,
              private appStore: Store<AppState>,
              private router: Router) {
  }

  bookForm: Book = {
    id: 0,
    author: '',
    name: '',
    cost: 0,
  };

  ngOnInit(): void {
  }

  save() {
    this.bookStore.dispatch(invokeSaveNewBookAPI({newBook: this.bookForm}));
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({apiStatus: {apiResponseMessage: '', apiStatus: ''}})
        );
        this.router.navigate(['/']);
      }
    });
  }

}
