import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {divide, multiply} from "../store/counter.actions";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  count$: Observable<number> | undefined;

  constructor(private store: Store<{ count: number }>) {
  }

  ngOnInit(): void {
    this.count$ = this.store.select('count');
  }

  multiply() {
    this.store.dispatch(multiply({value: 2}));
  }

  divide() {
    this.store.dispatch(divide({value: 2}));
  }
}
