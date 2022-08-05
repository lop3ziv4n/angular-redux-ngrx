import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./book/book.module').then((b) => b.BookModule),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then((b) => b.CounterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
