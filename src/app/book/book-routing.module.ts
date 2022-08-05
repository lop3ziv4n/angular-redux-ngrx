import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./component/book-list/book-list.component";
import {BookNewComponent} from "./component/book-new/book-new.component";
import {BookEditComponent} from "./component/book-edit/book-edit.component";

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'add',
    component: BookNewComponent,
  },
  {
    path: 'edit/:id',
    component: BookEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {
}
