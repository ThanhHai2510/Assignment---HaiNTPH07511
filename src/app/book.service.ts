import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from "./Book";
@Injectable()
export class BookService {

  constructor(
    private http: HttpClient
  ) { }
api = 'https://5e7f12ef7a92ed001656012d.mockapi.io'

getBooks(): Observable<Book[]>{
      return this.http.get<Book[]>(`${this.api}/book`);
  }

  getBook(id): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.api}/book/${id}`);
  }
}