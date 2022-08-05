import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  create(payload: Book) {
    return this.http.post<Book>('http://localhost:3000/books', payload);
  }

  update(payload: Book) {
    return this.http.put<Book>(
      `http://localhost:3000/books/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/books/${id}`);
  }
}
