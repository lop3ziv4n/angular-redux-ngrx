import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {CounterRoutingModule} from './counter-routing.module';
import {ChildComponent} from "./child/child.component";
import {GrandchildComponent} from "./grandchild/grandchild.component";
import {CounterComponent} from "./counter/counter.component";
import {counterReducer} from "./store/counter.reducer";


@NgModule({
  declarations: [
    ChildComponent,
    GrandchildComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature('count', counterReducer),
  ],
})
export class CounterModule {
}
