import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Book} from "../../model/book.model";
import {AppState} from "../../../shared/model/app-state.model";
import {switchMap} from "rxjs";
import {selectBookById} from "../../store/book.selectors";
import {invokeUpdateBookAPI} from "../../store/book.actions";
import {selectAppState} from "../../../shared/store/app-state.selectors";
import {setAPIStatus} from "../../../shared/store/app-state.actions";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookStore: Store<Book>,
              private appStore: Store<AppState>) {
  }

  bookForm: Book = {
    id: 0,
    author: '',
    name: '',
    cost: 0,
  };

  ngOnInit(): void {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        let id = Number(params.get('id'));
        return this.bookStore.pipe(select(selectBookById(id)));
      })
    );
    fetchData$.subscribe((data) => {
      if (data) {
        this.bookForm = {...data};
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  update() {
    this.bookStore.dispatch(
      invokeUpdateBookAPI({updateBook: {...this.bookForm}})
    );
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
