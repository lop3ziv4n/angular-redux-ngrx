import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {FormsModule} from '@angular/forms';
import {BookEffects} from "./store/book.effects";
import {bookReducer} from "./store/book.reducers";
import {BookRoutingModule} from './book-routing.module';
import {BookEditComponent} from './component/book-edit/book-edit.component';
import {BookListComponent} from "./component/book-list/book-list.component";
import {BookNewComponent} from "./component/book-new/book-new.component";


@NgModule({
  declarations: [
    BookListComponent,
    BookNewComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([BookEffects])
  ],
})
export class BookModule {
}
