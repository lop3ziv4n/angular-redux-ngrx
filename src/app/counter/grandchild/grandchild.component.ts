import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {reset} from 'src/app/counter/store/counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit {

  count$: Observable<number> | undefined;

  constructor(private store: Store<{ count: number }>) {
  }

  ngOnInit(): void {
    this.count$ = this.store.select('count');
  }

  reset() {
    this.store.dispatch(reset());
  }
}
